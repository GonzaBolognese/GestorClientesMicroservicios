import Customer from "./Customer";

export async function searchCustomer () {

    let url = import.meta.env.VITE_API_URL + "customers"

    let response = await fetch(url, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        }
    });

    return await response.json();

}

export async function removeCustomer (id: string) {
    let url = import.meta.env.VITE_API_URL + "customers/" + id

    await fetch(url, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        }
    });

}

export async function saveCustomer (customer: Customer) {
    let customers = await searchCustomer();
    if(customer.id){
        let url = import.meta.env.VITE_API_URL + "customers/" + customer.id

        fetch(url, {
            "method": "PUT",
            "body": JSON.stringify(customer),
            "headers": {
                "Content-Type": "application/json"
            }
        });
    }else {
        let url = import.meta.env.VITE_API_URL + "customers"

        fetch(url, {
            "method": "POST",
            "body": JSON.stringify(customer),
            "headers": {
                "Content-Type": "application/json"
            }
        });
    }

    localStorage['customers'] = JSON.stringify(customers);

}

export async function searchCustomerById (id:string) {
    let url = import.meta.env.VITE_API_URL + "customers/" + id
    console.log(url);
    

    let response = await fetch(url, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
}