const { Builder, By, Key, until } = require("selenium-webdriver");

describe("Search Wikipedia Functionality", () => {
  let driver;

  beforeAll(() => {
    driver = new Builder()
      .usingServer(`http://127.0.0.1:4723/wd/hub`)
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  })

  test("should search Wikipedia", async () => {
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
    var insertTextSelector = await driver.wait(
      until.elementLocated(
        By.xpath(
          "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.LinearLayout/android.support.v7.widget.LinearLayoutCompat/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.AutoCompleteTextView"
        ),
        30000
      )
    );
    await insertTextSelector.sendKeys("BrowserStack");
    await driver.sleep(5000);

    var allProductsName = await driver.findElements(
      By.xpath(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.LinearLayout"
      )
    );
    expect(allProductsName.length > 0).toBeTruthy();
  }, 1000000);
});
