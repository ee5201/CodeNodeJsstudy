import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}
  async create({ name }) {
    const result = await this.productCategoryRepository.save({
      name,
    });
    console.log(result); // {name:"전자제품"}
    return result;
  }
}
