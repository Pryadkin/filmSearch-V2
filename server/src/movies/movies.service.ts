import { CreateMovieDto } from './dto/create-movie.dto'
import { Movie, MovieDocument } from './schemas/movie.schema'
import { Injectable } from "@nestjs/common"
import { InjectModel } from '@nestjs/mongoose'
import {Model, ObjectId} from 'mongoose'

@Injectable()
export class MoviesService{

    constructor(@InjectModel(Movie.name, 'movies') private MoviesModel: Model<MovieDocument>) {}
    
    async create(dto: CreateMovieDto): Promise<Movie> {
        const movie = await this.MoviesModel.create({ ...dto })
        return movie
    }

    async getAll(): Promise<Movie[]> {
        const movies = await this.MoviesModel.find()
        return movies
    }

    async getOne(id: ObjectId): Promise<Movie> {
        const movie = await this.MoviesModel.findById(id)
        return movie
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const movie = await this.MoviesModel.findByIdAndDelete(id)
        return movie.id
    }
}