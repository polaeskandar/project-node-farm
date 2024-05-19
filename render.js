const fs = require("fs");

const data = fs.readFileSync(__dirname + "/dev-data/data.json", "utf-8");
const dataJson = JSON.parse(data);
const productsOverviewTemplate = fs.readFileSync(__dirname + "/templates/overview.template.html", "utf-8");
const productCardTemplate = fs.readFileSync(__dirname + "/templates/card.template.html", "utf-8");
const productOverviewTemplate = fs.readFileSync(__dirname + "/templates/product.template.html", "utf-8");

const cardsHTML = dataJson.map((el) =>
  productCardTemplate
    .replace(/{%IMAGE%}/gi, el.image)
    .replace(/{%PRODUCT_NAME%}/gi, el.productName)
    .replace(/{%QUANTITY%}/gi, el.quantity)
    .replace(/{%PRICE%}/gi, el.price)
    .replace(/{%NOT_ORGANIC%}/gi, !el.organic ? "not-organic" : null)
    .replace(/{%PRODUCT_ID%}/gi, el.id)
);

const overviewHTML = productsOverviewTemplate.replace(/{%PRODUCTS%}/gi, cardsHTML.join(""));

const productsOverviewPages = dataJson.map((el) => {
  return {
    id: el.id,
    template: productOverviewTemplate
      .replace(/{%IMAGE%}/gi, el.image)
      .replace(/{%ORIGIN%}/gi, el.from)
      .replace(/{%NUTRIENTS%}/gi, el.nutrients)
      .replace(/{%DESCRIPTION%}/gi, el.description)
      .replace(/{%PRODUCT_NAME%}/gi, el.productName)
      .replace(/{%QUANTITY%}/gi, el.quantity)
      .replace(/{%PRICE%}/gi, el.price)
      .replace(/{%NOT_ORGANIC%}/gi, !el.organic ? "not-organic" : null)
      .replace(/{%PRODUCT_ID%}/gi, el.id),
  };
});

module.exports = { overviewHTML, productsOverviewPages };
