import { NextFunction, Request, Response } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
        const now = new Date()
        const method = req.method
        const url = req.url
        console.log(now, method, url)
        next()
    }