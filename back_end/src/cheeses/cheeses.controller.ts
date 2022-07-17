import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CheesesService } from './cheeses.service';
import { CreateCheeseDto } from './dto/create-cheese.dto';
import { UpdateCheeseDto } from './dto/update-cheese.dto';
import { Cheese } from './entities/cheese.entity';

@ApiTags('cheeses')
@Controller('cheeses')
export class CheesesController {
  constructor(private readonly cheesesService: CheesesService) {}

  /**
   * Creates a new cheese in the database
   * Returns the newly created cheese object
   */
  @Post()
  @ApiOperation({ summary: 'Create a cheese' })
  @ApiResponse({
    status: 200,
    description: 'The created cheese object',
    type: Cheese,
  })
  create(@Body() createCheeseDto: CreateCheeseDto): Cheese {
    return this.cheesesService.create(createCheeseDto);
  }

  /**
   * Gets all cheeses from the database
   * Returns a array of cheeses
   */
  @Get()
  @ApiOperation({ summary: 'Get all cheese' })
  @ApiResponse({
    status: 200,
    description: 'A list of cheese objects',
    type: [Cheese],
  })
  findAll(): Cheese[] {
    return this.cheesesService.findAll();
  }

  /**
   * Gets a single cheese from the database
   * Returns the cheese object
   */
  @Get(':id')
  @ApiOperation({ summary: 'Get a single cheese' })
  @ApiResponse({
    status: 200,
    description: 'The cheese object',
    type: Cheese,
  })
  findOne(@Param('id') id: string): Cheese {
    return this.cheesesService.findOne(id);
  }

  /**
   * Updates a cheese in the database
   * Returns the updated cheese object
   */
  @Patch(':id')
  @ApiOperation({ summary: 'Update a cheese' })
  @ApiResponse({
    status: 200,
    description: 'The cheese object',
    type: Cheese,
  })
  update(
    @Param('id') id: string,
    @Body() updateCheeseDto: UpdateCheeseDto,
  ): Cheese {
    return this.cheesesService.update(id, updateCheeseDto);
  }

  /**
   * Deletes a cheese from the database
   * Returns a 204 response with an empty body
   */
  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a cheese' })
  @ApiResponse({
    status: 204,
    description: 'An empty response',
  })
  remove(@Param('id') id: string): void {
    return this.cheesesService.remove(id);
  }
}
