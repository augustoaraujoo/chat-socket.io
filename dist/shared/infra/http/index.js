"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
require("./websocket");
server_1.serverHttp.listen(server_1.PORT, function () {
    console.log("".concat(server_1.PORT));
});
//# sourceMappingURL=index.js.map