import React, { FunctionComponent } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

interface TitleProps {
  title: string
  categories: string[]
  className?: string
}

const allCategories = [
  {
    name: "asie",
    title: "Asie",
    link: "/asia",
  },
  {
    name: "japon",
    title: "Japon",
    link: "/asia/japan",
  },
  {
    name: "himeji",
    title: "Himeji",
    link: "/asia/japan/himeji",
  },
  {
    name: "kyoto",
    title: "Kyoto",
    link: "/asia/japan/kyoto",
  },
]

const getCategory = (category: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return allCategories.find(c => c.name === category)!
}

export const Title: FunctionComponent<TitleProps> = ({ title, categories, className }) => {
  return (
    <>
      <h1 className={`tc mb1 ${className}`}>{title}</h1>
      <div
        className={`tc ${className}`}
        css={css`
          margin-bottom: 1.45rem;
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
          font-size: 0.85028rem;
          line-height: 1.1;
        `}
      >
        in{" "}
        {categories.map((c, index) => (
          <React.Fragment key={index}>
            {index > 0 ? " " : ""}
            <Link to={getCategory(c).link}>{getCategory(c).title}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export const JapanTitle = styled(Title)`
  a {
    border-radius: 3px;
    color: white;
    background-color: #b8566a;
    padding: 0 2px;
    text-decoration: none;
  }
  a:hover {
    box-shadow: 0px 0px 2px 1px #ed5567;
  }
`
