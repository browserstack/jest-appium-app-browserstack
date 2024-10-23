const { Builder, By, Key, until } = require("selenium-webdriver");

describe("Test sample app UI Elements", () => {
  let driver;

  beforeAll(() => {
    driver = new Builder()
      .usingServer(`http://127.0.0.1:4723/wd/hub`)
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  })

  test("should input a text", async () => {
    await driver.wait(
      until.elementLocated(
        By.xpath(
          '/XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[1]'
        )
      ), 30000
    ).click();

    var textInput = await driver.wait(
      until.elementLocated(
        By.xpath(
          '/XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField'
        ), 30000
      )
    );
    await textInput.sendKeys('hello@browserstack.com\n');
    await driver.sleep(5000);

    var textOutput = await driver.findElement(
      By.xpath(
        '/XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeStaticText'
      )
    ).getText();
    expect(textOutput).toBe('hello@browserstack.com');
  }, 1000000);
});
