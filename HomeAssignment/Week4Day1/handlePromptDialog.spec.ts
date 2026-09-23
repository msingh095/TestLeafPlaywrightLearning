import{test, expect} from"@playwright/test"

test("Handle prompt dialog and  enter the value'Playwright' when the promptis displayed",async({page})=>{

//register event listener page.on to handle the alert

page.on('dialog',async(alert)=>{
console.log('Dialog type:', alert.type())
console.log('Dialog message:', alert.message())
await alert.accept("Playwright")


})


//Launch the URL: https://www.leafground.com/alert.xhtml
await page.goto("https://www.leafground.com/alert.xhtml")

//Click on "Prompt Dialog"
await page.locator("//span[text()='Show']").nth(4).click()

//Verify the page reflects the entered value
await expect(page.locator("//span[@id='confirm_result']")).toHaveText("User entered name as: Playwright")

})