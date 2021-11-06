export interface OrderRepository {


    getInvoice(id: string): Promise<any>;


}