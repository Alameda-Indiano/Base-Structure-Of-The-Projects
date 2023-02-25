import { Request, Response } from "express";
import { Send } from "express-serve-static-core";

export interface ICustomRequest<T> extends Request {
    body: T,
    params: {
        id?: string
    }
};

export interface ICustomResponse<T> extends Response {
    /** 
     * @property 200  OK 
     * @property 201  Created 
     * @property 202  Accepted 
     * @property 304  Not Modified 
     * @property 400  Bad Request 
     * @property 401  Unauthorized 
     * @property 404  Not Found 
     * @property 500  Internal Server Error 
     * @property 502  Bad Gateway 
     * @property 504  Gateway Time-out */
    status: (code: 200 | 201 | 202 | 304 | 400 | 401 | 404 | 500 | 502 | 504) => this;
    json: Send<T, this>;
};
