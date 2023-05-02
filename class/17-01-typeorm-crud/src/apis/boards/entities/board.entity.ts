import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('uuid') //주요컬럼 increment=> 숫자를 증가하게 하고 싶으면 increment 이용한다.
  @Field(() => Int)
  number: number;

  @Column() // mysql을 위한것
  @Field(() => String) // graphql위한것
  writer: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;
}
