import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type MovieDocument = Movie & Document

@Schema()
export class Movie {
    @Prop()
        movie_id: string

    @Prop()
        name: string
}

export const MovieSchema = SchemaFactory.createForClass(Movie)