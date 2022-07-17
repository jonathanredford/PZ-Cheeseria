import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCheeseDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  readonly pricePerKg: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly colour: string;

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  readonly imageUrls: string[];
}
