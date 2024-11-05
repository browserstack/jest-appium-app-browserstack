const { Builder, By, until } = require("selenium-webdriver");

describe("BrowserStack Local Testing", () => {
  let driver;

  beforeAll(() => {
    driver = new Builder()
      .usingServer(`http://127.0.0.1:4723/wd/hub`)
      .build();
  });
  
  afterAll(async () => {
    await driver.quit();
  })

  test("check tunnel is working", async () => {
    await driver.wait(
      until.elementLocated(
        By.xpath(
          '/XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton/XCUIElementTypeStaticText'
        )
      ), 30000
    ).click();

    var textElement = await driver.findElement(
      By.xpath(
        '/XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField'
      )
    ).getText();
    expect(textElement).toContain('Up and running');
  }, 10000000);
});
