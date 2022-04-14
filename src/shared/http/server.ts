import api from "./api/api";
import constants from '../utils/constants';

const message = 'init port %';

api.listen(constants.port, () => console.log(message));
