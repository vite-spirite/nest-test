import {Table, Column, Model, PrimaryKey, Unique, AutoIncrement, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table
export class users extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Unique
    @Column
    email: string

    @Unique
    @Column
    pseudo: string

    @Column
    password: string

    @CreatedAt
    createdAt: Date
    @UpdatedAt
    updatedAt: Date
}
