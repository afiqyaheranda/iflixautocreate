const puppeteer = require('puppeteer');
const { devices } = puppeteer;
const fetch     = require('node-fetch');
const fs = require('fs');
const fsa = require("async-file");
const filemu = "jumlah.txt";
(async () => {
      await fs.readFile(filemu, async function(err, data) {
        if (err) throw err;
        const array = data
        .toString()
        .replace(/\r/g, "")
        .split('\n')
        
        for(let i = 0; i < array.length; i++){
        const GenerateData = () => new Promise((resolve,reject) =>
            {
                fetch("https://api.randomuser.me/", {
                    'method': 'GET'
                })
                .then(res => res.json())
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                })
            });
        const empas = array[i].split('|')
        const Resultdata = await GenerateData()
        const name = Resultdata.results[0].name.first
        const email = Resultdata.results[0].email.replace('example.com', 'yopmail.com')
        const password = "sgbteam77"
    

  console.log("\n[+] Iflix Auto Create VIP [+]");
  console.log("[+] @afiqyaheranda_       [+]\n");
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0)
  await page.goto(`https://www.iflix.com/`, {waitUntil: "networkidle2"})
  console.log("[~] Mendaftar =>"+email)
  await page.click("#__next > div.t1lp0apv > button.Profilestyled__ProfileButtonContainer-sc-1r1jaad-0.hOihjg > div")
    await sleep(5000)
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
  await page.click("#__next > div.t1lp0apv > div.SideNavstyled__SideNavContainer-c3csg2-0.beDRAM.transition-slidein-right-enter-done > div.SideNavstyled__SideNav-c3csg2-2.iPPfE > div.NavProfilestyled__NavProfile-xmujtu-0.dLgKFY > div > div > div > button")
      await sleep(5000)
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
  await page.type("#__next > div.Modalstyled__Overlay-sc-1trihl5-0.SVNOc > section > form > div > div:nth-child(1) > div.Inputstyled__InputContainer-sc-1qj3s5c-3.foRVFO > input", name, {delay:15})
  await page.type("#__next > div.Modalstyled__Overlay-sc-1trihl5-0.SVNOc > section > form > div > div:nth-child(2) > div.Inputstyled__InputContainer-sc-1qj3s5c-3.foRVFO > input", email, {delay:15})
  await page.type("#__next > div.Modalstyled__Overlay-sc-1trihl5-0.SVNOc > section > form > div > div:nth-child(3) > div.Inputstyled__InputContainer-sc-1qj3s5c-3.foRVFO > input", password, {delay:15})
  await page.click("#__next > div.Modalstyled__Overlay-sc-1trihl5-0.SVNOc > section > form > button")
  await page.waitForNavigation()
      await sleep(10000)
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
  if (page.url().includes('https://www.iflix.com/browse?register=true')) {
        console.log("[~] Daftar Berhasil")
        await page.goto(`https://www.iflix.com/ph/en/voucher`, {waitUntil: "networkidle2"})
    console.log("[~] Mencoba Redeem Code")
    await page.waitForSelector('#__next > div > div.Conversationstyled__Conversation-sc-1th0u6r-1.hjivUl > div:nth-child(2) > div > div > div.Inputstyled__InputContainer-sc-1qj3s5c-3.foRVFO > input')
    await page.type("#__next > div > div.Conversationstyled__Conversation-sc-1th0u6r-1.hjivUl > div:nth-child(2) > div > div > div.Inputstyled__InputContainer-sc-1qj3s5c-3.foRVFO > input", 'stayhomepasig', {delay:15})
    await page.click("#__next > div > div.Conversationstyled__Conversation-sc-1th0u6r-1.hjivUl > div:nth-child(3) > div > button")
    fsa.appendFile("iflix_premium.txt", `${email}|${password}\n`, {encoding: 'utf8'});
              await sleep(10000)
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
    console.log("[~] Redeem Berhasil. Data Akun Tersimpan Di iflix_premium.txt")
    await browser.close()
    continue
  } else {
    console.log("[~] Gagal!")
    await browser.close()
  }
 }})})();
