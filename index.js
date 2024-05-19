const http = require("http");

const { router } = require("./router");
const { displayNotFound } = require("./controller");

const server = (req, res) => {
  const url = req.url;
  const parsedUrl = new URL(`http://localhost:3000${url}`);
  const method = req.method;
  const route = router.find((route) => route.path === parsedUrl.pathname && route.method === method);

  if (route !== undefined) return route.func(req, res);
  else return displayNotFound(req, res);
};

http.createServer(server).listen(3000, () => console.log("Server listening on port 3000"));
