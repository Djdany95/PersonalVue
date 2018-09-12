// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'carga inicial': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#main', 5000)
      .assert.elementPresent('.navMenu')
      .assert.elementPresent('#about')
      .assert.elementPresent('.icoLang')
  },
  'click projects': function(browser) {
    browser
      .click('#projects')
      .waitForElementVisible('.projectCard', 5000)

      .assert.elementPresent('.fa-angular')
      .assert.elementPresent('.fa-python')
      .assert.elementPresent('.fa-vuejs')
      .assert.elementPresent('.fa-node-js')
      .assert.urlEquals(
        browser.globals.devServerURL+'/projects'
      );
  },
  'click about': function(browser) {
    browser
      .click('#about')
      .waitForElementVisible('.aboutCard', 5000)

      .assert.elementPresent('.aboutCard')
      .assert.elementPresent('.myPic')
      .assert.urlEquals(
        browser.globals.devServerURL+'/'
      )
  },
  'click openResume': function(browser) {
    browser
      .assert.elementNotPresent('.resumeCard')

      .click('.openResume')
      .waitForElementVisible('.resumeCard', 5000)

      .assert.elementPresent('.resumeCard')
  },
  'click language': function(browser) {
    browser
      .assert.elementNotPresent('.lang')

      .click('.icoLang')
      .waitForElementVisible('.lang', 5000)

      .assert.elementPresent('.lang')
  },
  'click language spanish': function(browser) {
    browser
      .useXpath()
      .click("/html/body/div[@id='app']/div[@id='main']/footer/div[@class='langComp']/a[@class='lang'][2]")
      .useCss()
      .waitForElementNotPresent('.lang', 5000)

      .assert.containsText('.resumeCard', 'ES')
  },
  'click language english': function(browser) {
    browser
      .click('.icoLang')
      .waitForElementVisible('.lang', 5000)
      .useXpath()
      .click("/html/body/div[@id='app']/div[@id='main']/footer/div[@class='langComp']/a[@class='lang'][1]")
      .useCss()
      .waitForElementNotPresent('.lang', 5000)

      .assert.containsText('.resumeCard', 'EN')
      .end()
  }
}
