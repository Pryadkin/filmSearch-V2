import { MoviesModule } from './movies/movies.module'
import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/movies', {
            connectionName: 'movies',
        }),
        MoviesModule,
    ],
})
export class AppModule {}
