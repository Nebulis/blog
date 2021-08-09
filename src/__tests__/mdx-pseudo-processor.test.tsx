import { mdxPseudoProcessor } from "../mdx-pseudo-processor"

describe("mdx-pseudo-processor", () => {
  it("should return a string when there is no specific element", () => {
    expect(mdxPseudoProcessor("hello world!", "", "", { language: "fr" })).toMatchInlineSnapshot(`"hello world!"`)
  })
  it("should return a bold expression when there is #", () => {
    expect(mdxPseudoProcessor("hello #world#!", "", "", { language: "fr" })).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          hello 
        </React.Fragment>
        <React.Fragment>
          <span
            className="b"
          >
            world
          </span>
        </React.Fragment>
        <React.Fragment>
          !
        </React.Fragment>
      </React.Fragment>
    `)
  })
  it("should combine bold and italic", () => {
    expect(mdxPseudoProcessor("hello #w_or_ld#!", "", "", { language: "fr" })).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          hello 
        </React.Fragment>
        <React.Fragment>
          <span
            className="b"
          >
            <React.Fragment>
              <React.Fragment>
                w
              </React.Fragment>
              <React.Fragment>
                <span
                  className="i"
                >
                  or
                </span>
              </React.Fragment>
              <React.Fragment>
                ld
              </React.Fragment>
            </React.Fragment>
          </span>
        </React.Fragment>
        <React.Fragment>
          !
        </React.Fragment>
      </React.Fragment>
    `)
  })
  it("should combine bold and link", () => {
    expect(mdxPseudoProcessor("hello #[hello](asia)#!", "", "", { language: "fr" })).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          hello 
        </React.Fragment>
        <React.Fragment>
          <span
            className="b"
          >
            <LinkIfActive
              className="mdx-pseudo-processor-link"
              to="asia"
            >
              hello
            </LinkIfActive>
          </span>
        </React.Fragment>
        <React.Fragment>
          !
        </React.Fragment>
      </React.Fragment>
    `)
  })
  it("should return an italic expression when there is _", () => {
    expect(mdxPseudoProcessor("hello _world_!", "", "", { language: "fr" })).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          hello 
        </React.Fragment>
        <React.Fragment>
          <span
            className="i"
          >
            world
          </span>
        </React.Fragment>
        <React.Fragment>
          !
        </React.Fragment>
      </React.Fragment>
    `)
  })
  it("should return a link when there is []()", () => {
    expect(mdxPseudoProcessor("hello [world](asia)!", "", "", { language: "fr" })).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          hello 
        </React.Fragment>
        <React.Fragment>
          <LinkIfActive
            className="mdx-pseudo-processor-link"
            to="asia"
          >
            world
          </LinkIfActive>
        </React.Fragment>
        <React.Fragment>
          !
        </React.Fragment>
      </React.Fragment>
    `)
  })
  it("should return a link when there is []() and url starts with http", () => {
    expect(mdxPseudoProcessor("hello [world](https://asia)!", "", "", { language: "fr" })).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          hello 
        </React.Fragment>
        <React.Fragment>
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://asia"
          >
            world
          </ExternalLink>
        </React.Fragment>
        <React.Fragment>
          !
        </React.Fragment>
      </React.Fragment>
    `)
  })
  it("should return a correct link when text contain parenthesis and url starts with http", () => {
    expect(mdxPseudoProcessor("hello [world(FR)](https://asia)!", "", "", { language: "fr" })).toMatchInlineSnapshot(`
      <React.Fragment>
        <React.Fragment>
          hello 
        </React.Fragment>
        <React.Fragment>
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://asia"
          >
            world(FR)
          </ExternalLink>
        </React.Fragment>
        <React.Fragment>
          !
        </React.Fragment>
      </React.Fragment>
    `)
  })
  describe("link", () => {
    describe("baolau", () => {
      it("should build baolau link for french language", () => {
        expect(mdxPseudoProcessor("[world](baolau)", "", "", { language: "fr" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.baolau.com/fr"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build baolau link for english language", () => {
        expect(mdxPseudoProcessor("[world](baolau)", "", "", { language: "en" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.baolau.com/en"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build baolau link for english language with origin and destination", () => {
        expect(mdxPseudoProcessor("[world](baolau:Ho Chi Minh:My Tho)", "", "", { language: "en" }))
          .toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.baolau.com/en/results/?origin=Ho+Chi+Minh&destination=My+Tho"
          >
            world
          </ExternalLink>
        `)
      })
    })
    describe("gyg", () => {
      it("should build gyg link for french language", () => {
        expect(mdxPseudoProcessor("[world](gyg)", "", "", { language: "fr" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.getyourguide.fr/"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build gyg link for english language", () => {
        expect(mdxPseudoProcessor("[world](gyg)", "", "", { language: "en" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.getyourguide.com/"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build gyg link for english language with slug", () => {
        expect(
          mdxPseudoProcessor(
            "[world](gyg:activity/ho-chi-minh-city-l272/upper-mekong-river-full-day-tour-t69167)",
            "",
            "",
            { language: "en" }
          )
        ).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.getyourguide.com/activity/ho-chi-minh-city-l272/upper-mekong-river-full-day-tour-t69167"
          >
            world
          </ExternalLink>
        `)
      })
    })
    describe("tripadvisor", () => {
      it("should build tripadvisor link for french language", () => {
        expect(mdxPseudoProcessor("[world](tripadvisor)", "", "", { language: "fr" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.tripadvisor.fr/"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build tripadvisor link for english language", () => {
        expect(mdxPseudoProcessor("[world](tripadvisor)", "", "", { language: "en" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.tripadvisor.com/"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build tripadvisor link for english language with slug", () => {
        expect(
          mdxPseudoProcessor(
            "[world](tripadvisor:Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html)",
            "",
            "",
            { language: "en" }
          )
        ).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.tripadvisor.com/Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html"
          >
            world
          </ExternalLink>
        `)
      })
    })
    describe("booking-hotel", () => {
      it("should build link for french language", () => {
        expect(mdxPseudoProcessor("[world](booking-hotel:vn/khach-san-song-tien)", "", "", { language: "fr" }))
          .toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.booking.com/hotel/vn/khach-san-song-tien.fr.html"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build link for english language", () => {
        expect(mdxPseudoProcessor("[world](booking-hotel:vn/khach-san-song-tien)", "", "", { language: "en" }))
          .toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.booking.com/hotel/vn/khach-san-song-tien.en.html"
          >
            world
          </ExternalLink>
        `)
      })
    })
    describe("booking-search", () => {
      it("should build link for french language", () => {
        expect(mdxPseudoProcessor("[world](booking-search:vn/khach-san-song-tien)", "", "", { language: "fr" }))
          .toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.booking.com/searchresults.fr.html?ss=vn/khach-san-song-tien"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build link for english language", () => {
        expect(mdxPseudoProcessor("[world](booking-search:vn/khach-san-song-tien)", "", "", { language: "en" }))
          .toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.booking.com/searchresults.en.html?ss=vn/khach-san-song-tien"
          >
            world
          </ExternalLink>
        `)
      })
    })
    describe("expedia", () => {
      it("should build link for french language", () => {
        expect(mdxPseudoProcessor("[world](expedia)", "", "", { language: "fr" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.expedia.fr"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build link for english language", () => {
        expect(mdxPseudoProcessor("[world](expedia)", "", "", { language: "en" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.expedia.com"
          >
            world
          </ExternalLink>
        `)
      })
      // ("should build link for english language with slug", () => {
      //   Date.now = jest.fn(() => new Date(Date.UTC(2017, 7, 9, 8)).valueOf())
      //   expect(
      //     mdxPseudoProcessor(
      //       "[world](expedia:from%3AHanoi%2C%20Vietnam%20%28HAN-Noi%20Bai%20Intl.%29%2Cto%3ACan%20Tho%2C%20Vietnam%20%28VCA)",
      //       "",
      //       "",
      //       { language: "en" }
      //     )
      //   ).toMatchInlineSnapshot(`
      //     <ExternalLink
      //       className="mdx-pseudo-processor-link"
      //       href="https://www.expedia.com/Flights-Search?leg1=from%3AHanoi%2C%20Vietnam%20%28HAN-Noi%20Bai%20Intl.%29%2Cto%3ACan%20Tho%2C%20Vietnam%20%28VCA%29%2Cdeparture%3A3%2F23%2F2021TANYT&mode=search&options=carrier%3A%2A%2Ccabinclass%3A%2Cmaxhops%3A1%2Cnopenalty%3AN&pageId=0&passengers=adults%3A1%2Cchildren%3A0%2Cinfantinlap%3AN&trip=oneway"
      //     >
      //       world
      //     </ExternalLink>
      //   `)
      // })
    })
    describe("civivatis", () => {
      it("should build link for french language", () => {
        expect(mdxPseudoProcessor("[world](civivatis)", "", "", { language: "fr" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.civitatis.com/fr/"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build link for english language", () => {
        expect(mdxPseudoProcessor("[world](civivatis)", "", "", { language: "en" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.civitatis.com/en/"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build link for english language with slug", () => {
        expect(mdxPseudoProcessor("[world](civivatis:vietnam/)", "", "", { language: "en" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.civitatis.com/en/vietnam/"
          >
            world
          </ExternalLink>
        `)
      })
    })
    describe("agoda", () => {
      it("should build link for french language", () => {
        expect(mdxPseudoProcessor("[world](agoda)", "", "", { language: "fr" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.agoda.com/fr-fr"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build link for english language", () => {
        expect(mdxPseudoProcessor("[world](agoda)", "", "", { language: "en" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.agoda.com"
          >
            world
          </ExternalLink>
        `)
      })
    })
    describe("airbnb", () => {
      it("should build link for french language", () => {
        expect(mdxPseudoProcessor("[world](airbnb:vietnam)", "", "", { language: "fr" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.airbnb.fr/s/vietnam/homes"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build link for english language", () => {
        expect(mdxPseudoProcessor("[world](airbnb:vietnam)", "", "", { language: "en" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.airbnb.com/s/vietnam/homes"
          >
            world
          </ExternalLink>
        `)
      })
    })
    describe("maps", () => {
      it("should build link for french language", () => {
        expect(mdxPseudoProcessor("[world](maps)", "", "", { language: "fr" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.google.fr/maps/"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build link for english language", () => {
        expect(mdxPseudoProcessor("[world](maps)", "", "", { language: "en" })).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.google.com/maps/"
          >
            world
          </ExternalLink>
        `)
      })
      it("should build link for english language with slug", () => {
        expect(
          mdxPseudoProcessor(
            "[world](maps:place/220+%C4%90%E1%BB%81+Th%C3%A1m,+Ph%C6%B0%E1%BB%9Dng+Ph%E1%BA%A1m+Ng%C5%A9+L%C3%A3o,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam)",
            "",
            "",
            { language: "en" }
          )
        ).toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link"
            href="https://www.google.com/maps/place/220+%C4%90%E1%BB%81+Th%C3%A1m,+Ph%C6%B0%E1%BB%9Dng+Ph%E1%BA%A1m+Ng%C5%A9+L%C3%A3o,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam"
          >
            world
          </ExternalLink>
        `)
      })
    })
    describe("todo", () => {
      it("should build todo span", () => {
        expect(mdxPseudoProcessor("[world](todo)", "", "", { language: "fr" })).toMatchInlineSnapshot(`
          <span
            className="bg-dark-pink yellow bold dib"
          >
            world
          </span>
        `)
      })
    })
    describe("anchor", () => {
      it("should build link with anchor", () => {
        expect(mdxPseudoProcessor("[Hello](#here)", "", "", { language: "fr" })).toMatchInlineSnapshot(`
          <a
            className="mdx-pseudo-processor-link"
            href="#here"
          >
            Hello
          </a>
        `)
      })
    })
    describe("japan-line", () => {
      it("should build japan-line link", () => {
        expect(mdxPseudoProcessor("[test](japan-line:red:blue:https://test.com)", "", "", { language: "fr" }))
          .toMatchInlineSnapshot(`
          <ExternalLink
            className="mdx-pseudo-processor-link japan-line"
            href="https://test.com"
            style={
              Object {
                "backgroundColor": "blue",
                "color": "red",
              }
            }
          >
            test
          </ExternalLink>
        `)
      })
    })
  })
})
