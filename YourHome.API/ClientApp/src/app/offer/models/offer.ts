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
    state: number;
}

export class NewOffer {
    id: string;
    title: string;
    description: string;
    price: number;
    creationDate: Date;
    email: string;
    location: Location;
    area: number;
    state: number;
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
