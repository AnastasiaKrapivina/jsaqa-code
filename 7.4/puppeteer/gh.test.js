let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("GithubTeam page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  }, 16000);

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  }, 11000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 4000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) =>
      link.textContent.trim()
    );
    expect(actual).toContain("Get started with Team");
  }, 6000);
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com");
  }, 16000);

  test("The h1 header content on SignIn'", async () => {
    const signIn = await page.waitForSelector(
      "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > div > div > a"
    );
    await signIn.click();
    await page.waitForSelector("h1");
    const title1 = await page.title();
    expect(title1).toEqual("Sign in to GitHub · GitHub");
  }, 15000);

  test("The h1 header content on SignUp'", async () => {
    const signUp = await page.waitForSelector(
      "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > div > a"
    );
    await signUp.click();
    const title1 = "h1";
    await page.waitForSelector(title1, {
      visible: true,
    });
    const actual = await page.$eval(title1, (link) => link.textContent.trim());
    expect(actual).toContain("Welcome to GitHub! Let's begin the adventure");
  }, 25000);

  test("The h1 header content on Pricing'", async () => {
    const signUp = await page.waitForSelector(
      "body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(4) > a"
    );
    await signUp.click();
    const title1 = "h2.h2-mktg";
    await page.waitForSelector(title1, {
      visible: true,
    });
    const actual = await page.$eval(title1, (link) => link.textContent.trim());
    expect(actual).toContain("Additional add-ons");
  }, 15000);
});
