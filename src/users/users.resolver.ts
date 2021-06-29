import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Users } from './models/user.graphql.model';
import { UsersService } from './users.service';

import {createUser} from './dto/createUser.input.dto'

@Resolver(of => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => [Users])
  async users() : Promise<Users[]> {
    return await this.usersService.findAll();
  }

  @Query(returns => Users)
  async user(@Args('pseudo') pseudo: string) : Promise<Users> {
    return await this.usersService.findByPseudo(pseudo);
  }

  @Mutation(returns => Users)
  async createUser(@Args('data') data : createUser) : Promise<Users> {
    return await this.usersService.create(data);
  }
}
