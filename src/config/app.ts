import RegisterSupplier from "../provider/domain/services/register-supplier";
import {OrderRepository} from "../modules/orders/domain/repositories/order-repository";
import {OrderService} from "../modules/orders/domain/services/order-service";
import {SupplierInfo} from "../provider/domain/models/types/supplier/supplier-info-type";

export const SUPPLIERS: SupplierInfo = {
    "ORDER-SERVICE": new RegisterSupplier<OrderRepository>({
        config: {
            injector: new OrderService()
        }
    }),
}