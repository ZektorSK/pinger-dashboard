import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CommonService<T> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly model: string,
  ) {}

  async findOne(where: object): Promise<T | undefined> {
    return this.prisma[this.model].findFirst({ where: where });
  }

  async findMany(where: object): Promise<T | undefined> {
    return this.prisma[this.model].findMany({ where: where });
  }

  async create(data: object): Promise<T | undefined> {
    return this.prisma[this.model].create({ data: data });
  }

  async update(where: object, data: object): Promise<T | undefined> {
    return this.prisma[this.model].update({ where: where, data: data });
  }

  async delete(where: object): Promise<T | undefined> {
    return this.prisma[this.model].delete({ where: where });
  }
}
