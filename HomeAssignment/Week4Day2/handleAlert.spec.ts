import{test, expect} from "@playwright/test"



test("Automating Alert & Frame Interactions", async({page})=>{
    await  page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    
    //event listener to interact
     page.on('dialog', async(alert)=>{

        alert.accept()

     })


     //button is inside iframe , save locator ref in variable
     const frameRef = await page.frameLocator("//iframe[@id='iframeResult']")

     // button reference from frameRef
     const  buttonRef =  await frameRef.getByRole('button',{name:'Try it'})

     //click action
     buttonRef.click()

     //text reference from frameRef
     //const textRef = await frameRef.locator("//p[@id='demo']").innerText()


    
    //verify the text after click
    // expect(textRef).toBe("You pressed OK!")

     // verify the text after click (auto-retries, avoids race condition)
     await expect(frameRef.locator("//p[@id='demo']")).toHaveText('You pressed OK!')

})