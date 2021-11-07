import { InjectableService } from "../models/injectable-service";
import RegisterSupplierRepository from "../repository/register-supplier-repository";

export default class RegisterSupplier<DEPENDENCY> implements RegisterSupplierRepository {

    service: any;

    constructor(service: InjectableService<DEPENDENCY>) {

        this.service = service.config.injector;
    }

    execute(): DEPENDENCY {
        return this.service;
    }

}
    /*

private supplierRepository: SupplierRepository;

constructor(supplierRepository: SupplierRepository) {
this.supplierRepository = supplierRepository;
}

async execute(supplier: Supplier): Promise<Supplier> {
const supplierExists = await this.supplierRepository.findByCnpj(supplier.cnpj);

if (supplierExists) {
throw new Error('Supplier already exists');
}

return this.supplierRepository.save(supplier);
}
*/
