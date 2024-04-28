import axios from "axios";

/**
 * Creamos un objeto global para poder agregar headers globales
 */
const api = axios.create({
    baseURL: "http://localhost:4000"
});

export default api;