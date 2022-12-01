import { Injectable } from "@nestjs/common";

@Injectable({})

export class AppService {
    getAll() {
        return '<h1> hali bor </h1>'
    }
}