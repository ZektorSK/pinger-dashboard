import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '../prisma.service';
import { UserResolver } from './user.resolver';

@Module({
  controllers: [],
  providers: [UserService, PrismaService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
