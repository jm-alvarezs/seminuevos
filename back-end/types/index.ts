/**
 * Representa un elemento en DOM para input de usuario
 */
export interface ScrapeFormElement {
    selector: string;
    value: string;
}

export interface ScrapeFormSubmit {
    selector: string;
}

export interface ScrapeForm {
    inputs: Array<ScrapeFormElement>;
    submit: ScrapeFormSubmit;
}

export interface CarData {
    types: VehicleType,
    brands: string,
    models: string,
    subtypes: string,
    year: string,
    mileage: number,
    mileageType: MileageType,
}

export enum VehicleType {
    autos = "autos"
}

export enum MileageType {
    kms =  "kms.",
    millas = "millas",
    horas = "horas"
}

export enum Negotiable {
    fijo = "fijo",
    negociable = "negociable"
}

export interface Location {
    provinces: string;
    cities: string;
}

/**
 * CarListing representa el anuncio, se compone de un auto y ubicación
 */
export interface CarListing {
    phone: string;
    price: number;
    pictures: Array<string>;
    description: string;
    negotiable: Negotiable;
    location: Location;
    car: CarData;
}