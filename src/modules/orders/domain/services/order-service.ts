import axios, { Axios } from "axios";
import { OrderRepository } from "../repositories/order-repository";



export class OrderService implements OrderRepository {


    http_client: any;

    constructor() {

        this.http_client = axios;

    }
    async getInvoice(id: string): Promise<any> {

        try {

            const response = await this.http_client.get(`https://portal.lavital.co/logistica/v1test/factura.php?id=${id}`);
            return response.data;

        } catch (error) {
            console.error("Cors", error);
        }

    }

}