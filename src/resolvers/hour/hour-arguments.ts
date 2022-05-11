import { MinLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";
import { Hour } from "../../entities/hour-entity";

@InputType()
export class EditHourInput {
  @Field()
  @MinLength(6)
  date: string;

  @Field()
  value: number;

  @Field({nullable: true})
  description?: string;
}

@InputType()
export class HourInput implements Partial<Hour> {
  @Field()
  _id: ObjectId;

  @Field()
  date: string;

  @Field()
  value: number;

  @Field()
  createdBy: string;

  @Field()
  description: string;
}