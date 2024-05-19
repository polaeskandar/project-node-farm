const { index, productOverview, sendJsonData } = require("./controller");

const router = [
  { path: "/", method: "GET", func: (req, res) => index(req, res) },
  { path: "/overview", method: "GET", func: (req, res) => index(req, res) },
  { path: "/product", method: "GET", func: (req, res) => productOverview(req, res) },
  { path: "/api", method: "GET", func: (req, res) => sendJsonData(req, res) },
];

module.exports = { router };
