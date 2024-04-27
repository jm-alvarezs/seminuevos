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

export interface CarListing {
    phone: string;
    price: number;
    negotiable: Negotiable;
    location: Location;
    car: CarData;
}