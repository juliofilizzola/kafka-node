import api from "./http/api/api";
import constants from './utils/constants';

const message = 'init port %', constants.port;

api.listen(constants.port, () => console.log(message));
