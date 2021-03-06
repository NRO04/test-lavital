
import { SupplierInfo } from "./domain/models/types/supplier/supplier-info-type";
import ProviderRepository from "./domain/repository/provider-repository";
import RegisterSupplierRepository from "./domain/repository/register-supplier-repository";

export class Providers implements ProviderRepository {

    registerSupplier: SupplierInfo = {};

    constructor(registerSupplier: SupplierInfo) {

        this.registerSupplier = registerSupplier;
    }

    providingService(supplier_name: string): RegisterSupplierRepository {
        return this.registerSupplier[supplier_name];
    }

}



