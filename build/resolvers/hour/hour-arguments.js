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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourInput = exports.EditHourInput = void 0;
const class_validator_1 = require("class-validator");
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
let EditHourInput = class EditHourInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], EditHourInput.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], EditHourInput.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditHourInput.prototype, "description", void 0);
EditHourInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditHourInput);
exports.EditHourInput = EditHourInput;
let HourInput = class HourInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], HourInput.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], HourInput.prototype, "date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], HourInput.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], HourInput.prototype, "createdBy", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], HourInput.prototype, "description", void 0);
HourInput = __decorate([
    (0, type_graphql_1.InputType)()
], HourInput);
exports.HourInput = HourInput;
