import{test,expect} from "@playwright/test"

test.use({storageState:"data/SFlogin.json"})

test("storagestate",async({page})=>{

await page.goto("https://orgfarm-ee76849810-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")

await expect(page.getByRole('button', { name: 'Search' })).toBeVisible()

})