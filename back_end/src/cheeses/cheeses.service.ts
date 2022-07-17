import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateCheeseDto } from './dto/create-cheese.dto';
import { UpdateCheeseDto } from './dto/update-cheese.dto';
import cheeses from '../data/cheeses';
import { Cheese } from './entities/cheese.entity';

@Injectable()
export class CheesesService {
  /**
   * Creates a new cheese in the database
   * Returns the newly created cheese object
   */
  create(createCheeseDto: CreateCheeseDto): Cheese {
    const newCheese = {
      id: uuidv4(),
      ...createCheeseDto,
    };
    cheeses.push(newCheese);
    return newCheese;
  }

  /**
   * Gets all cheeses from the database
   * Returns a array of cheeses
   */
  findAll(): Cheese[] {
    return cheeses;
  }

  /**
   * Gets a single cheese from the database
   * Returns the cheese object
   */
  findOne(id: string): Cheese {
    const cheese = cheeses.find((c) => id === c.id);
    if (cheese) {
      return cheese;
    } else {
      throw new NotFoundException('Cheese not found');
    }
  }

  /**
   * Updates a cheese in the database
   * Returns the updated cheese object
   */
  update(id: string, updateCheeseDto: UpdateCheeseDto): Cheese {
    const cheeseIndex = cheeses.findIndex((c) => id === c.id);
    if (cheeseIndex === -1) {
      throw new NotFoundException('Cheese not found');
    }
    const updatedCheese = {
      ...cheeses[cheeseIndex],
      ...updateCheeseDto,
    };
    cheeses[cheeseIndex] = updatedCheese;
    return updatedCheese;
  }

  /**
   * Deletes a cheese from the database
   * No value is returned
   */
  remove(id: string): void {
    const cheeseIndex = cheeses.findIndex((c) => id === c.id);
    if (cheeseIndex === -1) {
      throw new NotFoundException('Cheese not found');
    }
    cheeses.splice(cheeseIndex, 1);
  }
}
