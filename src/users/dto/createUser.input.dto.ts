import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class createUser {
    @Field()
    pseudo: string

    @Field()
    email: string

    @Field()
    password: string
}