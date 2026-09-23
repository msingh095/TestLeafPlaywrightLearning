import{test,expect} from"@playwright/test"



test(" Validate a Disabled Textbox, Enabled Textbox, Soft Assertion Practice", async({page})=>{
 await page.goto("https://leafground.com/input.xhtml") // Navigate to the page

 //locators
const disabledTextbox = page.locator("//input[@id='j_idt88:j_idt93']") // Locate the disabled textbox with id
const enabledTextbox = page.locator("//input[@id='j_idt88:name']") // Locate the enabled textbox with id
const softAssertionTextbox = page.locator("//span[@class='ui-float-label']/input")
const fillDataTextbox = page.locator("//input[@id='j_idt88:j_idt95']")

// Assertion for disabled textbox
await expect(disabledTextbox).toBeDisabled()
//Assertion for enabled textbox
await expect(enabledTextbox).toBeEditable()

// Type your name into the enabled textbox
await enabledTextbox.fill("Megha Singh")

//soft assertion practice
await expect.soft(softAssertionTextbox).toBeDisabled()


// Fill data into the fillDataTextbox
await fillDataTextbox.fill("Playwright Learning", {timeout: 5000}) // Clear existing text and enter new value
await expect(fillDataTextbox).toHaveValue("Playwright Learning") // Assertion to verify the value entered
})
