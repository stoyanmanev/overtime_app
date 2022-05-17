import { Resolver, Query, Mutation, Arg, Authorized, Ctx } from "type-graphql";
import { AuthenticationError } from "apollo-server-core";
import { Hour, HourModel } from "../../entities/hour-entity";
import { EditHourInput } from "./hour-arguments";
import { Context } from "../auth/context";
import { UserRoles } from "../user/user.roles";


@Resolver()
export class HourResolver {
  @Query((returns) => [Hour])
  async hours(): Promise<Hour[]> {
    return await HourModel.find({});
  }

  @Query((returns) => Hour)
  async hour(@Arg("_id") _id: string): Promise<Hour> {
    return await HourModel.findById(_id);
  }

  @Mutation((returns) => Hour)
  async createHour(@Arg("data") data: EditHourInput, @Ctx() ctx: Context): Promise<Hour> {
    if(!ctx.user){
        throw new AuthenticationError('user_not_authenticated')
    }
    const hourData = {
        ...data,
        createdBy: ctx.user,
    };
    const newHour = new HourModel(hourData);
    await newHour.save();
    return newHour;
  }

  @Mutation((returns) => Hour)
  async deleteHour(@Arg("_id") _id: string): Promise<Hour> {
    return await HourModel.findByIdAndRemove(_id);
  }

  @Mutation((returns) => Hour)
  async editHour(
    @Arg("_id") _id: string,
    @Arg("data") data: EditHourInput
  ): Promise<Hour> {
    return await HourModel.findByIdAndUpdate(_id, data, { new: true });
  }
}