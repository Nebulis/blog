import React, { FunctionComponent, useContext, useEffect, useState } from "react"
import { database } from "../firebase"
import { Checkbox, Input, Textarea } from "./input"
import { PrimaryDarkButton } from "./button"
import { css } from "@emotion/react"
import { ExternalLink } from "./links/link"
import md5 from "md5"
import styled from "@emotion/styled"
import { RandomAvatar } from "./random-avatar"
import {
  FaEnvelope,
  FaFacebook,
  FaHeart,
  FaLink,
  FaPen,
  FaPinterest,
  FaSpinner,
  FaTwitter,
  FaUser,
} from "react-icons/all"
import { Status } from "../../types/shared"
import { ErrorAlert, SuccessAlert } from "./alert"
import { subscribe } from "../../services/newsletter"
import { useCustomTranslation } from "../../i18n-hook"
import {
  buildCurrentSharedUrl,
  capitalize,
  twitter,
  pinterest as pinterestHandle,
  buildPinterestUrl,
} from "../../utils"
import { PageProps } from "gatsby"
import { useLocalStorage } from "../../use-local-storage"
import { ApplicationContext } from "../application"
import { Divider } from "./divider"
import { PinterestImage } from "../images/layout"
import { PinterestContext } from "../layout/pinterest.context"
import { off, onValue, push, ref, set } from "firebase/database"

interface CommentsProps {
  collectionName: string
  facebookQuote?: string
  className?: string
  location: PageProps["location"]
  pinterest?: { description: string; nodes: React.ReactNode[] }
  showLikes?: boolean
  showShare?: boolean
}

interface CommentType {
  name: string
  content: string
  timestamp: number
  website: string
  avatar: string
  parent?: string
}
interface CommentFormType {
  name: string
  message: string
  email: string
  website: string
  saveInBrowser: boolean
  subscribeToNewsletter: boolean
}
interface CommentProp extends CommentType {
  id: string
  children: CommentProp[]
}

interface DatabaseComments {
  [key: string]: CommentType
}

// rules that was working when using published
// {
//   "rules": {
//   "comments": {
//     "$page": {
//       ".read": "auth !== null || (query.orderByChild === 'published' && query.equalTo === true)",
//         ".indexOn": "published",
//         "$key": {
//         ".write": "true",
//           ".validate": "newData.hasChildren(['content', 'name', 'timestamp']) && newData.child('content').isString()&& newData.child('name').isString() && newData.child('timestamp').isNumber()",
//
//           "published": {
//           ".validate": "(newData.val() === true && auth !== null) || newData.val() === false"
//         }
//       }
//     }
//   }
// }
// }
//
// database
//   .ref(`comments/${collectionName}`)
//   .orderByChild("published")
//   .equalTo(true)
const transformPath = (path: string): string => path.replace(/\//g, "__")

const commentsStyle = css`
  font-size: 0.9rem;
  .comments-social-network {
    margin-bottom: calc(1.45rem - 1px);

    & span:not(:last-of-type) {
      border-right-style: solid;
    }
  }
`
export const Comments: FunctionComponent<CommentsProps> = ({
  collectionName,
  className = "",
  location,
  facebookQuote = "",
  pinterest,
  showLikes = true,
  showShare = true,
}) => {
  const [comments, setComments] = useState<CommentProp[]>([])
  const [numberOfComments, setNumberOfComments] = useState(0)
  const [likes, setLikes] = useState(0)
  const [localLikes, setLocalLikes] = useLocalStorage<string[]>("likes", [])
  const [commentToEdit, setCommentToEdit] = useState("")
  const [scrollToAnchor, setScrollToAnchor] = useState(true)
  const { displayComments } = useContext(ApplicationContext)
  const { setSelectedPin, selectedPin } = useContext(PinterestContext)
  // set as loading, as we directly load the comments. otherwise we quickly display the comments before showing the loading message
  const [status, setStatus] = useState<Status>("LOADING")
  const [commentStatus, setCommentStatus] = useState<Status>("INITIAL")
  const [newsletterStatus, setNewsletterStatus] = useState<Status>("INITIAL")
  const { t } = useCustomTranslation("common")

  // hide status after 10s
  useEffect(() => {
    const timeout = 10000
    let interval1: NodeJS.Timeout
    let interval2: NodeJS.Timeout
    if (commentStatus === "SUCCESS") {
      interval1 = setTimeout(() => {
        setCommentStatus("INITIAL")
      }, timeout)
    }
    if (newsletterStatus === "SUCCESS") {
      interval2 = setTimeout(() => {
        setCommentStatus("INITIAL")
      }, timeout)
    }
    return () => {
      clearTimeout(interval1)
      clearTimeout(interval2)
    }
  }, [commentStatus, newsletterStatus])

  useEffect(() => {
    // dont'run in development
    if (!displayComments) {
      setStatus("SUCCESS")
      return
    }
    const reference = ref(database, `comments/${transformPath(collectionName)}`)
    setStatus("LOADING")

    onValue(reference, (snapshot) => {
      const commentsAsObject = snapshot.val() as DatabaseComments | null
      if (commentsAsObject) {
        const commentsAsArray: CommentProp[] = Object.keys(commentsAsObject).map((key) => ({
          ...commentsAsObject[key],
          id: key,
          children: [],
        }))
        const transformedComments: CommentProp[] = []
        commentsAsArray.forEach((comment) => {
          if (!comment.parent) {
            transformedComments.push(comment)
          } else {
            const parent = commentsAsArray.find((c) => c.id === comment.parent)
            if (parent) {
              parent.children.push(comment)
            }
          }
        })
        setComments(transformedComments)
        setNumberOfComments(commentsAsArray.length)
      } else {
        setComments([])
      }
      setStatus("SUCCESS")
    })

    return () => {
      off(reference)
    }
  }, [collectionName, displayComments])

  useEffect(() => {
    // dont'run in development
    if (!displayComments) {
      return
    }
    const reference = ref(database, `likes/${transformPath(collectionName)}`)

    onValue(reference, (snapshot) => {
      const likes = snapshot.val() as number | null
      if (likes || likes === 0) {
        setLikes(likes)
      }
    })
  }, [collectionName, displayComments])

  const onSubmit: (comment: CommentFormType & { id?: string }) => Promise<any> = ({
    name,
    message,
    id,
    email,
    website,
    saveInBrowser,
    subscribeToNewsletter,
  }): Promise<[void, boolean]> => {
    if (saveInBrowser) {
      localStorage.setItem("name", name.trim())
      localStorage.setItem("email", email.trim())
      localStorage.setItem("website", website.trim())
    } else {
      localStorage.removeItem("name")
      localStorage.removeItem("email")
      localStorage.removeItem("website")
    }
    const newKey = push(ref(database, `comments/${transformPath(collectionName)}`)).key
    return Promise.all([
      subscribeToNewsletter
        ? subscribe({ mail: email })
            .then(() => {
              setNewsletterStatus("SUCCESS")
            })
            .catch(() => {
              setNewsletterStatus("ERROR")
            })
        : Promise.resolve(),

      set(ref(database, `comments/${transformPath(collectionName)}/${newKey}`), {
        name: name.trim(),
        content: message.trim(),
        timestamp: Date.now(),
        website: website.trim(),
        avatar: md5((email || name).trim().toLowerCase()),
        ...(id ? { parent: id } : {}),
      })
        .then(() => {
          setCommentStatus("SUCCESS")
          return true
        })
        .catch(() => {
          setCommentStatus("ERROR")
          return false
        }),
    ])
  }

  const like = () => {
    const newLikes = likes + 1 < 0 ? 1 : likes + 1
    set(ref(database, `likes/${transformPath(collectionName)}`), newLikes)
    setLocalLikes([...localLikes, collectionName])
  }
  const unlike = () => {
    const newLikes = likes - 1 < 0 ? 0 : likes - 1
    set(ref(database, `likes/${transformPath(collectionName)}`), newLikes)
    setLocalLikes(localLikes.filter((like) => like !== collectionName))
  }

  useEffect(() => {
    if (comments.length > 0 && scrollToAnchor && window.location.hash) {
      let times = 0 // number of times to try to scroll to the anchor
      const interval = setInterval(() => {
        const hash = window.location.hash.split("#")[1]
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          clearInterval(interval)
          setScrollToAnchor(false)
          setCommentToEdit(hash)
        } else if (times < 10) {
          times++
        } else {
          clearInterval(interval)
        }
      }, 100)
    }
  }, [comments, scrollToAnchor])

  const sharedUrl = buildCurrentSharedUrl(location)
  const description = t("comments.shared-description", { handle: `@${twitter}` })
  const descriptionPinterest = t("comments.shared-description", { handle: `@${pinterestHandle}` })
  const hashtags = t("comments.hashtags")
  return (
    <div className={`${className} comments`} css={commentsStyle}>
      <>
        <div className="flex justify-center mb3 comments-social-network">
          <span className="bw1 pr2 mr2">
            <a href="#comments">
              {numberOfComments} {t("comments.comment")}
              {numberOfComments > 1 ? "s" : ""}
            </a>
          </span>
          {showLikes && (
            <span className="inline-flex bw1 pr2 mr2">
              {!localLikes.includes(collectionName) ? (
                <span className="pointer inline-flex" onClick={like}>
                  {t("comments.like")}&nbsp;
                  <FaHeart className="likes" />
                </span>
              ) : (
                <span className="pointer inline-flex" onClick={unlike}>
                  {likes}&nbsp;
                  <FaHeart className="likes" />
                </span>
              )}
            </span>
          )}
          {showShare && (
            <span className="inline-flex">
              {t("comments.share")}&nbsp;
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${sharedUrl}&quote=${encodeURI(facebookQuote)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-labelledby="facebook-label-comment"
                className="inline-flex mr1"
              >
                <span id="facebook-label-comment" hidden>
                  Share on Facebook
                </span>
                <FaFacebook className="facebook" aria-hidden="true" focusable="false" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${description}&url=${sharedUrl}&hashtags=${hashtags}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-labelledby="twitter-label-comment"
                className="inline-flex mr1"
              >
                <span id="twitter-label-comment" hidden>
                  Share on Twitter
                </span>
                <FaTwitter className="twitter" aria-hidden="true" focusable="false" />
              </a>
              <a
                href={buildPinterestUrl({
                  url: sharedUrl,
                  description: pinterest?.description ?? descriptionPinterest,
                })}
                target="_blank"
                rel="noopener noreferrer"
                aria-labelledby="pinterest-label-comment"
                className="inline-flex"
              >
                <span id="pinterest-label-comment" hidden>
                  Share on Pinterest
                </span>
                <FaPinterest className="pinterest" aria-hidden="true" focusable="false" />
              </a>
            </span>
          )}
        </div>
        {pinterest && pinterest.nodes.length > 0 ? (
          <>
            <Divider />
            <PinterestImage
              location={location}
              selectedPin={selectedPin}
              onSelectPin={(p) => {
                setSelectedPin(p)
              }}
              description={pinterest.description}
            >
              {pinterest.nodes}
            </PinterestImage>
            <Divider />
          </>
        ) : null}

        {status === "LOADING" ? (
          <div className="flex flex-column justify-center items-center mb3 f4">
            {t("comments.loading")}
            <FaSpinner className="fa-spin" />
          </div>
        ) : (
          <div id="comments">
            {comments.map((comment, index) => (
              <Comment
                key={comment.id}
                {...comment}
                commentToEdit={commentToEdit}
                setCommentToEdit={setCommentToEdit}
                depth={0}
                index={index}
                isLast={index === comments.length}
                onSubmit={onSubmit}
              />
            ))}
          </div>
        )}
        <hr />
        {!commentToEdit && <CommentForm deepForm={false} onSubmit={onSubmit} />}
        {commentStatus === "SUCCESS" && <SuccessAlert>{t("comments.comment-posted")}</SuccessAlert>}
        {newsletterStatus === "SUCCESS" && <SuccessAlert>{t("comments.newsletter-subscribed")}</SuccessAlert>}
        {commentStatus === "ERROR" && <ErrorAlert>{t("comments.comment-failed")}</ErrorAlert>}
        {newsletterStatus === "ERROR" && <ErrorAlert>{t("comments.newsletter-failed")}</ErrorAlert>}
      </>
    </div>
  )
}

const commentStyle = css`
  & > div {
    display: flex;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
  .avatar-container {
    min-width: 60px;
    margin-right: 20px;
  }
  .reply {
    color: #0974ba;
    cursor: pointer;
  }
  .date {
    font-size: 0.9em;
    opacity: 0.6;
  }
  .active {
    border: 1px solid #cfebf5;
    background-color: #ecfaff;
  }
`
const hrStyle = css`
  color: black;
  height: 2px;
  margin-top: 0rem;
  margin-bottom: 0rem;
`
const Comment: FunctionComponent<
  CommentProp & {
    isLast: boolean
    index: number
    depth: number
    commentToEdit: string
    setCommentToEdit: React.Dispatch<React.SetStateAction<string>>
    onSubmit: (comment: CommentFormType & { id: string }) => Promise<void>
  }
> = ({ name, timestamp, content, children, onSubmit, id, depth, avatar, commentToEdit, setCommentToEdit, website }) => {
  const { t, i18n } = useCustomTranslation("common")
  return (
    <>
      <div css={commentStyle} id={id}>
        <div
          className={`${id === window.location.hash.split("#")[1] ? "active" : ""}`}
          style={{ paddingLeft: depth + "rem" }}
        >
          <div className="avatar-container">
            <RandomAvatar hash={avatar} />
          </div>
          <div>
            <div>
              <span className="b">
                {website ? <CommentExternalLink href={website}>{name}</CommentExternalLink> : name}
              </span>{" "}
              <span
                className="date pointer"
                onClick={() => {
                  window.location.hash = id
                }}
              >
                {new Date(timestamp).toLocaleString(i18n.languageCode === "fr" ? "fr-FR" : "en-GB", {
                  dateStyle: "long",
                  timeStyle: "short",
                })}
              </span>
            </div>
            <div>
              {content.split("\n").map((element, index) => (
                <React.Fragment key={index}>
                  {element}
                  <br />
                </React.Fragment>
              ))}
            </div>
            <div>
              <span
                className="reply"
                onClick={() => {
                  commentToEdit === id ? setCommentToEdit("") : setCommentToEdit(id)
                }}
              >
                {t("comments.reply")}
              </span>
            </div>
          </div>
        </div>
      </div>
      {commentToEdit === id && (
        <CommentForm
          deepForm={true}
          cancellable
          onCancel={() => setCommentToEdit("")}
          onSubmit={(c) =>
            onSubmit({ ...c, id }).then(() => {
              setCommentToEdit("")
            })
          }
        />
      )}
      <div>
        {children.map((c, index) => (
          <Comment
            {...c}
            commentToEdit={commentToEdit}
            setCommentToEdit={setCommentToEdit}
            onSubmit={onSubmit}
            index={index}
            key={index}
            depth={depth + 1}
            isLast={index === children.length}
          />
        ))}
      </div>
      {depth === 0 && <hr css={hrStyle} />}
    </>
  )
}

const CommentExternalLink = styled(ExternalLink)`
  color: #0974ba;
  &:visited {
    color: #0974ba;
  }
`
const commentFormStyle = css`
  margin-top: 1rem;
  margin-bottom: 1rem;
  .cancel {
    font-size: 0.8em;
    cursor: pointer;
    opacity: 0.6;
    font-weight: normal;
  }
  .comment-section-title {
    margin-bottom: 1.45rem;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.1;
    font-family: Roboto, sans-serif;
  }
`
interface CommentFormProps {
  cancellable?: boolean
  onCancel?: () => void
  deepForm: boolean
  onSubmit: (comment: CommentFormType) => Promise<any>
}

// TODO use useLocalStorage (but needs to update the part above that updates the content, because it's not compatible with the current saved format: the hook stringify the value
const getFromLocalStorage = (key: string, defaultValue = "") =>
  typeof window !== "undefined" ? localStorage.getItem(key) ?? defaultValue : defaultValue
const CommentForm: FunctionComponent<CommentFormProps> = ({
  onSubmit,
  cancellable,
  onCancel = () => void 0,
  deepForm,
}) => {
  const [name, setName] = useState(getFromLocalStorage("name"))
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState(getFromLocalStorage("email"))
  const [website, setWebsite] = useState(getFromLocalStorage("website"))
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false)
  const [saveInBrowser, setSaveInBrowser] = useState(!!name)
  const { t } = useCustomTranslation("common")
  return (
    <div css={commentFormStyle}>
      <div className="comment-section-title">
        {t("comments.post-comment")}{" "}
        {cancellable && (
          <span className="cancel" onClick={onCancel}>
            {t("comments.cancel")}
          </span>
        )}
      </div>
      <div>{t("comments.note")}</div>
      <Textarea
        id="message"
        placeholder={capitalize(t("comments.comment"))}
        label={`${capitalize(t("comments.comment"))} *`}
        value={message}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
        Icon={FaPen}
      />
      <Input
        id="name"
        placeholder={t("form.name")}
        label={`${t("form.name")} *`}
        type="text"
        value={name}
        Icon={FaUser}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
      />
      <Input
        id="email"
        placeholder={t("form.email")}
        label={t("form.email")}
        type="email"
        value={email}
        Icon={FaEnvelope}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
      />
      <Input
        id="website"
        placeholder={t("comments.website")}
        label={t("comments.website")}
        type="website"
        value={website}
        Icon={FaLink}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setWebsite(event.target.value)}
      />
      <Checkbox
        id="newsletter-comments"
        label={t("comments.subscribed-note")}
        checked={subscribeToNewsletter}
        onChange={() => setSubscribeToNewsletter(!subscribeToNewsletter)}
      />
      <Checkbox
        id="save"
        label={t("comments.local-save")}
        checked={saveInBrowser}
        onChange={() => setSaveInBrowser(!saveInBrowser)}
      />
      <PrimaryDarkButton
        className="form-element"
        disabled={!name || !message || (subscribeToNewsletter && !email)}
        onClick={() =>
          onSubmit({ name, message, email, website, saveInBrowser, subscribeToNewsletter }).then(([, status]) => {
            // when the form is a response to a previous comment, this change of state will result to a react warning :
            // - Can't perform a React state update on an unmounted component. This is a no-op
            // this boolean indicates whether the form is used in a deep comment, or at the top
            if (status && !deepForm) setMessage("")
          })
        }
      >
        {t("comments.post-comment")}
      </PrimaryDarkButton>
    </div>
  )
}
