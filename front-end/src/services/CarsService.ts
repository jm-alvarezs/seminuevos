import { CarData } from "../types";
import api from "./api";

const CarsService = {
    postCar: (data: CarData) => api.post("/", { ...data })
}
export default CarsService;