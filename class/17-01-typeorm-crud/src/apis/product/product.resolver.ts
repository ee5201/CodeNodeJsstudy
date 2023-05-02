import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';

import { ProductService } from './product.service';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';

@Resolver()
export class ProductModuleResolver {
  constructor(private readonly productService: ProductService) {}
  @Query(() => [Product])
  fetchProducts() {
    return this.productService.findAll();
  }
  @Query()
  fetchProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.findOne({ productId });
  }
  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.create({ createProductInput });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    // 판매 완료가 되었는지 확인해보기
    await this.productService.CheckSoldout({
      productId,
    });
    //수정하기
    return await this.productService.update({ productId, updateProductInput });
  }
}
