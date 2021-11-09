import axios, { Axios } from "axios";
import { OrderRepository } from "../repositories/order-repository";


export class OrderService implements OrderRepository {


    http_client: Axios;

    constructor() {

        this.http_client = axios;

    }
    async getInvoice(id: string): Promise<any> {

        try {

            const response = await this.http_client.get(`https://portal.lavital.co/logistica/v1test/factura.php?id=${id}`);
            console.log(response.data);
            return response.data;

        } catch (error) {
            console.error("Cors", error);
        }

    }
    async getItems(id_bill: string): Promise<any> {

        try {

            const response = await this.http_client.get(`https://portal.lavital.co/logistica/v1test/items.php?id=${id_bill}`);
            console.log(response.data);
            return response.data;

        } catch (error) {
            console.error("ERROR ITEMS", error);

        }
    }


}