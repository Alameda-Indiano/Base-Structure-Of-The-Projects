import { Request, Response } from "express";

export interface ICustomRequest<T> extends Request {
    body: T,
    params: {
        id?: string
    }
}

export interface ICustomResponse extends Response {};