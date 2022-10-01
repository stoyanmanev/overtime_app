"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourResolver = void 0;
const type_graphql_1 = require("type-graphql");
const apollo_server_core_1 = require("apollo-server-core");
const hour_entity_1 = require("../../entities/hour-entity");
const hour_arguments_1 = require("./hour-arguments");
let HourResolver = class HourResolver {
    async hours() {
        const list = await hour_entity_1.HourModel.find({});
        const listNonFlag = list.filter(res => res.flag === false);
        return listNonFlag;
    }
    async hour(_id) {
        return await hour_entity_1.HourModel.findById(_id);
    }
    async createHour(data, ctx) {
        if (!ctx.user) {
            throw new apollo_server_core_1.AuthenticationError('user_not_authenticated');
        }
        const hourData = {
            ...data,
            createdBy: ctx.user,
        };
        const newHour = new hour_entity_1.HourModel(hourData);
        await newHour.save();
        return newHour;
    }
    async deleteHour(_id) {
        return await hour_entity_1.HourModel.findByIdAndRemove(_id);
    }
    async editHour(_id, data) {
        return await hour_entity_1.HourModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => [hour_entity_1.Hour]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HourResolver.prototype, "hours", null);
__decorate([
    (0, type_graphql_1.Query)((returns) => hour_entity_1.Hour),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HourResolver.prototype, "hour", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => hour_entity_1.Hour),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hour_arguments_1.EditHourInput, Object]),
    __metadata("design:returntype", Promise)
], HourResolver.prototype, "createHour", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => hour_entity_1.Hour),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HourResolver.prototype, "deleteHour", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => hour_entity_1.Hour),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, hour_arguments_1.EditHourInput]),
    __metadata("design:returntype", Promise)
], HourResolver.prototype, "editHour", null);
HourResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], HourResolver);
exports.HourResolver = HourResolver;
