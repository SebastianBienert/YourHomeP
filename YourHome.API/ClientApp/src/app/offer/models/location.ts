export interface Location {
    city: string;
    district: string;
    voivodeship: string;
    houseNumber: string;
    apartmentNumber: string;
    coordinates : Coordinates | null;
}

export const EMPTY_LOCATION = {
    city: "",
    district: "",
    voivodeship: "",
    houseNumber: "",
    apartmentNumber: "",
    coordinates : null
}

export interface Coordinates{
    latitude : number,
    longitude : number
}