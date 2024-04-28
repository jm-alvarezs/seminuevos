import { CarData } from "../types";
import api from "./api";

/**
 * Funciones para interactuar con endpoint "/cars"
 * Creamos una función para validar datos enviados
 */

const route = "/cars"

const CarsService = {
    postCar: (data: CarData) => api.post(route, { ...data })
}
export default CarsService;