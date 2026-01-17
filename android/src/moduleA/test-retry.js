const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("BStack tests - Module A", () => {
  let driver;
  jest.retryTimes(2, {retryImmediately: true});

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
