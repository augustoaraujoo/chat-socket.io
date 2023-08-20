import { serverHttp, PORT } from "./server";
import './websocket'
serverHttp.listen(PORT, () => {
    console.log(`${PORT}`);
});