
import RegisterSupplierRepository from "./domain/repository/register-supplier-repository";

type SupplierInfo = {

    [supplier_name: string]: RegisterSupplierRepository;
}


export class Providers {

    registerSupplier: SupplierInfo = {};

    constructor() {

    }

    private init() {

    }

    register(registerSupplier: SupplierInfo): void {
        this.registerSupplier = registerSupplier;
        console.log("Register Supplier", this.registerSupplier);

    }

    providingService(supplier_name: string): RegisterSupplierRepository {
        return this.registerSupplier[supplier_name];
    }

    getSupplier(supplier_name: string): RegisterSupplierRepository {
        return this.registerSupplier[supplier_name];
    }

}


