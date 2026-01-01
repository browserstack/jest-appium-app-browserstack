const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("BStack tests - Module C", () => {
  let driver;

  beforeAll(async () => {
    driver = new Builder()
      .usingServer(`http://127.0.0.1:4723/wd/hub`)
      .build();

    await driver
        .wait(
          until.elementLocated(
            By.xpath(
              "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.TextView"
            )
          ),
          30000
        )
        .click();
  });

  afterAll(async () => {
    await driver.quit();
  })

  test("flaky test - valid v/s invalid search string", async () => {
    var insertTextSelector = await driver.wait(
        until.elementLocated(
          By.xpath(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.LinearLayout/android.support.v7.widget.LinearLayoutCompat/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.AutoCompleteTextView"
          ),
          30000
        )
      );

      let searchStr = Math.random() > 0.5 ? "BrowserStack" : "dslkfjkjlsdjkfkjfls";

      await insertTextSelector.sendKeys(searchStr);
      await driver.sleep(5000);

      var allProductsName = await driver.findElements(
        By.xpath(
          "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.LinearLayout"
        )
      );

      assert(allProductsName.length > 0, "No search results found");
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
  }, 30000);

  test("always passing test - example C", async () => {
    assert(true);
  }, 30000);

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
  }, 30000);

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
  }, 30000);

  test("always passing test - example D", async () => {
    assert(true);
  }, 30000);

  test("always passing test - example A", async () => {
    assert(true);
  }, 30000);

  describe("BStack tests - Module C", () => {
    jest.retryTimes(2, {retryImmediately: true});
    test("Test with framework-level retry - 2 retries configured", async () => {
        const randomOutcome = Math.random() > 0.7;
        if (!randomOutcome) {
            throw new Error("Test failed, retrying...");
        }
    }, 30000);

    test("Another test with framework-level retry - 2 retries configured", async () => {
        const randomOutcome = Math.random() > 0.7;
        if (!randomOutcome) {
            throw new Error("Test failed, retrying...");
        }
    }, 30000);
  });

  test("always passing test - example B", async () => {
    assert(true);
  }, 30000);
});
