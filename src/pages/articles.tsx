import React, { useState, useEffect } from "react"
import SEO from "../components/layout/seo"
import { BlogLayout } from "../components/layout/layout"
import queryString from "query-string"

const IndexPage: React.FunctionComponent<{ location: Location }> = ({ location }) => {
  const [search, setSearch] = useState<any>()
  useEffect(() => {
    setSearch(queryString.parse(location.search))
  }, [location.search])
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="articles">
        <p>Articles page. Search:{JSON.stringify(search, undefined, 2)}</p>
      </BlogLayout>
    </>
  )
}

export default IndexPage
