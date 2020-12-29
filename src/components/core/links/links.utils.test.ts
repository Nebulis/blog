import { createDate, isPublished } from "./links.utils"

describe("isPublished", () => {
  const currentDate = new Date("2019-10-22")
  const _date = Date
  // eslint-disable-next-line jest/no-hooks
  beforeAll(() => {
    // @ts-ignore
    jest.spyOn(global, "Date").mockImplementation((d) => (d ? new _date(d) : currentDate))
    global.Date.UTC = _date.UTC
    global.Date.parse = _date.parse
    global.Date.now = _date.now
  })
  // eslint-disable-next-line jest/no-hooks
  afterAll(() => {
    Date = _date
  })
  it("should work yeah I know it's a bad name", () => {
    const props = { id: "", label: { fr: "", en: "" } }

    expect(isPublished({ published: createDate(21, "october", 2019), ...props })).toStrictEqual(true)
    expect(isPublished({ published: createDate(21, "october", 2019, 23, 59, 59), ...props })).toStrictEqual(true)
    expect(isPublished({ published: createDate(22, "october", 2019), ...props })).toStrictEqual(true)
    expect(isPublished({ published: createDate(22, "october", 2019, 0, 0, 1), ...props })).toStrictEqual(false)
    expect(isPublished({ published: createDate(23, "october", 2019), ...props })).toStrictEqual(false)
  })
})
