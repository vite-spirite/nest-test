import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  getHello() {
    return 'hello world';
  }
  constructor(private sequelize: Sequelize) {}
}
