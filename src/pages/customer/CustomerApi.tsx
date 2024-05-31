import Customer from "./Customer";

export function searchCustomer () {

    if(!localStorage['customers']){
        localStorage['customers'] = '[]'
    }

    let customers = localStorage['customers'];
    customers = JSON.parse(customers)

    return customers;
}

export function removeCustomer (id: string) {
    let customers = searchCustomer();
    let customersEdit = customers.filter((c:Customer) => c.id !==id)
    localStorage['customers'] = JSON.stringify(customersEdit);
}

export function saveCustomer (customer: Customer) {
    let customers = searchCustomer();
    if(customer.id){
        let indice = customers.findIndex((c: Customer) => c.id == customer.id);
        customers[indice] = customer;
    }else {
        customer.id = Math.round(Math.random() * 10000).toString();
        customers.push(customer);
    }

    localStorage['customers'] = JSON.stringify(customers);

}

export function searchCustomerById (id:string) {
    let customer = searchCustomer();
    customer = customer.find((c:Customer) => id == c.id)
    return customer;
}