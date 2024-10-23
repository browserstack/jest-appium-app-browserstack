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
          '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.Button'
        )
      ), 30000
    ).click();
    var textElement = await driver.wait(
      until.elementLocated(
        By.xpath(
          '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.TextView'
        ), 30000
      )
    ).getText();
    expect(textElement).toContain('The active connection is wifi');
    expect(textElement).toContain('Up and running');
  }, 10000000);
});
