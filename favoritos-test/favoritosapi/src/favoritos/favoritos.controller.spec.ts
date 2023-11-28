import { Test, TestingModule } from '@nestjs/testing';
import { favoritosController } from './favoritos.controller';

describe('favoritosController', () => {
  let controller: favoritosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [favoritosController],
    }).compile();

    controller = module.get<favoritosController>(favoritosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
