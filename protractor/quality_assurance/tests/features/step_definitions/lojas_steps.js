const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect
const LojasPage = require('../page_objects/lojas_po')
const lojaspage = new LojasPage ()

         
//Given('que estou na tela principal do marketplace Avon', async function () {
 //   await lojaspage.open('https://catalogo2017.meumundoavon.com.br/#/')
//});

When('seleciono a opção Polishop', async function () {
    await lojaspage.accessPolishop()
});

Then('devo visualizar a vitrine Polishop', async function () {
    await expect(lojaspage.getResultPolishop())
    //.to.eventually.equal('logo-banner')
})

When('seleciono a opção Meu mundo Avon', async function () {
    await lojaspage.accessMeumundoavon()
});

Then('devo visualizar a a vitrine Meu mundo Avon', async function () {
    await expect(lojaspage.getResultAvon())
    .to.eventually.equal('logo-banner')
})

When('seleciono a opção Artllure', async function () {
    await lojaspage.accessLojaArtllure()
});

Then('devo visualizar a a vitrine Artllure', async function () {
    await expect(lojaspage.getresultArtllure())
    .to.eventually.equal('logo-banner')
})

When('seleciono a opção Meu mundo Avon II', async function () {
    await lojaspage.accessLojameumundoAvonII()
});

Then('devo visualizar a a vitrine Meu mundo Avon', async function () {
    await expect(lojaspage.getresultAvonII())
    .to.eventually.equal('logo-banner')
})

When('seleciono a opção Netshoes', async function () {
    await lojaspage.accessLojaNetshoes()
});

Then('devo visualizar a vitrine Netshoes', async function () {
    await expect(lojaspage.getresultNetshoes())
    .to.eventually.equal('logo-banner')
})

When('seleciono a opção Fastshop', async function () {
    await lojaspage.accessLojaFastshop()
});

Then('devo visualizar a vitrine Fastshop', async function () {
    await expect(lojaspage.getresultFastshop())
    .to.eventually.equal('logo-banner')
})

When('seleciono a opção Magazine Luiza', async function () {
    await lojaspage.accessLojaMagazineluiza()
});

Then('devo visualizar a a vitrine Magazine Luiza', async function () {
    await expect(lojaspage.getresultMagazineluiza())
    .to.eventually.equal('logo-banner')
})

When('seleciono a opção Zattini', async function () {
    await lojaspage.accessLojaZattini()
});

Then('devo visualizar a vitrine Zattini', async function () {
    await expect(lojaspage.getresultZattini())
    .to.eventually.equal('logo-banner')
})

When('seleciono a opção Extra', async function () {
    await lojaspage.accessLojaExtra()
});

Then('devo visualizar a vitrine Extra', async function () {
    await expect(lojaspage.getresultExtra())
    .to.eventually.equal('logo-banner')
})

When('seleciono a opção Ponto frio', async function () {
    await lojaspage.accessLojaPontofrio()
});

Then('devo visualizar a vitrine Ponto frio', async function () {
    await expect(lojaspage.getresultPontofrio())
    .to.eventually.equal('logo-banner')
})

When('seleciono a opção Casas Bahia', async function () {
    await lojaspage.accessLojaCasasbahia()
});

Then('devo visualizar a vitrine Casas Bahia', async function () {
    await expect(lojaspage.getresultCasasbahia())
    .to.eventually.equal('logo-banner')
})