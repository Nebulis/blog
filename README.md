[![CircleCI](https://circleci.com/gh/Nebulis/blog.svg?style=svg)](https://circleci.com/gh/Nebulis/blog)

- node reset
- npm run plop -- -- --pagePath asia/philippines/palawan/el-nido-which-tour
- node resize

## Dependencies update

- plop v3 does not support typescript https://github.com/plopjs/plop/issues/296
- gatsby v4 does not work on netlify
  - https://app.netlify.com/teams/nebulis/builds/61c6703a9d14182e91394d08
  - https://github.com/gatsbyjs/gatsby/issues/33738
  - as a result the following dependencies was downgraded
    - all gatsby plugins
    - eslint
    => reverted to the initial versions https://github.com/Nebulis/blog/pull/165/files
