export class SearchParameters {
    searchPhrase: string = "";
    minPrice?: number;
    maxPrice?: number;
    market?: string = Market.Both.toLocaleString();
    offerType: string = OfferType.Sale.toLocaleString();
    minRoomCount?: number
    maxRoomCount?: number;
    minArea?: number;
    maxArea?: number;
    page: number = 1;
}

export enum Market{
    Primary = 0,
    Secondary = 1,
    Both = 2
}

export enum OfferType{
    Sale = 0,
    Rent = 1
}