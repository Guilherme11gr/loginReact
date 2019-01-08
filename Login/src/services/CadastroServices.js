import { HttpServices } from "./httpServices";

export class CadastroServices {
    static async create(atendente) {
        const response = {};
        const res = await HttpServices.post('https://pimquatro.herokuapp.com/api/atendentes', atendente);
        console.log(res);
        if(res.ok){ 
            response.msg = res.msg;
            response.status = res.ok;
        } else {
            response.msg = res.msg;
            response.status = res.ok;
        }
        return response;
    }
}