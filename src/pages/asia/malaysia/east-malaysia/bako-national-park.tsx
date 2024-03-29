import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/malaysia/east-malaysia/bako-national-park.json"
import translationEn from "../../../../locales/en/asia/malaysia/east-malaysia/bako-national-park.json"
import { MalaysiaBlogLayout, MalaysiaHeadline } from "../../../../components/core/asia/malaysia/malaysia"
import {
  Baggage,
  How,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  When,
  WhereToHave,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import { FakeList, Title } from "../../../../components/core/title"
import HomeImgUrl from "../../../../images/asia/malaysia/east-malaysia/bako-national-park/bako-national-park-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  Panorama,
  TwoImagesSameSizeOrToGroup,
  TwoImagesSameSizeOrToGroupContainOnSmallScreen,
} from "../../../../components/images/layout"
import { css } from "@emotion/react"
import { BakoNationalParkImages } from "../../../../components/images/asia/malaysia/east-malaysia/bako-national-park"
import { SharedCardMalaysiaImages } from "../../../../components/images/asia/malaysia/shared-card-malaysia-images"
import { PetitCarreColore } from "../../../../components/layout/layout"

const namespace = "asia/malaysia/east-malaysia/bako-national-park"
const id = "bako-national-park"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const Jungle = () => (
  <svg height="512" viewBox="0 0 511.997 511.997" width="512">
    <g>
      <path
        d="m252.193 504.386h-50.63c-14.482-57.961-43.844-80.577-43.844-80.577 55-12.136 82.372 32.154 94.474 80.577z"
        fill="#528e61"
      />
      <path
        d="m283.39 20.855v483.53h-54.782v-483.53c0-11.518 9.346-20.855 20.865-20.855h13.051c11.519 0 20.866 9.337 20.866 20.855z"
        fill="#665e66"
      />
      <path
        d="m228.608 81.097c18.257-.142 36.525-.142 54.782-.01v295.933c-18.257.142-36.525.142-54.782 0z"
        fill="#544f57"
      />
      <path
        d="m253.334.003c-4.709 0-8.535 9.337-8.535 20.855v483.53h-16.187v-483.53c0-11.519 9.347-20.855 20.866-20.855h3.856z"
        fill="#544f57"
      />
      <path
        d="m502.985 256.344c-3.745 36.555-33.46 65.012-70.168 66.778-3.623.172-7.256.345-10.879.507l-8.783-18.901c-1.761-3.79-7.228-3.55-8.65.38l-7.076 19.546c-73.192 2.831-146.373 3.461-219.575 1.908l-13.299-64.931c-1.066-5.204-8.332-5.642-10.015-.604l-14.115 42.244c-1.577 4.721-8.321 4.523-9.619-.282l-5.116-18.932c-1.278-4.729-7.791-5.223-9.768-.74l-17.928 40.667c-6.272-.274-12.544-.558-18.816-.863-36.707-1.766-66.423-30.223-70.168-66.778-5.247-51.352-5.247-102.694 0-154.046 3.745-36.555 33.46-65.012 70.168-66.778 100.806-4.871 201.632-5.572 302.438-2.111l10.98 40.621c1.092 4.041 6.659 4.463 8.347.632l17.543-39.802c4.78.213 9.55.426 14.33.66 36.707 1.766 66.423 30.223 70.168 66.778 5.248 51.353 5.248 102.695.001 154.047z"
        fill="#c18678"
      />
      <path
        d="m45.171 100.197c-5.389 52.752-5.389 105.495 0 158.247 3.166 30.953 24.468 56.254 52.976 65.195l-.152.345c-6.272-.274-12.544-.558-18.816-.863-36.707-1.766-66.423-30.223-70.167-66.778-5.247-51.352-5.247-102.694 0-154.046 3.745-36.555 33.46-65.012 70.167-66.778 6.749-.325 13.498-.629 20.257-.913-29.147 8.576-51.047 34.171-54.265 65.591z"
        fill="#b46e59"
      />
      <g fill="#f1b986">
        <path d="m251.122 132.089c-4.204.041-7.579 3.481-7.538 7.685l.54 55.723-41.417-59.974c-1.893-2.741-5.345-3.932-8.529-2.941-3.179.991-5.346 3.936-5.346 7.267v79.043c0 4.204 3.407 7.611 7.611 7.611s7.611-3.408 7.611-7.611v-54.627l39.57 57.299c2.327 3.364 6.175 4.805 9.798 3.674 3.721-1.161 6.125-4.7 6.125-9.088l-.74-76.522c-.041-4.205-3.46-7.571-7.685-7.539z" />
        <path d="m401.479 211.212c-7.069.04-14.691.067-20.075.067v-71.579c0-4.204-3.407-7.611-7.612-7.611s-7.611 3.408-7.611 7.611v79.124c0 3.707 2.671 6.875 6.324 7.502.553.095 1.054.181 9.631.181 4.21 0 10.367-.021 19.428-.071 4.203-.024 7.593-3.45 7.569-7.654-.023-4.205-3.457-7.597-7.654-7.57z" />
        <path d="m80.993 132.088c-4.204 0-7.612 3.408-7.612 7.611v63.292c0 3.126-1.62 5.967-4.23 7.416-5.021 2.788-10.384-2.249-10.699-2.552-2.968-2.939-7.754-2.94-10.721.009-2.982 2.963-2.997 7.782-.035 10.764 3.513 3.535 10.311 7.906 18.225 7.906 3.391 0 6.988-.803 10.617-2.818 7.442-4.131 12.064-12.072 12.064-20.725v-63.291c.002-4.204-3.405-7.612-7.609-7.612z" />
        <path d="m458.9 211.279h-25.451v-24.011h23.014c4.204 0 7.611-3.408 7.611-7.611 0-4.204-3.407-7.612-7.611-7.612h-23.014v-24.011h25.451c4.204 0 7.612-3.408 7.612-7.611 0-4.204-3.407-7.611-7.612-7.611h-33.062c-4.204 0-7.611 3.408-7.611 7.611v78.468c0 4.204 3.407 7.611 7.611 7.611h33.062c4.204 0 7.612-3.408 7.612-7.611 0-4.204-3.407-7.612-7.612-7.612z" />
        <path d="m350.571 171.684h-23.69c-4.204 0-7.611 3.408-7.611 7.612s3.407 7.611 7.611 7.611h15.452c-2.093 12.483-9.652 24.372-25.944 24.372-17.635 0-31.983-14.348-31.983-31.984s14.348-31.984 31.983-31.984c6.41 0 12.592 1.888 17.878 5.458 3.483 2.354 8.214 1.437 10.568-2.047 2.353-3.483 1.437-8.215-2.047-10.568-7.812-5.277-16.941-8.067-26.399-8.067-26.03 0-47.206 21.177-47.206 47.207s21.176 47.207 47.206 47.207c24.607 0 41.793-19.412 41.793-47.207.001-4.202-3.406-7.61-7.611-7.61z" />
        <path d="m168.219 132.088c-4.204 0-7.611 3.408-7.611 7.611v54.435c0 4.103-1.113 10.118-10.736 14.965-2.873 1.446-6.107 2.18-9.615 2.18-.011 0-.022 0-.033 0-3.944-.005-7.383-.979-10.509-2.977-6.328-4.043-8.91-8.131-8.91-14.11v-54.492c0-4.204-3.407-7.611-7.612-7.611-4.204 0-7.611 3.408-7.611 7.611v54.492c0 11.275 5.213 20.086 15.937 26.938 5.565 3.555 11.851 5.363 18.685 5.372h.055c5.907 0 11.445-1.281 16.462-3.807 15.796-7.956 19.112-19.923 19.112-28.561v-54.434c-.003-4.204-3.41-7.612-7.614-7.612z" />
      </g>
      <path
        d="m370.876 355.077s-17.388 13.393-32.008 45.988c-10.585 23.617-19.722 57.319-19.722 103.32h-50.983c-.001-59.32 20.429-167.469 102.713-149.308z"
        fill="#69af81"
      />
      <path
        d="m338.868 401.065c-10.585 23.617-19.722 57.319-19.722 103.32h-35.296c3.554-28.546 15.446-82.497 55.018-103.32z"
        fill="#528e61"
      />
      <path
        d="m291.825 504.386h50.63c14.482-57.961 43.844-80.577 43.844-80.577-55-12.136-82.372 32.154-94.474 80.577z"
        fill="#69af81"
      />
      <path
        d="m377.194 511.997h-222.093c-4.204 0-7.611-3.408-7.611-7.612s3.407-7.611 7.611-7.611h222.093c4.204 0 7.612 3.408 7.612 7.611-.001 4.204-3.408 7.612-7.612 7.612z"
        fill="#78c2a4"
      />
    </g>
  </svg>
)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.malaysia.card.${id}`)

  return (
    <>
      <SEO
        title={title}
        fullTitle={t("full-title")}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        image={HomeImgUrl}
        location={location}
      />
      <MalaysiaBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardMalaysiaImages image="bakoNationalPark" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <How title={t("how.title")}>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
          <FakeList>{t("how.part3")}</FakeList>
          <p>{t("how.part4")}</p>
          <p>{t("how.part5")}</p>
          <p>{t("how.part6")}</p>
          <p>{t("how.part7")}</p>
          <FakeList>{t("how.part8")}</FakeList>
          <p>{t("how.part9")}</p>
          <p>{t("how.part10")}</p>
          <p>{t("how.part11")}</p>
          <p>{t("how.part12")}</p>
          <p>{t("how.part13")}</p>
          <p>{t("how.part14")}</p>
          <p>{t("how.part15")}</p>
          <p>{t("how.part16")}</p>
          <p>{t("how.part17")}</p>
          <p>{t("how.part18")}</p>
          <p>{t("how.part19")}</p>
        </How>
        <When title={t("when.title")}>
          <p>{t("when.part1")}</p>
          <p>{t("when.part2")}</p>
        </When>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <ul>
            <li>{t("where-to-stay.part3")}</li>
            <li>{t("where-to-stay.part4")}</li>
            <li>{t("where-to-stay.part5")}</li>
            <li>{t("where-to-stay.part6")}</li>
            <li>{t("where-to-stay.part7")}</li>
            <li>{t("where-to-stay.part8")}</li>
          </ul>
          <p>{t("where-to-stay.part9")}</p>
          <p>{t("where-to-stay.part10")}</p>
          <p>{t("where-to-stay.part11")}</p>
        </WhereToStay>
        <WhereToHave title={t("where-to-have.title")}>
          <p>{t("where-to-have.part1")}</p>
          <p>{t("where-to-have.part2")}</p>
          <p>{t("where-to-have.part3")}</p>
        </WhereToHave>
        <Baggage title={t("what-to-bring.title")}>
          <ul>
            <li>{t("what-to-bring.part1")}</li>
            <li>{t("what-to-bring.part2")}</li>
            <li>{t("what-to-bring.part3")}</li>
            <li>{t("what-to-bring.part4")}</li>
            <li>{t("what-to-bring.part5")}</li>
            <li>{t("what-to-bring.part6")}</li>
            <li>{t("what-to-bring.part7")}</li>
            <li>{t("what-to-bring.part8")}</li>
          </ul>
          <p>{t("what-to-bring.part9")}</p>
          <ul>
            <li>{t("what-to-bring.part10")}</li>
            <li>{t("what-to-bring.part11")}</li>
            <li>{t("what-to-bring.part12")}</li>
            <li>{t("what-to-bring.part13")}</li>
          </ul>
          <p>{t("what-to-bring.part14")}</p>
        </Baggage>
        <Visit title={t("visit.title")}>
          {/* just to have the correct space*/}
          <SectionContent />
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.part1.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part1.part1")}</p>
              <p>{t("visit.part1.part2")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <BakoNationalParkImages image="jetty" imgStyle={{ objectFit: "contain" }} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="jetty2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="jetty3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part1.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="jetty4" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <BakoNationalParkImages image="jetty5" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="jetty6" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                  <BakoNationalParkImages image="jetty7" />
                  <BakoNationalParkImages image="jetty8" />
                </TwoImagesSameSizeOrToGroupContainOnSmallScreen>
              </GroupOfImages>
              <p>{t("visit.part1.part4")}</p>
              <p>{t("visit.part1.part5")}</p>
              <p>{t("visit.part1.part6")}</p>
              <ImageAsLandscape>
                <BakoNationalParkImages image="jetty9" />
              </ImageAsLandscape>
              <p>{t("visit.part1.part7")}</p>
              <p>{t("visit.part1.part8")}</p>
              <ImageAsLandscape>
                <BakoNationalParkImages image="jetty10" />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.part2.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part2.part1")}</p>
              <p>{t("visit.part2.part2")}</p>
              <p>{t("visit.part2.part3")}</p>
              <ImageAsPortrait>
                <BakoNationalParkImages image="welcome" />
              </ImageAsPortrait>
              <p>{t("visit.part2.part4")}</p>
              <p>{t("visit.part2.part5")}</p>
              <p>{t("visit.part2.part6")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.part3.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part3.part1")}</p>
              <p>{t("visit.part3.part2")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <BakoNationalParkImages image="trek" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="trek2" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part3.part3")}</p>
              <p>{t("visit.part3.part4")}</p>
              <p>{t("visit.part3.part5")}</p>
              <p>{t("visit.part3.part6")}</p>
              <p>{t("visit.part3.part7")}</p>
              <p>{t("visit.part3.part8")}</p>
              <p>{t("visit.part3.part9")}</p>
              <p>{t("visit.part3.part10")}</p>
              <p>{t("visit.part3.part11")}</p>
              <p>{t("visit.part3.part12")}</p>
              <p>{t("visit.part3.part13")}</p>
              <p>{t("visit.part3.part14")}</p>
              <p>{t("visit.part3.part15")}</p>
              <p>{t("visit.part3.part16")}</p>
              <p>{t("visit.part3.part17")}</p>
              <p>{t("visit.part3.part18")}</p>
              <p>{t("visit.part3.part19")}</p>
              <p>{t("visit.part3.part20")}</p>
              <p className="tc">{t("visit.part3.part21")}</p>
              <p>{t("visit.part3.part22")}</p>
              <p>{t("visit.part3.part23")}</p>
              <p>{t("visit.part3.part24")}</p>
              <p>{t("visit.part3.part25")}</p>
              <p>{t("visit.part3.part26")}</p>
              <p>{t("visit.part3.part27")}</p>
              <p>{t("visit.part3.part28")}</p>
              <p>{t("visit.part3.part29")}</p>
              <p>{t("visit.part3.part30")}</p>
              <p>{t("visit.part3.part31")}</p>
              <p>{t("visit.part3.part32")}</p>
              <p>{t("visit.part3.part33")}</p>
              <p>{t("visit.part3.part34")}</p>
              <p>{t("visit.part3.part35")}</p>
              <ImageAsLandscape>
                <BakoNationalParkImages image="trek3" />
              </ImageAsLandscape>
              <Divider
                css={css`
                  margin-top: calc(1.45rem - 1px);
                `}
              />
              <p>{t("visit.part3.part36")}</p>
              <p>{t("visit.part3.part37")}</p>
              <p>{t("visit.part3.part38")}</p>
              <p>{t("visit.part3.part39")}</p>
              <p>{t("visit.part3.part40")}</p>
              <p>{t("visit.part3.part41")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.part4.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part4.part1")}</p>
              <p>{t("visit.part4.part2")}</p>
              <TwoImagesSameSizeOrToGroup>
                <BakoNationalParkImages image="flora" />
                <BakoNationalParkImages image="flora2" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.part4.part3")}</p>
              <p>{t("visit.part4.part4")}</p>
              <p>{t("visit.part4.part5")}</p>
              <p>{t("visit.part4.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="flora3" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                  <BakoNationalParkImages image="flora4" />
                  <BakoNationalParkImages image="flora5" />
                </TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                <TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                  <BakoNationalParkImages image="flora6" />
                  <BakoNationalParkImages image="flora7" />
                </TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                <TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                  <BakoNationalParkImages image="flora8" />
                  <BakoNationalParkImages image="flora9" />
                </TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                <TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                  <BakoNationalParkImages image="flora10" />
                  <BakoNationalParkImages image="flora11" />
                </TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="flora12" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part4.part7")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                  <BakoNationalParkImages image="flora13" />
                  <BakoNationalParkImages image="flora14" />
                </TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="flora15" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="flora16" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part4.part8")}</p>
              <p>{t("visit.part4.part9")}</p>
              <ImageAsLandscape>
                <BakoNationalParkImages image="flora17" />
              </ImageAsLandscape>
              <p>{t("visit.part4.part10")}</p>
              <TwoImagesSameSizeOrToGroup>
                <BakoNationalParkImages image="flora18" />
                <BakoNationalParkImages image="flora19" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.part4.part11")}</p>
              <p>{t("visit.part4.part12")}</p>
              <p>{t("visit.part4.part13")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                  <BakoNationalParkImages image="flora20" />
                  <BakoNationalParkImages image="flora21" />
                </TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="flora22" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part4.part14")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.part5.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part5.part1")}</p>
              <ImageAsLandscape>
                <BakoNationalParkImages image="beach" />
              </ImageAsLandscape>
              <p>{t("visit.part5.part2")}</p>
              <p>{t("visit.part5.part3")}</p>
              <p>{t("visit.part5.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="beach2" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                  <BakoNationalParkImages image="beach3" />
                  <BakoNationalParkImages image="beach4" />
                </TwoImagesSameSizeOrToGroupContainOnSmallScreen>
                <ImageAsPortrait>
                  <BakoNationalParkImages image="beach5" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="beach6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="beach7" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="beach8" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="beach9" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="beach10" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="beach11" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="beach12" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="beach13" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part5.part5")}</p>
              <p>{t("visit.part5.part6")}</p>
              <p>{t("visit.part5.part7")}</p>
              <Panorama>
                <BakoNationalParkImages image="beach14" />
              </Panorama>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.part6.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part6.part1")}</p>
              <p>{t("visit.part6.part2")}</p>
              <p>{t("visit.part6.part3")}</p>
              <p>{t("visit.part6.part4")}</p>
              <p>{t("visit.part6.part5")}</p>
              <p>{t("visit.part6.part6")}</p>
              <p>{t("visit.part6.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="proboscisMonkey" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="proboscisMonkey2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="proboscisMonkey3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="proboscisMonkey4" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part6.part8")}</p>
              <p>{t("visit.part6.part9")}</p>
              <p>{t("visit.part6.part10")}</p>
              <p>{t("visit.part6.part11")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="crabEatingMacaque" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="crabEatingMacaque2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="crabEatingMacaque3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="crabEatingMacaque4" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part6.part12")}</p>
              <p>{t("visit.part6.part13")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <BakoNationalParkImages image="boar" />
                  <BakoNationalParkImages image="boar2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="boar3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part6.part14")}</p>
              <p>{t("visit.part6.part15")}</p>
              <ImageAsLandscape>
                <BakoNationalParkImages image="snake" />
              </ImageAsLandscape>
              <p>{t("visit.part6.part16")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="crab" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="crab2" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part6.part17")}</p>
              <p>{t("visit.part6.part18")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="colugo" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <BakoNationalParkImages image="colugo2" />
                </ImageAsLandscape>
              </GroupOfImages>
              <PetitCarreColore>
                <p className="tc ttu">{t("visit.part6.part19")}</p>
                <p>{t("visit.part6.part20")}</p>
                <p>{t("visit.part6.part21")}</p>
                <p>{t("visit.part6.part22")}</p>
                <p>{t("visit.part6.part23")}</p>
                <p>{t("visit.part6.part24")}</p>
                <p>{t("visit.part6.part25")}</p>
                <p>{t("visit.part6.part26")}</p>
                <p>{t("visit.part6.part27")}</p>
                <p>
                  <Jungle />
                </p>
              </PetitCarreColore>
              <ImageAsLandscape>
                <BakoNationalParkImages image="squirrel" />
              </ImageAsLandscape>
              <Divider
                css={css`
                  margin-top: calc(1.45rem - 1px);
                `}
              />
              <p>{t("visit.part6.part28")}</p>
              <p>{t("visit.part6.part29")}</p>
              <p>{t("visit.part6.part30")}</p>
            </SectionContent>
          </section>
        </Visit>
        <Divider />
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
          <p>{t("love")}</p>
        </Conclusion>
        <Divider />
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <BakoNationalParkImages image="cardFr1" key="cardFr1" />,
                    <BakoNationalParkImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <BakoNationalParkImages image="cardEn1" key="cardEn1" />,
                    <BakoNationalParkImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </MalaysiaBlogLayout>
    </>
  )
}

export default IndexPage
