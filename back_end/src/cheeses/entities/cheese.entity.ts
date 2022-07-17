import { ApiProperty } from '@nestjs/swagger';

export class Cheese {
  @ApiProperty({
    example: '80d76780-5b0b-451b-bbb2-81656acb81a6',
    description: 'The unique id of the Cheese',
  })
  id: string;

  @ApiProperty({
    example: 'Gouda',
    description: 'The name of the Cheese',
  })
  name: string;

  @ApiProperty({
    example: 9999,
    description: 'The price per kg of the Cheese in cents',
  })
  pricePerKg: number;

  @ApiProperty({
    example: 'Pale yellow',
    description: 'The colour of the Cheese',
  })
  colour: string;

  @ApiProperty({
    example: '["http://localhost/images/gouda.jpg"]',
    description: 'An array of image urls',
  })
  imageUrls: string[];
}
