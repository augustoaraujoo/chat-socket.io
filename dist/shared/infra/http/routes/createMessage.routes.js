"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgRouter = void 0;
var express_1 = require("express");
var CreateMsgController_1 = require("modules/user/useCases/createMsg/CreateMsgController");
var msgRouter = (0, express_1.Router)();
exports.msgRouter = msgRouter;
var createMessageController = new CreateMsgController_1.CreateMsgController();
msgRouter.post('/create', createMessageController.handle);
//# sourceMappingURL=createMessage.routes.js.map