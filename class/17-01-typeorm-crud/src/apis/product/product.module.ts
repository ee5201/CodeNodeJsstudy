import { Module } from '@nestjs/common';
import { ProductModuleResolver } from './product.resolver';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [
    ProductModuleResolver, //
    ProductService,
  ],
})
export class ProductModule {}
