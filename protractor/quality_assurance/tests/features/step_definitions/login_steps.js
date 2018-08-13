const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect
const LoginPage = require('../page_objects/login_po')
const page = new LoginPage()
         
Given('que estou na tela de login', async function () {
    await page.open('/widget/avonwg2/#/login')
});

When('realizar login válido', async function () {
    await page.performLogin('73390365', 'Avon@123')
});

Then('devo visualizar a página principal', async function () {
    await expect(page.getresultLogin())
    //.to.eventually.equal('CAMILA')
    .to.eventually.equal('Webprêmios') 
})
