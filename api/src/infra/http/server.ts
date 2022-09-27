import { serverHttp } from "./http"
import "./websocket"

const PORT = 8080

serverHttp.listen(PORT, () => console.log(`Running on ${PORT}`))