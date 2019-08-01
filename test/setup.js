require('jsdom-global')()
window.Date = Date; // temporary bug fix, should be removed after vue-test-utils fixes #936 - https://github.com/vuejs/vue-test-utils/issues/936
