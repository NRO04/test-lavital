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
            return response.data;

        } catch (error) {
            console.error("Cors", error);
        }

    }
    async getItems(id_bill: string): Promise<any> {

        try {

            const response = await this.http_client.get(`https://portal.lavital.co/logistica/v1test/items.php?id=${id_bill}`);
            return response.data;

        } catch (error) {
            console.error("ERROR ITEMS", error);

        }
    }


    async createGuide(guideForm: any): Promise<any> {

        try {

            const response = await this.http_client.post(`http://iot.lavital.co/v1test/guia.php`,
                {
                    ...guideForm, headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Access-Control-Allow-Origin': '*'
                    },
                });
            return response.data;
        } catch (error) {
            console.error("ERROR CREATE GUIDE", error);
        }

    }


}