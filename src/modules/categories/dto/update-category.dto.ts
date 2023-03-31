import { IsString, IsNumber } from 'class-validator';

export class UpdateCategoryDto {

  @IsString()
  readonly name: string;

  @IsString()
  readonly username: string;

  @IsNumber()
  readonly idSocialNetwork: number;

  @IsString()
  readonly email: string;

  @IsString()
  readonly photoUrl: string;

  @IsString()
  readonly company: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly job: string;

  @IsString()
  readonly gender: string;

  @IsNumber()
  readonly idStatus: number;

}
