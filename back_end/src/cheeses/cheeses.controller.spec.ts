import { Test, TestingModule } from '@nestjs/testing';
import { CheesesController } from './cheeses.controller';
import { CheesesService } from './cheeses.service';
import { CreateCheeseDto } from './dto/create-cheese.dto';
import { UpdateCheeseDto } from './dto/update-cheese.dto';
import { Cheese } from './entities/cheese.entity';

describe('CheesesController', () => {
  let cheesesController: CheesesController;
  let cheesesService: CheesesService;
  let expectedCheese;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CheesesController],
      providers: [CheesesService],
    }).compile();

    cheesesService = moduleRef.get<CheesesService>(CheesesService);
    cheesesController = moduleRef.get<CheesesController>(CheesesController);

    expectedCheese = {
      id: 'b6ac021e-f60a-46fd-b1e5-0c25b621da82',
      name: 'Brie De Meaux',
      pricePerKg: 5970,
      colour: 'Straw',
      imageUrls: ['http://localhost:3001/images/brie-de-meaux.jpg'],
    } as Cheese;
  });

  describe('create', () => {
    it('should return the newly created cheeses', async () => {
      jest
        .spyOn(cheesesService, 'create')
        .mockImplementation(() => expectedCheese);

      expect(cheesesController.create({} as CreateCheeseDto)).toEqual(
        expectedCheese,
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of cheeses', async () => {
      jest
        .spyOn(cheesesService, 'findAll')
        .mockImplementation(() => [expectedCheese]);
      expect(await cheesesController.findAll()).toEqual([expectedCheese]);
    });
  });

  describe('findOne', () => {
    it('should return cheese matching the id provided', async () => {
      jest
        .spyOn(cheesesService, 'create')
        .mockImplementation(() => expectedCheese);

      expect(
        cheesesController.findOne('b6ac021e-f60a-46fd-b1e5-0c25b621da82'),
      ).toEqual(expectedCheese);
    });
  });

  describe('update', () => {
    it('should return cheese the updated cheese', async () => {
      jest
        .spyOn(cheesesService, 'update')
        .mockImplementation(() => expectedCheese);

      expect(
        cheesesController.update(
          '94834922-ecf7-49d5-81c1-e9e630ea8c80',
          {} as UpdateCheeseDto,
        ),
      ).toEqual(expectedCheese);
    });
  });
});
