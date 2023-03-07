class Customer {
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst:string, theLast:string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName
    }

   public get lastName(): string {
        return this._lastName;
    }

   public set lastName(value: string) {
        this._lastName = value;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
}

// let's create a new Customer
let myCustomer = new Customer("Dilane", "KAMGA");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
