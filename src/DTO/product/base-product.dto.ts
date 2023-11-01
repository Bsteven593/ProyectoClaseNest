import { IsString,Allow,IsNotEmpty,IsNumber,IsPositive,IsAlphanumeric } from "class-validator";

export class BaseProductDto{
    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly title;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly description;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly image;
}