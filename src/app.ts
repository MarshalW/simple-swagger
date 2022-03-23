import Koa from "koa";
import mount from "koa-mount";
import * as swagger from "swagger2";
import { ui } from "swagger2-koa";

const swaggerDocument = swagger.loadDocumentSync(`${__dirname}/api.yaml`);

const health = new Koa();
health.use(async (ctx, next) => {
  ctx.body = {
    status: "UP",
  };
  await next();
});

const app = new Koa();
app.use(mount("/health", health));
app.use(ui(swaggerDocument as any, "/api"));

app.listen(3000);
console.log("API started");
