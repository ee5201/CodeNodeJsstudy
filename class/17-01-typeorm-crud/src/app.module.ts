import { Module } from '@nestjs/common';
import { BoardModule } from './apis/boards/boards.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';

@Module({
  imports: [
    ProductCategoryModule,
    BoardModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234567',
      database: 'myproject03',
      entities: [__dirname + '/apis/**/*.entity.*'], // __ditname현재 디렉토리 위치 에 apis에서 샅샅이 찾는다.
      synchronize: true, // 동기화 시켜준다 같게 한다.
      logging: true,
    }),
  ],
})
export class AppModule {}
