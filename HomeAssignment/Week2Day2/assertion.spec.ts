import{expect, test} from"@playwright/test"

test('Learn assertions',async({page})=>{


 await page.goto("https://leaftaps.com/opentaps/control/main")
const title = await page.title()
console.log(title)

const url = page.url()
console.log(url)

//retry assertions
await expect(page).toHaveURL("https://leaftaps.com/opentaps/control/main")
//await expect(page).toHaveTitle()

})