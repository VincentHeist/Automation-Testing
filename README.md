SauceDemo Automation Assignment

Technology: JavaScript + Playwright + Allure
Website Link: https://www.saucedemo.com/

Project Overview

This project contains automated UI test scenarios for the SauceDemo website using Playwright with JavaScript.
All test cases are executed using Playwright Test Runner and generates reports using Allure.

Test Scenarios

Q1 – Locked User Login

Login with locked_out_user

Verify the error message is displayed

Q2 – Standard User Purchase Flow

Login with standard_user

Reset app state

Add three items to cart

Proceed to checkout

Verify product names and total price

Complete purchase

Verify success message

Reset app state and logout

Q3 – Performance User Scenario

Login with performance_glitch_user

Reset app state

Sort products (Name: Z to A)

Add first product to cart

Proceed to checkout

Verify product name and total price

Complete purchase

Verify success message

Reset app state and logout

Prerequisites

Install the following:

Node.js (v18 or higher)

Git

Allure Command Line

Check installations:

node -v

npm -v

allure --version

Installation Steps

1. Clone the repository

   git clone <your-repository-url>

   cd saucedemo-playwright

2. Install dependencies

   npm install

3. Install Playwright browsers

   npx playwright install

Running Tests

Run all tests

npx playwright test

Run individual tests

Locked user test

npx playwright test tests/lockedUser.spec.js

Standard user test

npx playwright test tests/standardUser.spec.js

Performance user test

npx playwright test tests/performanceUser.spec.js

Generate Allure Report

After running tests:

allure generate ./allure-results --clean

allure open
