import React, { FunctionComponent, useEffect, useState } from "react"
import { database } from "../firebase"
import { Checkbox, Input, Textarea } from "./input"
import { Button } from "./button"
import { css } from "@emotion/core"
import { ExternalLink } from "./links/link"
import md5 from "md5"
import styled from "@emotion/styled"
import { Gravatar } from "./gravatar"
import { FaEnvelope, FaLink, FaPen, FaUser } from "react-icons/all"

interface CommentsProps {
  collectionName: string
}

interface CommentType {
  name: string
  content: string
  timestamp: number
  website: string
  gravatar: string
  parent?: string
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
const transformPath = (path: string): string => path.replace(/\//g, "-")

const commentsStyle = css`
  font-size: 0.9rem;
`
export const Comments: FunctionComponent<CommentsProps> = ({ collectionName }) => {
  const [comments, setComments] = useState<CommentProp[]>([])
  const [numberOfComments, setNumberOfComments] = useState(0)
  const [commentToEdit, setCommentToEdit] = useState("")
  const [scrollToAnchor, setScrollToAnchor] = useState(true)

  useEffect(() => {
    const reference = database.ref(`comments/${transformPath(collectionName)}`)

    reference.on("value", snapshot => {
      const commentsAsObject = snapshot.val() as DatabaseComments
      if (commentsAsObject) {
        const commentsAsArray: CommentProp[] = Object.keys(commentsAsObject).map(key => ({
          ...commentsAsObject[key],
          id: key,
          children: [],
        }))
        const transformedComments: CommentProp[] = []
        commentsAsArray.forEach(comment => {
          if (!comment.parent) {
            transformedComments.push(comment)
          } else {
            const parent = commentsAsArray.find(c => c.id === comment.parent)
            if (parent) {
              parent.children.push(comment)
            }
          }
        })
        setComments(transformedComments)
        setNumberOfComments(commentsAsArray.length)
      }
    })

    return () => {
      reference.off()
    }
  }, [collectionName])

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
          console.log("close")
          clearInterval(interval)
        }
      }, 100)
    }
  }, [comments, scrollToAnchor])
  return (
    <div css={commentsStyle}>
      <h4>
        {numberOfComments} commentaire{numberOfComments > 1 ? "s" : ""}
      </h4>
      {comments.map((comment, index) => (
        <Comment
          key={comment.id}
          {...comment}
          commentToEdit={commentToEdit}
          setCommentToEdit={setCommentToEdit}
          depth={0}
          index={index}
          isLast={index === comments.length}
          onSubmit={({ name, message, id, email, website, saveInBrowser, subscribeToNewsletter }) => {
            if (saveInBrowser) {
              localStorage.setItem("name", name)
              localStorage.setItem("email", email)
              localStorage.setItem("website", website || "")
            }
            return Promise.all([
              subscribeToNewsletter ? database.ref(`newsletter/${email}`).set(true) : Promise.resolve(),
              database.ref(`comments/${transformPath(collectionName)}`).push({
                name,
                content: message,
                timestamp: Date.now(),
                website,
                gravatar: md5(email.trim().toLowerCase()),
                parent: id,
              }),
            ])
          }}
        />
      ))}
      <hr />
      {!commentToEdit && (
        <CommentForm
          onSubmit={({ name, message, email, website, saveInBrowser, subscribeToNewsletter }) => {
            if (saveInBrowser) {
              localStorage.setItem("name", name)
              localStorage.setItem("email", email)
              localStorage.setItem("website", website || "")
            }
            return Promise.all([
              subscribeToNewsletter ? database.ref(`newsletter/${email}`).set(true) : Promise.resolve(),
              database.ref(`comments/${transformPath(collectionName)}`).push({
                name,
                content: message,
                website,
                gravatar: md5(email.trim().toLowerCase()),
                timestamp: Date.now(),
              }),
            ])
          }}
        />
      )}
    </div>
  )
}

const commentStyle = css`
  & > div {
    display: flex;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
  .gravatar-container {
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
const Comment: FunctionComponent<CommentProp & {
  isLast: boolean
  index: number
  depth: number
  commentToEdit: string
  setCommentToEdit: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (comment: {
    name: string
    message: string
    id: string
    email: string
    website: string
    saveInBrowser: boolean
    subscribeToNewsletter: boolean
  }) => Promise<any>
}> = ({
  name,
  timestamp,
  content,
  children,
  onSubmit,
  id,
  depth,
  gravatar,
  commentToEdit,
  setCommentToEdit,
  website,
}) => {
  return (
    <>
      <div css={commentStyle} id={id}>
        <div
          className={`${id === window.location.hash.split("#")[1] ? "active" : ""}`}
          style={{ paddingLeft: depth + "rem" }}
        >
          <div className="gravatar-container">
            <Gravatar hash={gravatar} />
          </div>
          <div>
            <div>
              <span className="b">
                {website ? <CommentExternalLink href={website}>{name}</CommentExternalLink> : name}
              </span>{" "}
              <span className="date">
                {new Date(timestamp).toLocaleString("fr-FR", {
                  // @ts-ignore
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
                Répondre
              </span>
            </div>
          </div>
        </div>
      </div>
      {commentToEdit === id && (
        <CommentForm
          cancellable
          onCancel={() => setCommentToEdit("")}
          onSubmit={c => onSubmit({ ...c, id }).then(() => setCommentToEdit(""))}
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
`
interface CommentFormProps {
  cancellable?: boolean
  onCancel?: () => void
  onSubmit: (comment: {
    name: string
    message: string
    email: string
    website: string
    subscribeToNewsletter: boolean
    saveInBrowser: boolean
  }) => Promise<any>
}
const CommentForm: FunctionComponent<CommentFormProps> = ({ onSubmit, cancellable, onCancel = () => void 0 }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState(localStorage.getItem("email") || "")
  const [website, setWebsite] = useState(localStorage.getItem("website") || "")
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false)
  const [saveInBrowser, setSaveInBrowser] = useState(false)
  return (
    <div css={commentFormStyle}>
      <h4>
        Laisser un commentaire{" "}
        {cancellable && (
          <span className="cancel" onClick={onCancel}>
            Annuler
          </span>
        )}
      </h4>
      <div>Votre adresse de messagerie ne sera pas publiée. Les champs obligatoires sont indiqués avec *</div>
      <Textarea
        hideLabel
        id="message"
        placeholder="Commentaire *"
        value={message}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
        Icon={FaPen}
      />
      <Input
        hideLabel
        id="name"
        placeholder="Nom *"
        type="text"
        value={name}
        Icon={FaUser}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
      />
      <Input
        hideLabel
        id="email"
        placeholder="Email *"
        type="email"
        value={email}
        Icon={FaEnvelope}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
      />
      <Input
        hideLabel
        id="website"
        placeholder="Site Internet"
        type="website"
        value={website}
        Icon={FaLink}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setWebsite(event.target.value)}
      />
      <Checkbox
        id="newsletter"
        label="Prévenez-moi des nouveaux articles par e-mail"
        checked={subscribeToNewsletter}
        onChange={() => setSubscribeToNewsletter(!subscribeToNewsletter)}
      />
      <Checkbox
        id="save"
        label="Enregistrer mon nom, mon e-mail et mon site web dans le navigateur pour mon prochain commentaire."
        checked={saveInBrowser}
        onChange={() => setSaveInBrowser(!saveInBrowser)}
      />
      <Button
        className="form-element"
        disabled={!name || !message || !email}
        onClick={() =>
          onSubmit({ name, message, email, website, saveInBrowser, subscribeToNewsletter })
            .then(() => {
              setMessage("")
            })
            .catch(error => {
              console.error(error)
            })
        }
      >
        Laisser un commentaire
      </Button>
    </div>
  )
}
