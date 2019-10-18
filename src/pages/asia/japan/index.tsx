import React from "react"
import { Header } from "../../../components/layout/header"
import { Maintenance } from "../../../components/layout/maintenance"
import SEO from "../../../components/layout/seo"
import { Menu } from "../../../components/layout/menu"
import { MainHimejiCastleImage } from "../../../components/images/asia/japan/himeji/castle/mainHimejiCastleImage"
import { JapanImageAsMedallion } from "../../../components/images/layout"
import { MainArashiyamaImage } from "../../../components/images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { MainFujiImage } from "../../../components/images/asia/japan/mainFujiImage"
import { MainNagoyaCastleImage } from "../../../components/images/asia/japan/nagoya/castle/mainNagoyaCastleImage"
import { getLinkUrl } from "../../../utils/links"
import { JapanDivider } from "../../../components/core/divider"
import { JapanCard } from "../../../components/Card"
import { MainImage } from "../../../components/images/asia/japan/mainImage"
import { SpringInJapanQuote } from "../../../components/core/japan"
import { MainTokyoImage } from "../../../components/images/asia/japan/mainTokyoImage"

const IndexPage = () => {
  return (
    <>
      <SEO title="japan" />
      <Maintenance>{typeof window !== `undefined` ? <Content /> : null}</Maintenance>
    </>
  )
}

const Content = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="center blog-container">
        <h1 className="tc ttu">Japon</h1>
        <JapanDivider />
        <h2 className="tc ttu">Notre voyage au Japon</h2>
        <JapanCard title="Le Japon au printemps" to={getLinkUrl("spring-in-japan")}>
          <MainImage />
          <SpringInJapanQuote />
        </JapanCard>
        <JapanDivider />
        <h2 className="tc ttu">Découvre le Japon</h2>
        <div
          className="flex justify-center flex-wrap pt3 pb3 mb3"
          css={css`
            & > * {
              margin-left: 10px;
              margin-right: 10px;
            }
          `}
        >
          <Link to={getLinkUrl("himeji")}>
            <JapanImageAsMedallion title="Himeji">
              <MainHimejiCastleImage />
            </JapanImageAsMedallion>
          </Link>
          <Link to={getLinkUrl("kyoto")}>
            <JapanImageAsMedallion title="Kyoto">
              <MainArashiyamaImage />
            </JapanImageAsMedallion>
          </Link>
          <Link to={getLinkUrl("nagoya")}>
            <JapanImageAsMedallion title="Nagoya">
              <MainNagoyaCastleImage />
            </JapanImageAsMedallion>
          </Link>
          <Link to={getLinkUrl("fuji")}>
            <JapanImageAsMedallion title="Fuji">
              <MainFujiImage />
            </JapanImageAsMedallion>
          </Link>
          <Link to={getLinkUrl("tokyo")}>
            <JapanImageAsMedallion title="Tokyo">
              <MainTokyoImage />
            </JapanImageAsMedallion>
          </Link>
        </div>
        <JapanDivider />
      </div>
    </>
  )
}

export default IndexPage
