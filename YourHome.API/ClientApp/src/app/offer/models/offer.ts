import { Location, EMPTY_LOCATION } from "./location";

export class Offer {
    id: string;
    title: string;
    description: string;
    price: number;
    creationDate: Date;
    email: string;
    location: Location;
    images: string[];
    area: number;
}

export const EMPTY_OFFER = {
    id: "",
    title: "",
    description: "",
    price: null,
    creationDate: null,
    email: "",
    location: EMPTY_LOCATION,
    images: [],
    area: null
}