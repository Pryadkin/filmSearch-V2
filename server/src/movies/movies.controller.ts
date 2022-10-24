import { CreateMovieDto } from './dto/create-movie.dto'
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { MoviesService } from './movies.service'

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @Post()
    create(@Body() dto: CreateMovieDto) {
        return this.moviesService.create(dto)
    }

    @Get()
    getAll() {
        return this.moviesService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.moviesService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.moviesService.delete(id)
    }
}
