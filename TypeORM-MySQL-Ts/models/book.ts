import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Author } from './author';

@ObjectType()
@Entity()
export class Book {

  // eslint-disable-next-line no-unused-vars
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  title: string 
  
  // eslint-disable-next-line no-unused-vars
  @Field(type => [Author])
  @ManyToMany(() => Author, author => author.books, {
    onDelete: 'CASCADE'
  })
  @JoinTable()
  authors: Author[]
}
