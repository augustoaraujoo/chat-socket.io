"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var createMessage_routes_1 = require("./createMessage.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/", createMessage_routes_1.msgRouter);
//# sourceMappingURL=index.js.map