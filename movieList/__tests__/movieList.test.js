const { Builder, Capabilities } = require("selenium-webdriver")
require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { crossOffMovie, uncrossedMovie, watchedMessage } = require('../testFunctions/functions')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5503/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe('movie list functionality', () => {
    test('movie was crossed off', async () => {
        await crossOffMovie(driver)
        await driver.sleep(3000)
    })
    test('check if crossed off movie gets uncrossed once clicked', async () => {
        await uncrossedMovie(driver)
        await driver.sleep(3000)
    })
    test('check to see if movie title is gone once deleted', async () => {
        await watchedMessage(driver)
        await driver.sleep(3000)
    })
})