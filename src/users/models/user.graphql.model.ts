import { Field, ObjectType, ID } from '@nestjs/graphql'

@ObjectType()
export class Users {
    @Field(type => ID)
    id: number

    @Field()
    email: string

    @Field()
    pseudo: string
}