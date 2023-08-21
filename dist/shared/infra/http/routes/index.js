"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var createConnection_routes_1 = require("./createConnection.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/", createConnection_routes_1.createConnectionRouter);
//# sourceMappingURL=index.js.map