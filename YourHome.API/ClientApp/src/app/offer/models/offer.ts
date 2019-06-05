import { Location, EMPTY_LOCATION, NewLocation } from "./location";

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
    state: number;
}

export class NewOffer {
    title: string;
    description: string;
    price: number;
    email: string;
    location: NewLocation;
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
  area: null,
  state: 0
}


export const EMPTY_NEW_OFFER = {
  title: "",
  description: "",
  price: null,
  email: "",
  location: EMPTY_LOCATION,
  images: [],
  area: null,
  state: 0
}
