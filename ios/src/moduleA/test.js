const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("BStack Tests Module A", () => {
  let driver;

  beforeAll(async () => {
    driver = new Builder()
      .usingServer(`http://127.0.0.1:4723/wd/hub`)
      .build();

    await driver.wait(
      until.elementLocated(
        By.xpath(
          '/XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton[1]'
        )
      ), 30000
    ).click();
  });

  afterAll(async () => {
    await driver.quit();
  })

  test("flaky test - intermittently passes and fails", async () => {
    var xpathText = Math.random() > 0.7 ? '/XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField' : 'randomSelector';
    var textInput = await driver.wait(
      until.elementLocated(
        By.xpath(
          xpathText
        ), 30000
      )
    );
    assert(true);
  }, 30000);

  test('always failing test - missing element 1', async () => {
    try {
      await driver.wait(
        until.elementLocated(
          By.xpath(
            "/hierarchy/non/existent/path"
          )
        ),
        5000
      );
      assert.fail("Test failed");
    } catch (error) {
      assert.fail(error);
    }
  }, 3000);

  test("always passing test - example C", async () => {
    assert(true);
  }, 3000);

  test("always failing test - same stacktrace 1", async () => {
    try {
      await driver.wait(
        until.elementLocated(
          By.xpath(
            "/hierarchy/common/incorrect/xpath/for/testing"
          )
        ),
        5000
      );
      assert.fail("Test failed");
    } catch (error) {
      assert.fail(error);
    }
  }, 3000);

  test("always failing test - same stacktrace 2", async () => {
    try {
      await driver.wait(
        until.elementLocated(
          By.xpath(
            "/hierarchy/common/incorrect/xpath/for/testing"
          )
        ),
        5000
      );
      assert.fail("Test failed");
    } catch (error) {
      assert.fail(error);
    }
  }, 3000);

  test("always passing test - example D", async () => {
    assert(true);
  }, 3000);

  test("always passing test - example A", async () => {
    assert(true);
  }, 3000);

  test("always passing test - example B", async () => {
    assert(true);
  }, 3000);
});
