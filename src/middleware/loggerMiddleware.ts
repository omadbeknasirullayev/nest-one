import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { CompanyService } from "src/company/company.service";

@Injectable()

export class LoggerMiddleware implements NestMiddleware {
    constructor(private readonly companyService: CompanyService) {}
    async use(req: Request, res: Response, next: NextFunction) {
        const now = new Date()
        const method = req.method
        const url = req.url
        console.log(now, method, url)
        next()
    }
}