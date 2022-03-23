import Koa from "koa";
import mount from "koa-mount";
import swagger from "swagger2";
import swaggerKoa from "swagger2-koa";

const swaggerDocument = swagger.loadDocumentSync("api.yaml");

const health = new Koa();

health.use(async (ctx, next) => {
  ctx.body = {
    status: "UP",
  };
  await next();
});

const app = new Koa();
app.use(mount("/health", health));
app.use(swaggerKoa.ui(swaggerDocument, "/api"));

app.listen(3000);
console.log("API started");
