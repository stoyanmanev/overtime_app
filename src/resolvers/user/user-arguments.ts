import { MaxLength, MinLength, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { HourInput } from "../hour/hour-arguments";

@InputType()
export class CreateUserInput {
  @Field()
  @MaxLength(30)
  username: string;

  @Field()
  @MaxLength(30)
  fullname: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(6)
  password: string;
}

@InputType()
export class EditUserInput {

  @Field({ nullable: true })
  @MaxLength(30)
  username?: string;

  @Field({ nullable: true })
  @MaxLength(30)
  fullname?: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @MinLength(6)
  password?: string;

  @Field(type => [HourInput], {nullable: true})
  hours?: HourInput[];
}