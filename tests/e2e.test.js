const { chromium } = require("playwright")
const expect = require("chai").expect

;(async () => {
  for (const browserType of ["chromium"]) {
    const browser = await chromium.launch({
      devtools: true,
    })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("http://localhost:3000/")
    const content = await page.textContent("#btn")
    expect(content).equal("按钮")
    await page.screenshot({ path: `screenshot/example-${browserType}.png` })
    await browser.close()
  }
})()
