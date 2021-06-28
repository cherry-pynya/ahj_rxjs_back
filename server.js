const http = require("http");
const Koa = require("koa");
const Router = require("@koa/router");
const koaBody = require("koa-body");
const cors = require("@koa/cors");
const Faker = require('./fake');

const app = new Koa();
const faker = new Faker();
faker.init();

app.use(
  cors({
    origin: "*",
    credentials: true,
    "Access-Control-Allow-Origin": true,
    allowMethods: ["GET"],
  })
);

app.use(koaBody({ json: true, text: true, urlencoded: true }));

const router = new Router();

router.get("/messages/unread", async (ctx) => {
  console.log(ctx.request);
  ctx.response.body = faker.sendData();
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log("server started"));
