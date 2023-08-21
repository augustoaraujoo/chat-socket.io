"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnectionRouter = void 0;
var express_1 = require("express");
var CreateConnectionController_1 = require("modules/user/useCases/createMsg/CreateConnectionController");
var createConnectionRouter = (0, express_1.Router)();
exports.createConnectionRouter = createConnectionRouter;
var createConnectionController = new CreateConnectionController_1.CreateConnectionController();
createConnectionRouter.post('/create', createConnectionController.handle);
//# sourceMappingURL=createConnection.routes.js.map