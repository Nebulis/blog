module.exports = {
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`, "firebase", "integration"],
  watchPathIgnorePatterns: [`node_modules`, `.cache`, `public`, "firebase"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": `<rootDir>/jest-preprocess.js`,
  },
  transformIgnorePatterns: ["node_modules/?!(react-icons)"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/src/__mocks__/file-mock.js`,
  },
  // transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  // testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ["./jest.setup.js"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  snapshotSerializers: ["@emotion/jest/serializer"],
}
