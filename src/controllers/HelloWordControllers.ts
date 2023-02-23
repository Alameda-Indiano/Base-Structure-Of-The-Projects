import { ICustomRequest, ICustomResponse } from "../interfaces/ICustomRequest";

export interface INewHelloWord {
    message: string;
};

class HelloWordControllers {

    async getFullHelloWord(req: ICustomRequest<any>, res: ICustomResponse) {
        return res.status(200).json({ message: 'Hello Word!' });
    };

    async createNewHelloWord(req: ICustomRequest<INewHelloWord>, res: ICustomResponse) {

        const { message } = req.body;

        return res.status(200).json({ message });
    };

    async updateHelloWord(req: ICustomRequest<INewHelloWord>, res: ICustomResponse) {

        const { id } = req.params;
        const { message } = req.body;

        return res.status(200).json({ id, message });
    };

    async deleteHelloWord(req: ICustomRequest<INewHelloWord>, res: ICustomResponse) {

        const { id } = req.params;
        const { message } = req.body;

        return res.status(200).json({ id, message });
    };

};

export default new HelloWordControllers();