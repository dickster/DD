export class Address {
    street:string;
    num:number;
    city:string;
    province:string;
    country:string;
    postalCode:string;
    // whatever fields google provides.
    // need FullAddress extends Address { lot, block, plan, parcel etc... }
    //    for more detailed addresses.
}
