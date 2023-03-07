class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst:string, theLast:string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// let's create a new Customer
let myCustomer = new Customer("Dilane", "KAMGA");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
