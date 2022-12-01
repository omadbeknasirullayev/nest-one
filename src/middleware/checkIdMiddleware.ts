import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { CompanyService } from "src/company/company.service";

@Injectable() 
export class CheckIdMiddleware implements NestMiddleware {
    constructor(private readonly companyService: CompanyService) {}
    async use(req: Request, res: Response, next: NextFunction) {
        const data = await this.companyService.getOne(req.body.company_id)
        if (!data) {
            return res.json({message: 'bunday company yoq'})
        }
        next()
    }
}