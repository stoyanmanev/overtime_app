import { ObjectType, Field } from "type-graphql";
import {
  prop as Prop,
  getModelForClass,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class Hour {
  @Field()
  readonly _id: ObjectId;

  @Prop()
  @Field()
  date: string;

  @Prop()
  @Field()
  value: number;

  @Prop()
  @Field()
  createdBy: string;

  @Prop()
  @Field({defaultValue: false})
  flag?: boolean;

  @Prop()
  @Field({nullable: true})
  description?: string;
}

export const HourModel = getModelForClass(Hour, {
  schemaOptions: { timestamps: true },
});
