import axios from 'axios';
import {API_ENDPOINT_PREFIX} from "../constants/api.constants";

export default axios.create({
    baseURL: API_ENDPOINT_PREFIX()
});