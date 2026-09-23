import{test} from "@playwright/test"

test("storagestate",async({page})=>{

await page.goto("https://login.salesforce.com/")
await page.locator("#username").fill("singh2megha.ms.573de96b24ec@agentforce.com")
await page.locator("#Login").click()
await page.locator("#password").fill("Megha@95!!")
await page.locator("#Login").click()

await page.waitForTimeout(15000)

await page.context().storageState({path:"data/SFlogin.json"})

})