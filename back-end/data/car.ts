import { MileageType, Negotiable, VehicleType } from "../types";

const car_data = {
  types: VehicleType.autos,
  brands: "acura",
  models: "ilx",
  subtypes: "sedan",
  year: "2018",
  mileage: 20000,
  mileageType: MileageType.kms,
};

export const car_listing = {
  phone: "8184642850",
  price: 450000,
  location: {
    provinces: "nuevo leon",
    cities: "monterrey",
  },
  pictures: [`${__dirname}/frente.jpg`, `${__dirname}/perfil.jpg`, `${__dirname}/atras.jpg`],
  description: "Descripcion prueba",
  negotiable: Negotiable.negociable,
  car: car_data,
};
