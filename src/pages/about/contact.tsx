import React, { useState } from "react"
import SEO from "../../components/layout/seo"
import { BlogLayout } from "../../components/layout/layout"
import { SectionContent } from "../../components/core/section"
import { Input, Textarea } from "../../components/core/input"
import { FaCheck, FaCubes, FaEnvelope, FaPen, FaSpinner, FaTimes, FaUser } from "react-icons/all"
import { PrimaryDarkButton } from "../../components/core/button"
import { css } from "@emotion/core"
import { backgroundPrimaryColor, largeStart, primaryColor } from "../../components/core/variables"
import styled from "@emotion/styled"
import { ErrorAlert, SuccessAlert } from "../../components/core/alert"
import { Status } from "../../types/shared"

const Hightlight = styled.span`
  color: ${primaryColor};
  font-weight: bold;
`

const IndexPage = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [isPro] = useState(false)
  const [status, setStatus] = useState<Status>("INITIAL")
  return (
    <>
      <SEO title="Contact" />
      <BlogLayout page="who" noStickyHeader>
        <div
          className="tc mt4 mb3"
          css={css`
            margin-bottom: 1rem;
            @media (min-width: ${largeStart}) {
              margin-bottom: 2rem;
            }
          `}
        >
          <h4 className="tc">Bienvenue à bord, voyageur !</h4>
          <SectionContent>
            Tu as des questions ? Des conseils à nous donner ? Ou tout simplement un petit mot à nous laisser ?
          </SectionContent>
          {/*<SectionContent>Un partenariat, un projet à nous proposer ?</SectionContent>*/}
          <SectionContent>N’hésites pas à nous écrire un petit mot, on y répondra avec plaisir. ❤️</SectionContent>
          <SectionContent>
            Tu peux aussi commenter directement en bas d’un article si cela concerne un pays que nous avons déjà visité.
            Ou encore nous contacter via <Hightlight>Facebook</Hightlight>,{" "}
            <Hightlight>
              <a href="https://twitter.com/_magicoftravels" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Hightlight>{" "}
            et plus particulièrement{" "}
            <Hightlight>
              <a href="https://instagram.com/_magic_of_travels_" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Hightlight>
            .
          </SectionContent>
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
                label="Nom *"
                id="name"
                placeholder="Nom *"
                type="text"
                value={name}
                Icon={FaUser}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
              />
              <Input
                label="Mail *"
                id="email"
                placeholder="Mail *"
                type="text"
                value={mail}
                Icon={FaEnvelope}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMail(event.target.value)}
              />
              <Input
                label="Objet *"
                id="objet"
                placeholder="Objet *"
                type="text"
                value={title}
                Icon={FaCubes}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
              />
              <Textarea
                rows={10}
                label="Message *"
                id="message"
                placeholder="Ton message *"
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
                &nbsp;Envoyer
              </PrimaryDarkButton>
              {status === "SUCCESS" ? (
                <SuccessAlert>Ton message a été envoyé avec succès.</SuccessAlert>
              ) : status === "ERROR" ? (
                <ErrorAlert>
                  Malheureusement une erreur a été rencontrée lors de l&apos;envoi de ton message.
                </ErrorAlert>
              ) : undefined}
            </div>
          </section>
        </div>
      </BlogLayout>
    </>
  )
}

export default IndexPage
