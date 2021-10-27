import axios from "axios";

const url = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default url;