import { HttpAdapterHost, NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { AllExceptionsFilter } from "./errors/all-exeption.filters"
import { HttpExceptionFilter } from "./errors/http-exeption.filter"
import { logger } from "./middleware/loggerFunctionMiddleware"

const start = async () => {
    try {
        const PORT = process.env.PORT || 3003
        const app = await NestFactory.create(AppModule)
        // app.use(logger)
        // app.useGlobalFilters(new HttpExceptionFilter())

        const adapterHost = app.get(HttpAdapterHost)
        app.useGlobalFilters(new AllExceptionsFilter(adapterHost))

        await app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
    
start()