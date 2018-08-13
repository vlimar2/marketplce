'use strict'
var Helper = require('../../shared_libs/helper.js')

class LojasPage {
    constructor () {
        this.helper = new Helper()
        this.Lojapolishop = $('a[href="#/parceiro/46"]')
        this.LojameumundoAvon = $('a[href="#/parceiro/21068"]')
        this.LojameumundoAvonII = $('a[href="#/parceiro/20987"]')
        this.LojaArtllure = $('a[href="#/parceiro/21139"]')
        this.LojaNetshoes = $('a[href="#/parceiro/10925"]')
        this.LojaFastshop = $('a[href="#/parceiro/106"]')
        this.LojaMagazineluiza = $('a[href="#/parceiro/62"]')
        this.LojaZattini = $('a[href="#/parceiro/10944"]')
        this.LojaExtra = $('a[href="#/parceiro/59"]')
        this.LojaPontofrio = $('a[href="#/parceiro/58"]')
        this.LojaCasasbahia = $('a[href="#/parceiro/60"]')
        this.resultPolishop = $('img[src="/content/new_css/skins/polishop/img/logo.png"]')
        this.resultAvon = $('img[src="/content/new_css/skins/Catalogo-I/img/logo.png"]')
        this.resultArtllure = $('img[src="/content/new_css/skins/artllure/img/logo.png"]')
        this.resultAvonII = $('img[src="/content/new_css/skins/itlog/img/logo.png"]')
        this.resultNetshoes = $('img[src="/content/new_css/skins/netshoes/img/logo.png"]')
        this.resultFastshop = $('img[src="/content/new_css/skins/fastshop/img/logo.png"]')
        this.resultMagazineluiza = $('img[src="/content/new_css/skins/magazine-luiza/img/logo.png"]')
        this.resultZattini = $('img[src="/content/new_css/skins/zattini/img/logo.png"]')
        this.resultExtra = $('img[src="/content/new_css/skins/extra/img/logo.png"]')
        this.resultPontofrio = $('img[src="/content/new_css/skins/ponto-frio/img/logo.png"]')
        this.resultCasasbahia = $('img[src="/content/new_css/skins/casas-bahia/img/logo.png"]')
        this.Btnlojas = $('a[href="#/lojas"]')
    }  

    open (link) {
        return browser.get(link)
    }

    accessPolishop () {
        this.helper.elementIsClickable(this.Btnlojas);        
        this.Btnlojas.click()
        this.helper.elementIsClickable(this.Lojapolishop);        
        this.Lojapolishop.click()
    }

    getResultPolishop(){
        //this.helper.elementIsClickable(this.ResultPolishop)
        this.helper.elementIsVisible(this.resultPolishop) 
        return this.resultPolishop.getText()
    }

    accessMeumundoavon () {
        browser.switchTo()
        this.Helper.elementIsPresenceDom(this.Btnlojas)
        this.Btnlojas.click()
        this.Helper.elementIsPresenceDom(this.LojameumundoAvon)
        this.LojameumundoAvon.click()
    }

    getResultAvon(){
        //this.helper.elementIsClickable(this.ResultAvon)
        this.Helper.elementIsVisible(this.ResultAvon) 
        return this.ResultAvon.getText()
    }

    accessLojaArtllure () {
        browser.switchTo()
        this.Helper.elementIsPresenceDom(this.Btnlojas)
        this.Btnlojas.click()
        this.Helper.elementIsPresenceDom(this.LojaArtllure)
        this.LojaArtllure.click()
    }

    getresultArtllure(){
        //this.helper.elementIsClickable(this.resultArtllure)
        this.Helper.elementIsVisible(this.resultArtllure) 
        return this.resultArtllure.getText()
    }

    accessLojameumundoAvonII () {
        browser.switchTo()
        this.Helper.elementIsPresenceDom(this.Btnlojas)
        this.Btnlojas.click()
        this.helper.elementIsPresenceDom(this.LojameumundoAvonII)
        this.LojameumundoAvonII.click()
    }

    getresultAvonII(){
        //this.helper.elementIsClickable(this.resultArtllure)
        this.Helper.elementIsVisible(this.resultAvonII) 
        return this.resultAvonII.getText()
    }

    accessLojaNetshoes () {
        browser.switchTo()
        this.Helper.elementIsPresenceDom(this.Btnlojas)
        this.Btnlojas.click()
        this.Helper.elementIsPresenceDom(this.LojaNetshoes)
        this.LojaNetshoes.click()
    }

    getresultNetshoes(){
        //this.helper.elementIsClickable(this.resultArtllure)
        this.Helper.elementIsVisible(this.resultNetshoes) 
        return this.resultNetshoes.getText()
    }

    accessLojaFastshop () {
        browser.switchTo()
        this.Helper.elementIsPresenceDom(this.Btnlojas)
        this.Btnlojas.click()
        this.Helper.elementIsPresenceDom(this.LojaFastshop)
        this.LojaFastshop.click()
    }

    getresultFastshop(){
        //this.helper.elementIsClickable(this.resultArtllure)
        this.helper.elementIsVisible(this.resultFastshop) 
        return this.resultFastshop.getText()
    }

    accessLojaMagazineluiza () {
        browser.switchTo()
        this.Helper.elementIsPresenceDom(this.Btnlojas)
        this.Btnlojas.click()
        this.Helper.elementIsPresenceDom(this.LojaMagazineluiza)
        this.LojaMagazineluiza.click()
    }

    getresultMagazineluiza(){
        //this.helper.elementIsClickable(this.resultArtllure)
        this.Helper.elementIsVisible(this.resultMagazineluiza) 
        return this.resultMagazineluiza.getText()
    }

    accessLojaZattini () {
        browser.switchTo()
        this.Helper.elementIsPresenceDom(this.Btnlojas)
        this.Btnlojas.click()
        this.Helper.elementIsPresenceDom(this.LojaZattini)
        this.LojaZattini.click()
    }

    getresultZattini(){
        //this.helper.elementIsClickable(this.resultArtllure)
        this.Helper.elementIsVisible(this.resultZattini) 
        return this.resultZattini.getText()
    }

    accessLojaExtra () {
        browser.switchTo()
        this.Helper.elementIsPresenceDom(this.Btnlojas)
        this.Btnlojas.click()
        this.Helper.elementIsPresenceDom(this.LojaExtra)
        this.LojaExtra.click()
    }

    getresultExtra(){
        //this.helper.elementIsClickable(this.resultArtllure)
        this.Helper.elementIsVisible(this.resultExtra) 
        return this.resultExtra.getText()
    }

    accessLojaPontofrio () {
        browser.switchTo()
        this.Helper.elementIsPresenceDom(this.Btnlojas)
        this.Btnlojas.click()
        this.Helper.elementIsPresenceDom(this.LojaPontofrio)
        this.LojaPontofrio.click()
    }

    getresultPontofrio(){
        //this.helper.elementIsClickable(this.resultArtllure)
        this.Helper.elementIsVisible(this.resultPontofrio) 
        return this.resultPontofrio.getText()
    }

    accessLojaCasasbahia () {
        browser.switchTo()
        this.Helper.elementIsPresenceDom(this.Btnlojas)
        this.Btnlojas.click()
        this.Helper.elementIsPresenceDom(this.LojaCasasbahia)
        this.LojaCasasbahia.click()
    }

    getresultCasasbahia(){
        //this.helper.elementIsClickable(this.resultArtllure)
        this.Helper.elementIsVisible(this.resultCasasbahia) 
        return this.resultCasasbahia.getText()
    }

}

module.exports = LojasPage

           
       