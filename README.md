# simple swagger

简单的技术原型，koa 下，使用本地 YAML，为 koa 下的 restful api 提供 swagger ui 操作界面。

## 怎么使用

```
npm i
node app.js
```

访问： http://localhost:3000/api

在 web 界面中对 /health 执行 restful 操作

## 历史

- v0.2.0 使用本地 yaml 文件，对 koa 中的/health 提供 swagger 界面操作
- v0.1.0 使用本地 json 文件(petstore)
