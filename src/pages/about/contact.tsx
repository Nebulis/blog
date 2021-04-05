import React, { useState } from "react"
import SEO from "../../components/layout/seo"
import { SectionContent } from "../../components/core/section"
import { Input, Textarea } from "../../components/core/input"
import { FaCheck, FaCubes, FaEnvelope, FaPen, FaSpinner, FaTimes, FaUser } from "react-icons/all"
import { PrimaryDarkButton } from "../../components/core/button"
import { css } from "@emotion/react"
import { backgroundPrimaryColor, largeStart, primaryColor } from "../../components/core/variables"
import styled from "@emotion/styled"
import { ErrorAlert, SuccessAlert } from "../../components/core/alert"
import { Status } from "../../types/shared"
import { useCustomTranslation } from "../../i18n-hook"
import i18n from "i18next"
import contactFr from "../../locales/fr/about/contact.json"
import contactEn from "../../locales/en/about/contact.json"
import { facebook, instagram, twitter } from "../../utils"
import { PageProps } from "gatsby"
import { PrimaryBlogLayoutWithDrawer } from "../../components/layout/main-layout"

const namespace = "about/contact"
i18n.addResourceBundle("fr", namespace, contactFr)
i18n.addResourceBundle("en", namespace, contactEn)

const Hightlight = styled.span`
  color: ${primaryColor};
  font-weight: bold;
`

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [isPro] = useState(false)
  const [status, setStatus] = useState<Status>("INITIAL")
  const { t } = useCustomTranslation([namespace, "common"])
  const description = `${t("section1")} ${t("section2")}`
  return (
    <>
      <SEO title={t("common:link.contact")} location={location} socialNetworkDescription={description} />
      <PrimaryBlogLayoutWithDrawer page="who" noStickyHeader location={location}>
        <div
          className="tc mt4 mb3"
          css={css`
            margin-bottom: 1rem;
            @media (min-width: ${largeStart}) {
              margin-bottom: 2rem;
            }
          `}
        >
          <h4 className="tc">{t("headline")}</h4>
          <SectionContent>{t("section1")}</SectionContent>
          {/*<SectionContent>Un partenariat, un projet à nous proposer ?</SectionContent>*/}
          <SectionContent>{t("section2")}</SectionContent>
          <SectionContent>
            {t("section3.part1")}{" "}
            <Hightlight>
              <a href={`https://www.facebook.com/${facebook}`} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </Hightlight>
            ,{" "}
            <Hightlight>
              <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Hightlight>{" "}
            {t("section3.part2")}{" "}
            <Hightlight>
              <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Hightlight>
            .
          </SectionContent>

          {t("section4") && <SectionContent className="f6 i">{t("section4")}</SectionContent>}
          <section>
            <div
              css={css`
                @media (min-width: ${largeStart}) {
                  padding: 3rem;
                  background-color: ${backgroundPrimaryColor};
                  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
                  padding-top: 4px;
                }
              `}
            >
              <Input
                label={`${t("common:form.name")} *`}
                id="name"
                placeholder={t("common:form.name")}
                type="text"
                value={name}
                Icon={FaUser}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
              />
              <Input
                label={`${t("common:form.email")} *`}
                id="email"
                placeholder={t("common:form.email")}
                type="text"
                value={mail}
                Icon={FaEnvelope}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMail(event.target.value)}
              />
              <Input
                label={`${t("form.object")} *`}
                id="objet"
                placeholder={t("form.object")}
                type="text"
                value={title}
                Icon={FaCubes}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
              />
              <Textarea
                rows={10}
                label={`${t("form.message.label")} *`}
                id="message"
                placeholder={t("form.message.placeholder")}
                value={message}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
                Icon={FaPen}
              />
              {/*<Checkbox label="Professionel" defaultChecked={isPro} onChange={() => setIsPro(!isPro)} id="pro" />*/}

              <PrimaryDarkButton
                className="form-element"
                disabled={!name || !message || !mail || !title || status === "LOADING"}
                onClick={() => {
                  setStatus("LOADING")
                  fetch("https://us-central1-blog-3dd22.cloudfunctions.net/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name,
                      message,
                      mail,
                      title,
                      isPro,
                    }),
                  })
                    .then((res) => {
                      if (!res.ok) {
                        throw new Error("Request failed: " + res.statusText)
                      }
                    })
                    .then(() => {
                      setMail("")
                      setName("")
                      setMessage("")
                      setTitle("")
                      // setIsPro(false)
                      setStatus("SUCCESS")
                    })
                    .catch(() => {
                      setStatus("ERROR")
                    })
                }}
              >
                {status === "INITIAL" ? (
                  <FaEnvelope />
                ) : status === "LOADING" ? (
                  <FaSpinner className="fa-spin" />
                ) : status === "SUCCESS" ? (
                  <FaCheck />
                ) : (
                  <FaTimes />
                )}
                &nbsp;{t("form.submit")}
              </PrimaryDarkButton>
              {status === "SUCCESS" ? (
                <SuccessAlert>{t("form.valid")}</SuccessAlert>
              ) : status === "ERROR" ? (
                <ErrorAlert>{t("form.invalid")}</ErrorAlert>
              ) : undefined}
            </div>
          </section>
        </div>
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage
