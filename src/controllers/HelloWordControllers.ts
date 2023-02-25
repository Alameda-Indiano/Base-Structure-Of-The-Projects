import { ICustomRequest, ICustomResponse } from "../interfaces/ICustomRequest";

export interface IReqHelloWord {
    message: string;
};

export interface IResHelloWord {
    message: string;
    id?: string;
};

class HelloWordControllers {

    async getFullHelloWord(req: ICustomRequest<any>, res: ICustomResponse<IResHelloWord>) {
        return res.status(200).json({ message: 'Hello Word!' });
    };

    async createNewHelloWord(req: ICustomRequest<IReqHelloWord>, res: ICustomResponse<IResHelloWord>) {

        const { message } = req.body;

        return res.status(200).json({ message })
    };

    async updateHelloWord(req: ICustomRequest<IReqHelloWord>, res: ICustomResponse<IResHelloWord>) {

        const { id } = req.params;
        const { message } = req.body;

        return res.status(200).json({ id, message });
    };

    async deleteHelloWord(req: ICustomRequest<IReqHelloWord>, res: ICustomResponse<IResHelloWord>) {

        const { id } = req.params;
        const { message } = req.body;

        return res.status(200).json({ id, message });
    };

};

export default new HelloWordControllers();