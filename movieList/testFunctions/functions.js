const { By } = require('selenium-webdriver')

const movie = "Unbroken"

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(movie + '\n')
    const newMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
    await newMovie.click()
    const crossedMovie = await driver.findElement(By.className("checked"))
    expect(crossedMovie.isDisplayed()).toBeTruthy()
}

const uncrossedMovie = async (driver) => {
    // await driver.findElement(By.xpath('//input')).sendKeys(movie + '\n')
    // const newMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
    
    const crossedMovie = await driver.findElement(By.className("checked"))
    await crossedMovie.click()
    const uncrossedMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
    expect(uncrossedMovie.isDisplayed()).toBeTruthy()
}

const watchedMessage = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(movie + '\n')
    const newMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
    await newMovie.click()
    const watched = await driver.findElement(By.id('message'))
    expect(watched.isDisplayed()).toBeTruthy()
}

// const deletedMovie = async (driver) => {
//     await driver.findElement(By.xpath('//input')).sendKeys(movie + '\n')
//     await driver.findElement(By.xpath("//button[text() = 'x']")).click()
//     const deletedMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
//     expect(deletedMovie).toBeTruthy()
// }



module.exports = {
   crossOffMovie,
   uncrossedMovie, 
   watchedMessage
   
}