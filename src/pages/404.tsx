import React from "react"
import SEO from "../components/layout/seo"
import { PageProps } from "gatsby"
import { BlogLayoutWithDrawer } from "../components/layout/main-layout"
import SeeNoEvil from "../images/monkey.svg"
import { css } from "@emotion/core"
import { primaryColor, primaryDarkColor, smallEnd } from "../components/core/variables"
import { useCustomTranslation } from "../i18n"
import { ApplicationLink } from "../components/core/links/link"

const NotFoundPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { i18n } = useCustomTranslation()
  return (
    <>
      <SEO title="404: Not found" location={location} />
      <BlogLayoutWithDrawer page="404" location={location}>
        <div
          className="flex justify-center items-center flex-grow-1 flex-column h-100"
          css={css`
            // center does not work. In layout.css gatsby-focus-wrapper is not a flex element below 768px due to a bug
            @media (max-width: ${smallEnd}) {
              margin-top: 1rem;
            }
          `}
        >
          <p className="f3 mb2">
            {i18n.languageCode === "fr"
              ? "Oops ! On dirait que vous vous êtes perdus !"
              : "Oops! It looks like you get lost!"}
          </p>
          <img
            css={css`
              max-width: 256px;
              max-height: 256px;
            `}
            src={SeeNoEvil}
            alt="Nothing to see here"
          />
          <ApplicationLink
            to="home"
            className="mt3 underline fw9"
            css={css`
              &,
              &:visited {
                color: ${primaryColor};
              }

              &:hover {
                color: ${primaryDarkColor};
              }
            `}
          >
            {i18n.languageCode === "fr" ? "Retour a l'accueil" : "Return to home"}
          </ApplicationLink>
        </div>
      </BlogLayoutWithDrawer>
    </>
  )
}

export default NotFoundPage
