import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  @Field(() => String)
  wrtier: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  contents: string;
}
