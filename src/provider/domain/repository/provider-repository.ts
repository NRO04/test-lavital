import { SupplierInfo } from "../models/types/supplier/supplier-info-type";
import RegisterSupplierRepository from "./register-supplier-repository";

export default interface ProviderRepository {

    //register(registerSupplier: SupplierInfo): void;

    providingService(supplier_name: string): RegisterSupplierRepository;
    //getSupplierInfo(supplierId: string): RegisterSupplierRepository;

}


