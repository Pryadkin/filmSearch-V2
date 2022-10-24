import { MoviesService } from './movies.service'
import { MoviesController } from './movies.controller'
import { Movie, MovieSchema } from './schemas/movie.schema'
import { Module } from "@nestjs/common"
import {MongooseModule} from '@nestjs/mongoose'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }], 'movies'),
    ],
    controllers: [MoviesController],
    providers: [MoviesService],
})
export class MoviesModule {

}