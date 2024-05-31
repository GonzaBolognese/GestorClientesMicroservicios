import Vendor from "./Vendor";

export function searchVendor () {

    if(!localStorage['vendors']){
        localStorage['vendors'] = '[]'
    }

    let vendors = localStorage['vendors'];
    vendors = JSON.parse(vendors)

    return vendors;
}

export function removeVendor (id: string) {
    let vendors = searchVendor();
    let vendorsEdit = vendors.filter((c:Vendor) => c.id !==id)
    localStorage['vendors'] = JSON.stringify(vendorsEdit);
}

export function saveVendor (vendor: Vendor) {
    let vendors = searchVendor();
    if(vendor.id){
        let indice = vendors.findIndex((c: Vendor) => c.id == vendor.id);
        vendors[indice] = vendor;
    }else {
        vendor.id = Math.round(Math.random() * 10000).toString();
        vendors.push(vendor);
    }

    localStorage['vendors'] = JSON.stringify(vendors);

}

export function searchVendorById (id:string) {
    let vendor = searchVendor();
    vendor = vendor.find((c:Vendor) => id == c.id)
    return vendor;
}