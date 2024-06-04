import Supplier from "./Supplier";

export async function searchSupplier () {

    let url = import.meta.env.VITE_API_URL + "suppliers"

    let response = await fetch(url, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        }
    });

    return await response.json();

}

export async function removeSupplier (id: string) {
    let url = import.meta.env.VITE_API_URL + "suppliers/" + id

    await fetch(url, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        }
    });

}

export async function saveSupplier (supplier: Supplier) {
    let suppliers = await searchSupplier();
    if(supplier.id){
        let url = import.meta.env.VITE_API_URL + "suppliers/" + supplier.id

        fetch(url, {
            "method": "PUT",
            "body": JSON.stringify(supplier),
            "headers": {
                "Content-Type": "application/json"
            }
        });
    }else {
        let url = import.meta.env.VITE_API_URL + "suppliers"

        fetch(url, {
            "method": "POST",
            "body": JSON.stringify(supplier),
            "headers": {
                "Content-Type": "application/json"
            }
        });
    }

    localStorage['suppliers'] = JSON.stringify(suppliers);

}

export async function searchSupplierById (id:string) {
    let url = import.meta.env.VITE_API_URL + "suppliers/" + id
    console.log(url);
    

    let response = await fetch(url, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
}