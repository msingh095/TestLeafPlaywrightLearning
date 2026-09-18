import { expect, test } from "@playwright/test";

test("pvrCinemas",async({page})=>{

await page.goto("https://www.pvrcinemas.com/")


await page.locator("(//div[@class='cities-overlay cities-active'])[4]").click()

await page.locator("//div[@class='date-show']/child::span[2]").click()

await page.locator("//div[@aria-label='Select Cinema']").click()
await page.locator("//li[@role='option']/child::span[text()='INOX Nexus Whitefield Bengaluru']").click()
await page.locator("//span[normalize-space()='Sun, 20 Sep']").click()

await page.locator("//li[@role='option']/span[text()='CITY LIGHTS']").click() //click on City lights dropdown
await page.locator("//div[@class='p-dropdown-items-wrapper']/ul[@role='listbox']/li[@role='option']/span[text()='Kannada']").click() //
await page.getByRole('button', {name:'submit'}).click()

await page.getByRole('button', {name:'Accept'}).click()
await page.waitForTimeout(2000)
await page.getByRole('button', {name:'Accept'}).click()
await page.locator('//tr[@class="seats-row"]/td[@class="seats-col"]/span[@id="CR.CLASSIC ROWS|I:1"]').click() //click seat 1 in row I


//verify the movie name is displayed correctly.
const movieName = await page.locator("//h5[text()='CITY LIGHTS']").textContent()
expect(movieName).toBe("CITY LIGHTS") 
//Verify the selected seat information is displayed.
const seatInfo =await  page.locator("//div[@class='seat-number']/p[text()='I1']").textContent()
console.log("Seat Info is : "+seatInfo)
expect(seatInfo).toBe("I1")

//Verify the total ticket amount is displayed
const  totalAmount =  await page.locator("//div[@class ='grand-prices']/h6[text()= 316.02]").textContent()
console.log("Total Amount is : "+totalAmount)
expect(totalAmount).toBe(" 316.02")


//Verify the page title is displayed correctly.
const pageTitle = await page.title()
console.log("Page Title is : "+pageTitle)
expect(pageTitle).toBe("PVR Cinemas") 

//click on proceed  button
await page.getByRole('button', {name:'Proceed'}).click()


})