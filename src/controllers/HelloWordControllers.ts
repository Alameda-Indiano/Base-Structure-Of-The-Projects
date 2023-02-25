import { ICustomRequest } from "../interfaces/ICustomRequest";
import { ICustomResponse } from "../interfaces/ICustomResponse";

export interface IHelloWord {
    id?: string;
    message: string;
};

class HelloWordControllers {

    async getFullHelloWord(req: ICustomRequest<null>, res: ICustomResponse<IHelloWord>) {
        try {

            return res.status(200).json({ message: 'Hello Word!' });
        
        } catch (error) {
            console.log(error);
            return res.status(500);
        };
    };

    async createNewHelloWord(req: ICustomRequest<IHelloWord>, res: ICustomResponse<IHelloWord>) {
        try {

            const { message } = req.body;

            return res.status(200).json({ message })

        } catch (error) {
            console.log(error);
            return res.status(500);
        };
    };

    async updateHelloWord(req: ICustomRequest<IHelloWord>, res: ICustomResponse<IHelloWord>) {
        try {

            const { id } = req.params;
            const { message } = req.body;
    
            return res.status(200).json({ id, message });

        } catch (error) {
            console.log(error);
            return res.status(500);
        };
    };

    async deleteHelloWord(req: ICustomRequest<IHelloWord>, res: ICustomResponse<IHelloWord>) {
        try {
            
            const { id } = req.params;
            const { message } = req.body;
    
            return res.status(200).json({ id, message });

        } catch (error) {
            console.log(error);
            return res.status(500);
        };
    };

};

export default new HelloWordControllers();