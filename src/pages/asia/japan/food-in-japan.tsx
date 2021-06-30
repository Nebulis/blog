import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../components/layout/seo"
import { useCustomTranslation } from "../../../i18n-hook"
import translationFr from "../../../locales/fr/asia/japan/food-in-japan.json"
import translationEn from "../../../locales/en/asia/japan/food-in-japan.json"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../components/core/japan/japan"
import { Introduction, MenuArticle, SectionContent, SubTitleTransport } from "../../../components/core/section"
import { Conclusion } from "../../../components/core/conclusion"
import { Divider } from "../../../components/core/divider"
import { Quote } from "../../../components/core/quote"
import HomeImgUrl from "../../../images/asia/japan/home.jpg"
import {
  Anchor,
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../components/images/layout"
import { SharedCardJapanImages } from "../../../components/images/asia/japan/shared-card-japan-images"
import { FoodInJapanImages } from "../../../components/images/asia/japan/food-in-japan"
import { ExternalLinkNotUnderlined } from "../../../components/core/links/link"
import { buildPixabayUrl } from "../../../utils"
import { FakeList } from "../../../components/core/title"
import { Comments } from "../../../components/core/comments"

const namespace = "asia/japan/food-in-japan"
const id = "food-in-japan"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.food`)

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
      <JapanBlogLayout page={id} location={location}>
        <JapanTitle title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardJapanImages image="foodInJapan" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction.part1")}</Introduction>
        <SectionContent>
          <p>{t("introduction.part2")}</p>
          <p>{t("introduction.part3")}</p>
          <p>{t("introduction.part4")}</p>
        </SectionContent>
        <Divider />
        <MenuArticle title={t("index")}>
          <div>
            <a href="#barbecue">{t("section1.title")}</a>
          </div>
          <div>
            <a href="#donburi">{t("section2.title")}</a>
          </div>
          <div>
            <a href="#gyozas">{t("section3.title")}</a>
          </div>
          <div>
            <a href="#ramen">{t("section4.title")}</a>
          </div>
          <div>
            <a href="#soba">{t("section5.title")}</a>
          </div>
          <div>
            <a href="#sushis">{t("section6.title")}</a>
          </div>
          <div>
            <a href="#tempura">{t("section7.title")}</a>
          </div>
          <div>
            <a href="#tonkatsu">{t("section8.title")}</a>
          </div>
          <div>
            <a href="#udon">{t("section9.title")}</a>
          </div>
          <div>
            <a href="#yakitori">{t("section10.title")}</a>
          </div>
          <div>
            <a href="#more">{t("section11.title")}</a>
          </div>
        </MenuArticle>
        <Divider />
        <Anchor id="barbecue" />
        <section>
          <JapanHeadline>{t("section1.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section1.part1")}</p>
            <p>{t("section1.part2")}</p>
            <p>{t("section1.part3")}</p>
            <p>{t("section1.part4")}</p>
            <p>{t("section1.part5")}</p>
            <GroupOfImages>
              <ImageAsLandscape>
                <FoodInJapanImages image="barbecue" />
              </ImageAsLandscape>
              <ImageAsPortrait>
                <FoodInJapanImages image="barbecue2" />
              </ImageAsPortrait>
              <ImageAsPortrait>
                <FoodInJapanImages image="barbecue3" />
              </ImageAsPortrait>
              <ImageAsLandscape>
                <FoodInJapanImages image="barbecue4" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Anchor id="donburi" />
        <section>
          <JapanHeadline>{t("section2.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section2.part1")}</p>
            <p>{t("section2.part2")}</p>
            <p>{t("section2.part3")}</p>
            <p>{t("section2.part4")}</p>
            <GroupOfImages>
              <ImageAsLandscape title="Gyudon">
                <FoodInJapanImages image="donburi" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <FoodInJapanImages image="donburi2" />
              </ImageAsLandscape>
              <ImageAsLandscape title="Katsudon">
                <FoodInJapanImages image="donburi3" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <FoodInJapanImages image="donburi4" />
              </ImageAsLandscape>
              <ImageAsLandscape title="Chicken Teriyaki Don">
                <FoodInJapanImages image="donburi5" />
              </ImageAsLandscape>
              <TwoImagesSameSizeOrToGroup>
                <FoodInJapanImages image="donburi6" />
                <FoodInJapanImages image="donburi7" />
              </TwoImagesSameSizeOrToGroup>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Anchor id="gyozas" />
        <section>
          <JapanHeadline>{t("section3.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section3.part1")}</p>
            <p>{t("section3.part2")}</p>
            <ul>
              <li>{t("section3.part3")}</li>
              <li>{t("section3.part4")}</li>
              <li>{t("section3.part5")}</li>
            </ul>
            <p>{t("section3.part6")}</p>
            <p>{t("section3.part7")}</p>
            <GroupOfImages>
              <ImageAsLandscape>
                <FoodInJapanImages image="gyozas" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <FoodInJapanImages image="gyozas2" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <FoodInJapanImages image="gyozas3" />
              </ImageAsLandscape>
              <ImageAsLandscapeOnTheLeft title="Gyoza Crispy">
                <FoodInJapanImages image="gyozas4" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight title="Gyoza Original">
                <FoodInJapanImages image="gyozas5" />
              </ImageAsLandscapeOnTheRight>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Anchor id="ramen" />
        <section>
          <JapanHeadline>{t("section4.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section4.part1")}</p>
            <p>{t("section4.part2")}</p>
            <p>{t("section4.part3")}</p>
            <ul>
              <li>{t("section4.part4")}</li>
              <li>{t("section4.part5")}</li>
              <li>{t("section4.part6")}</li>
              <li>{t("section4.part7")}</li>
            </ul>
            <GroupOfImages>
              <ImageAsLandscape>
                <FoodInJapanImages image="ramen" />
              </ImageAsLandscape>
              <ImageAsLandscapeOnTheLeft title="Chashu Ramen - Original Tonkotsu">
                <FoodInJapanImages image="ramen2" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight title="Pork Chop Ramen - Original Tonkotsu">
                <FoodInJapanImages image="ramen3" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsLandscape title="Shoyu Ajitama Ramen">
                <FoodInJapanImages image="ramen4" />
              </ImageAsLandscape>
              <ImageAsLandscape title="Beef Ramen - Shio Base">
                <FoodInJapanImages image="ramen5" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Anchor id="soba" />
        <section>
          <JapanHeadline>{t("section5.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section5.part1")}</p>
            <p>{t("section5.part2")}</p>
            <p>{t("section5.part3")}</p>
            <p>{t("section5.part4")}</p>
            <GroupOfImages>
              <ImageAsLandscapeOnTheLeft title="Cha Soba - Chilled green tea noodles ">
                <FoodInJapanImages image="soba" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight>
                <FoodInJapanImages image="soba2" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsLandscapeOnTheLeft title="Cha Soba + Chicken Teriyaki Salad">
                <FoodInJapanImages image="soba3" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight>
                <FoodInJapanImages image="soba4" />
              </ImageAsLandscapeOnTheRight>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Anchor id="sushis" />
        <section>
          <JapanHeadline>{t("section6.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section6.part1")}</p>
            <p>{t("section6.part2")}</p>
            <ul>
              <li>{t("section6.part3")}</li>
              <li>{t("section6.part4")}</li>
              <li>{t("section6.part5")}</li>
              <li>{t("section6.part6")}</li>
              <li>{t("section6.part7")}</li>
              <li>{t("section6.part8")}</li>
            </ul>
            <p>{t("section6.part9")}</p>
            <p>{t("section6.part10")}</p>
            <GroupOfImages>
              <ImageAsLandscape title="Salmon Sashimi">
                <FoodInJapanImages image="sushis" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <FoodInJapanImages image="sushis2" />
              </ImageAsLandscape>
            </GroupOfImages>
            <p className="tc ttu">{t("section6.part11")}</p>
            <ol>
              <li>Gunkan : 2 Lobster Salad - Gunkan : 2 Salmon Avocado Mayo - Maki : 3 Salmon Maru</li>
              <li>
                Nigiri : 2 Tamago Sushi (Egg) - Nigiri : 2 Unagi Sushi (BBQ Eel) - Nigiri : 2 Tamago Zensai (crab stick,
                egg)
              </li>
              <li>
                Nigiri : 2 Salmon Sushi - Nigiri : 2 Maguro Sushi (Tuna) - Nigiri : 2 Salmon Cheese (Salmon, Cheese,
                Chilli Tomato Sauce)
              </li>
              <li>
                Maki : 1 + 2 Salmon Sakura (Salmon, avocado, flying fish roe, spicy cod roe mayo) - Maki : 6 Salmon Maki
                - Maki : 6 Tamago Maki (Egg) - Maki : 4 California (Crab Stick, Avocado, Cucumber, Egg, Shrimp roe,
                mayo)
              </li>
            </ol>
            <GroupOfImages>
              <ImageAsLandscapeOnTheLeft>
                <FoodInJapanImages image="sushis3" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight>
                <FoodInJapanImages image="sushis4" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsLandscape>
                <FoodInJapanImages image="sushis5" />
              </ImageAsLandscape>
              <ImageAsLandscapeOnTheLeft title="California Handroll (Rice, Cucumber, Crab Stick, Egg, Mayo, Shrimp Roe, Avocado)  -  Salmon Handroll (Rice, Salmon)">
                <FoodInJapanImages image="sushis6" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight>
                <FoodInJapanImages image="sushis7" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsPortrait title="Maki with Soy Wrap">
                <FoodInJapanImages image="sushis8" />
              </ImageAsPortrait>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Anchor id="tempura" />
        <section>
          <JapanHeadline>{t("section7.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section7.part1")}</p>
            <p>{t("section7.part2")}</p>
            <p>{t("section7.part3")}</p>
            <GroupOfImages>
              <ImageAsLandscape title="Shrimp Tempura">
                <FoodInJapanImages image="tempura" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <FoodInJapanImages image="tempura2" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Anchor id="tonkatsu" />
        <section>
          <JapanHeadline>{t("section8.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section8.part1")}</p>
            <p>{t("section8.part2")}</p>
            <p>{t("section8.part3")}</p>
            <GroupOfImages>
              <ImageAsLandscape title="Tonkatsu curry rice">
                <FoodInJapanImages image="curry" />
              </ImageAsLandscape>
              <ImageAsLandscapeOnTheLeft title="Chicken Katsu curry rice">
                <FoodInJapanImages image="curry2" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight>
                <FoodInJapanImages image="curry3" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsPortrait>
                <FoodInJapanImages image="curry4" />
              </ImageAsPortrait>
              <ImageAsLandscape>
                <FoodInJapanImages image="curry5" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Anchor id="udon" />
        <section>
          <JapanHeadline>{t("section9.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section9.part1")}</p>
            <p>{t("section9.part2")}</p>
            <p>{t("section9.part3")}</p>
            <p>{t("section9.part4")}</p>
            <GroupOfImages>
              <ImageAsLandscape title="Chicken Katsu Don + Udon">
                <FoodInJapanImages image="udon" />
              </ImageAsLandscape>
              <ImageAsLandscape title="Niku Udon - Japanese noodles with black pepper beef">
                <FoodInJapanImages image="udon2" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <FoodInJapanImages image="udon3" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Anchor id="yakitori" />
        <section>
          <JapanHeadline>{t("section10.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section10.part1")}</p>
            <p>{t("section10.part2")}</p>
            <p>{t("section10.part3")}</p>
            <p>{t("section10.part4")}</p>
            <GroupOfImages>
              <ImageAsLandscape title="Yakitori + Rice">
                <FoodInJapanImages image="yakitori" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <FoodInJapanImages image="yakitori2" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Anchor id="more" />
        <section>
          <JapanHeadline>{t("section11.title")}</JapanHeadline>
          <Divider />
          <SubTitleTransport>{t("section11.part1.title")}</SubTitleTransport>
          <SectionContent>
            <p>{t("section11.part1.part1")}</p>
            <p>{t("section11.part1.part2")}</p>
            <GroupOfImages>
              <ImageAsLandscape>
                <FoodInJapanImages image="soup" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
          <Divider />
          <SubTitleTransport>{t("section11.part2.title")}</SubTitleTransport>
          <SectionContent>
            <p>{t("section11.part2.part1")}</p>
            <p>{t("section11.part2.part2")}</p>
            <p>{t("section11.part2.part3")}</p>
          </SectionContent>
          <Divider />
          <SubTitleTransport>{t("section11.part3.title")}</SubTitleTransport>
          <SectionContent>
            <p>{t("section11.part3.part1")}</p>
            <p>{t("section11.part3.part2")}</p>
            <p>{t("section11.part3.part3")}</p>
            <GroupOfImages>
              <ImageAsLandscape>
                <FoodInJapanImages image="onigirazu" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <FoodInJapanImages image="onigirazu" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
          <Divider />
          <SubTitleTransport>{t("section11.part4.title")}</SubTitleTransport>
          <SectionContent>
            <p>{t("section11.part4.part1")}</p>
            <p>{t("section11.part4.part2")}</p>
            <p>{t("section11.part4.part3")}</p>
            <GroupOfImages>
              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("rajeeshtk-604255")}>
                    rajeeshtk
                  </ExternalLinkNotUnderlined>
                }
              >
                <FoodInJapanImages image="teppanyaki" />
              </ImageAsPortrait>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <section>
          <JapanHeadline>{t("section12.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <FakeList>{t("section12.part1.title")}</FakeList>
            <p>{t("section12.part1.part1")}</p>
            <p>{t("section12.part1.part2")}</p>
            <FakeList>{t("section12.part2.title")}</FakeList>
            <p>{t("section12.part2.part1")}</p>
            <p>{t("section12.part2.part2")}</p>
            <GroupOfImages>
              <ImageAsLandscape>
                <FoodInJapanImages image="fakeFood" />
              </ImageAsLandscape>
              <TwoImagesSameSizeOrToGroup>
                <FoodInJapanImages image="fakeFood2" />
                <FoodInJapanImages image="fakeFood3" />
              </TwoImagesSameSizeOrToGroup>
              <ImageAsLandscape>
                <FoodInJapanImages image="fakeFood4" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
        </section>
        <Divider />
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
        </Conclusion>
        <Divider />
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes: i18n.languageCode === "fr" ? [] : [],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage
