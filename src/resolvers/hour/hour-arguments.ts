import { MinLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";
import { Hour } from "../../entities/hour-entity";

@InputType()
export class EditHourInput {
  @Field({nullable: true})
  @MinLength(6)
  date?: string;

  @Field({nullable: true})
  value?: number;

  @Field({nullable: true})
  description?: string;

  @Field({defaultValue: false})
  flag?: boolean;
}

@InputType()
export class HourInput implements Partial<Hour> {
  @Field()
  _id: ObjectId;

  @Field()
  date: string;

  @Field()
  value: number;

  @Field({defaultValue: false})
  flag: boolean;

  @Field()
  createdBy: string;

  @Field({nullable: true})
  description?: string;
}