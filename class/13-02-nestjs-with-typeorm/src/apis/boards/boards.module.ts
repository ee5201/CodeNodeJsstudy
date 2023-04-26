import { Module } from '@nestjs/common';
import { BoardResolver } from './boards.resolver';
import { BoardService } from './boards.service';

@Module({
  // import: [],
  // controller: []
  providers: [BoardResolver, BoardService],
})
export class BoardModule {}
