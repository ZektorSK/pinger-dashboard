import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import { CommonService } from '../common/common.service';

@Injectable()
export class UserService extends CommonService<User> {
  constructor(prisma: PrismaService) {
    super(prisma, 'user');
  }
}
