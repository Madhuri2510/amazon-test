"use strict";

Feature("Access Product functionality");

Scenario("I navigate to the application", async (I) => {
  I.amOnPage("/");
  I.see("//a[@id='nav-logo-sprites']");
});

Scenario("I type laptop in searchbox",async (I) => {
   I.fillField("//input[@id='twotabsearchtextbox']", "Laptop" );
   I.click("//input[@id='nav-search-submit-button']");
   I.wait(4);
   I.waitForElement("//span[contains(text(),'Results']")
   I.see("//span[contains(text(),'Results']")
});

Scenario("I add filter brand of Dell and HP", async (I) => {
  I.wait(4);
  I.click("//li[@id='p_89/HP']//i[@class='a-icon a-icon-checkbox']");
  I.waitForElement("//span[contains(text(),'Results']")
  I.wait(4);
  I.click("//li[@id='p_89/Dell']//i[@class='a-icon a-icon-checkbox']");
  });

Scenario("I sort by dropdown price high to Low",async (I) => {
  await I.wait(4);
  await I.click("//span[@id='a-autoid-7-announce']");
  await I.wait(2);
  await I.click("//a[@id='s-result-sort-select_2']");
  await I.wait(2);
});

Scenario("I open first search results in new tab", async (I) => {
  await I.wait(2);
  await I.click("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1']");
  await I.wait(2);
});

Scenario("I print the technical details under product information",async (I) => {
 I.wait(2);
 let techDetails = await I.grabTextFrom('li.a-spacing-mini:nth-child(1) > span:nth-child(1)');
 console.log(techDetails);

});
