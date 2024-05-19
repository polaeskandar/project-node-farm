const { productsOverviewPages, overviewHTML } = require("./render");

const index = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(overviewHTML);
};

const productOverview = (req, res) => {
  const url = new URL(`http://localhost:3000${req.url}`);
  const page = productsOverviewPages.find((page) => page.id == url.searchParams.get("id"));

  if (page !== undefined) {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(page.template);
  } else return displayNotFound(req, res);
};

const sendJsonData = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(data);
};

const displayNotFound = (req, res) => {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("Page not found!");
};

module.exports = { index, productOverview, sendJsonData, displayNotFound };
