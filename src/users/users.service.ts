import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './models/user.graphql.model';
import { users as UsersDB } from './models/user.sequelize.model';
import {users as UserInterface} from './users.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(UsersDB)
        private readonly usersDb: typeof UsersDB
    ) {}

    async create(args: UserInterface): Promise<Users> {
        return await this.usersDb.create(args);
    }

    async findAll(): Promise<Users[]> {
        return await this.usersDb.findAll();
    }

    async findByPseudo(pseudo: string): Promise<Users> {
        return await this.usersDb.findOne({where: {pseudo}});
    }
}
