import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CommonService<T> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly model: string,
  ) {}

  async findOne(params: object): Promise<T | undefined> {
    return this.prisma[this.model].findFirst({ where: params });
  }
}
