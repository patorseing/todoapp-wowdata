// Generated by Selenium IDE
const { Builder, By, Key } = require("selenium-webdriver");
import { timeout } from "../util/timeout";
describe("6_add_and_change_menu", function () {
  timeout(30000);
  let driver;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("6_add_and_change_menu", async function () {
    await driver.get("http://localhost:3000/");
    await driver.manage().window().setRect(1920, 1080);
    await driver.findElement(By.name("todo")).click();
    await driver.findElement(By.name("todo")).sendKeys("All");
    await driver.findElement(By.name("todo")).sendKeys(Key.ENTER);
    await driver.findElement(By.css(".dropbtn")).click();
    await driver
      .findElement(By.css(".group > button:nth-child(2) > p"))
      .click();
    await driver.findElement(By.name("todo")).click();
    await driver.findElement(By.name("todo")).sendKeys("Done");
    await driver.findElement(By.css(".save-btn")).click();
    await driver.findElement(By.css(".dropbtn")).click();
    await driver.findElement(By.css("button:nth-child(3) > p")).click();
    await driver.findElement(By.name("todo")).click();
    await driver.findElement(By.name("todo")).sendKeys("Undone");
    await driver.findElement(By.name("todo")).sendKeys(Key.ENTER);
    await driver.findElement(By.css(".dropbtn > p")).click();
    await driver
      .findElement(By.css(".group > button:nth-child(1) > p"))
      .click();
    await driver.close();
  });
});