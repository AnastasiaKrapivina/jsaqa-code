const { test, expect } = require("@playwright/test");

import {
  validEmail,
  validPassword,
  invalidEmail,
  invalidPassword,
} from "../user.js";

test.describe("Authorization", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://netology.ru/");
    await expect(page).toHaveTitle("Нетология — обучение современным профессиям онлайн");
    await page.screenshot({ path: "screenshot/screenshotOne.png" });
    await page.getByRole("link", { name: "Войти" }).click();
    await page.screenshot({ path: "screenshot/screenshotTwo.png" });
  });

  test("Successful authorization", async ({ page }) => {
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(validEmail);
    await page.screenshot({ path: "screenshot/screenshotThree.png" });
    await page.getByPlaceholder("Пароль").click();
    await page.getByPlaceholder("Пароль").fill(validPassword);
    await page.screenshot({ path: "screenshot/screenshotFour.png" });
    await page.getByPlaceholder("Пароль").click();
    await page.getByTestId("login-submit-btn").click();
    await page.screenshot({ path: "screenshot/screenshotFive.png" });
    await expect(page).toHaveURL("https://netology.ru/profile"); 
  });

  test("Unsuccessful authorization", async ({ page }) => {
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(invalidEmail);
    await page.screenshot({ path: "screenshot/screenshotSix.png" });
    await page.getByPlaceholder("Пароль").click();
    await page.getByPlaceholder("Пароль").fill(invalidPassword);
    await page.screenshot({ path: "screenshot/screenshotSeven.png" });
    await page.getByPlaceholder("Пароль").click();
    await page.getByTestId("login-submit-btn").click();
    await page.screenshot({ path: "screenshot/screenshotEight.png" });
    await expect(page.getByTestId("login-error-hint")).toHaveText(
      "Вы ввели неправильно логин или пароль"
    );
  });
});
