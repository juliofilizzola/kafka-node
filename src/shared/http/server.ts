import constants from "../utils/constants";
import app from "./app/app";

const port = constants.port
const message = `init port: ${port}`;

app.listen(port, () => console.log(message));
