import api from "./api/api";
import constants from '../utils/constants';
const port = constants.port
const message = `init port: ${port}`;

api.listen(port, () => console.log(message));
