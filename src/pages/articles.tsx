import React, { useEffect, useState } from "react"
import SEO from "../components/layout/seo"
import queryString from "query-string"
import { PageProps } from "gatsby"
import { BlogLayoutWithDrawer } from "../components/layout/main-layout"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const [search, setSearch] = useState<any>()
  useEffect(() => {
    setSearch(queryString.parse(location.search))
  }, [location.search])
  return (
    <>
      <SEO title="main" location={location} />
      <BlogLayoutWithDrawer page="articles" location={location}>
        <p>Articles page. Search:{JSON.stringify(search, undefined, 2)}</p>
      </BlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage
