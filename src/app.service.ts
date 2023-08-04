import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  testConnection(): any {
    return this.prisma.$queryRaw`SELECT *
                                  FROM pg_catalog.pg_tables
                                  WHERE schemaname != 'pg_catalog' AND 
                                      schemaname != 'information_schema';`;
  }
}
