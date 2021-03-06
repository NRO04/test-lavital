export interface OrderRepository {

    getInvoice(id: string): Promise<any>;

    getItems(id_bill: string): Promise<any>

    createGuide(guideForm: any): Promise<any>;
}