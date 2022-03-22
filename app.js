import Koa from "koa";
import { koaSwagger } from "koa2-swagger-ui";
import path from "path";
import serve from "koa-static";
import mount from "koa-mount";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const api_doc = new Koa();
api_doc.use(serve(path.join(__dirname, "/api")));

const swagger = new Koa();
swagger.use(
  koaSwagger({
    routePrefix: "/", // host at /swagger instead of default /docs
    swaggerOptions: {
      url: "http://localhost:3000/api-doc/swagger.json", // example path to json
    },
  })
);

const app = new Koa();
app.use(mount("/api-doc", api_doc));
app.use(mount("/swagger", swagger));

app.listen(3000);
