import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersController } from './users.controller';

import { SequelizeModule } from '@nestjs/sequelize';
import { users as UsersDB } from './models/user.sequelize.model';


@Module({
  imports: [
    SequelizeModule.forFeature([UsersDB])
  ],
  exports: [
    SequelizeModule,
  ],
  providers: [UsersResolver, UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
