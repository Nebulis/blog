import React, { useEffect, useState } from "react"
import SEO from "../components/layout/seo"
import { BlogLayout } from "../components/layout/layout"
import queryString from "query-string"
import { PageProps } from "gatsby"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const [search, setSearch] = useState<any>()
  useEffect(() => {
    setSearch(queryString.parse(location.search))
  }, [location.search])
  return (
    <>
      <SEO title="main" location={location} />
      <BlogLayout page="articles">
        <p>Articles page. Search:{JSON.stringify(search, undefined, 2)}</p>
      </BlogLayout>
    </>
  )
}

export default IndexPage
