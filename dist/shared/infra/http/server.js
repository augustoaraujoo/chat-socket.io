"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.io = exports.serverHttp = void 0;
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var path_1 = __importDefault(require("path"));
var socket_io_1 = require("socket.io");
var app = (0, express_1.default)();
var PORT = 3005;
exports.PORT = PORT;
app.use(express_1.default.static(path_1.default.join(__dirname, '..', "public")));
var serverHttp = http_1.default.createServer(app);
exports.serverHttp = serverHttp;
var io = new socket_io_1.Server(serverHttp, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    }
});
exports.io = io;
//# sourceMappingURL=server.js.map