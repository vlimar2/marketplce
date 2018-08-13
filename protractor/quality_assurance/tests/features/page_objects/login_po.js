'use strict'
const Helper = require('../../shared_libs/helper.js')

class LoginPage {
  constructor () {
    this.helper = new Helper()
    this.inputName = $('input[name="userName"]')
    this.inputPassword = $('input[name="pwd"]')
    this.buttonLogin = $('button[name="btn"]')//div[class="fancybox-overlay fancybox-overlay-fixed"]
    //this.resultLogin = $('span[class="helloName"]')
    //this.resultCatalog = $('a[href="#/lojas"]')
    //this.resultCatalog = $('span[class="btn-abre-saudacao"]')//span[class="ico ico-logo"]
    this.btnclosebanner = $('div[class="fancybox-overlay fancybox-overlay-fixed"]')//fancybox-item fancybox-closea[title="Close"]
    this.resultCatalog = $('span[class="ico ico-logo"]')
    this.optIncentivos = $('a[data-menu-header="Menu_Header_REP_Incentivo"]')
    //this.optMeumundoavon = $('a[target="_blank"]')
    this.optMeumundoavon = $('a[href="https://www.avoncomigo.avon.com.br/vendor/vendor-link-redirect.html?vendorId=18"]')
    
  }

  open (link) {
    return browser.get(link)
  }

  performLogin (name, pass) {
    this.helper.elementIsPresenceDom(this.inputName)
    this.inputName.sendKeys(name)
    this.inputPassword.sendKeys(pass)
    this.helper.elementIsVisible(this.buttonLogin)
    this.buttonLogin.click()
    this.helper.elementIsClickable(this.btnclosebanner)
    this.btnclosebanner.click
    this.helper.elementIsVisible(this.optIncentivos)
    this.optIncentivos.click()
    this.helper.elementIsVisible(this.optMeumundoavon)
    this.optMeumundoavon.click()
    browser.getAllWindowHandles().then(function(handles){
      return browser.switchTo().window(handles[1]);
      });
  }

  getresultLogin(){
    //browser.sleep(20000)
    //return browser.switchTo()
    this.helper.elementIsVisible(this.resultCatalog)
    return this.resultCatalog.getText()
  }
}

module.exports = LoginPage