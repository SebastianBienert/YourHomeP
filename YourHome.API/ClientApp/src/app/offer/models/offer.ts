import { Location } from "./Location";

export class Offer {
    id: string;
    title: string;
    description: string;
    price: number;
    creationDate: Date;
    email: string;
    location: Location;
}