import { ObjectType, Field, Authorized } from "type-graphql";
import {
  prop as Prop,
  getModelForClass,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { UserRoles } from "../resolvers/user/user.roles";
import { Hour } from "./hour-entity";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
@ObjectType()
export class User {

  @Field()
  readonly _id: ObjectId;

  @Prop({ required: true}) // mongodb
  @Field() // graphql
  username: string; //typescript

  @Prop({ required: true }) // mongodb
  @Field() // graphql
  fullname: string; //typescript

  @Prop({ required: true})
  @Field()
  email: string;

  @Prop({ required: true })
  @Field()
  password: string;

  @Prop({ default: Date.now() })
  @Field()
  lastLogin?: number;

  @Prop({ default: [] })
  @Field((type) => [Hour])
  overtime?: Hour[];

  @Authorized([UserRoles.SUPER_ADMIN])
  @Prop({ default: [UserRoles.USER] })
  @Field(type => [String])
  roles?: string[]
  exp: number;
}

export const UserModel = getModelForClass(User, { schemaOptions: { timestamps: true }});

