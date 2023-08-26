import { Field, HideField, Int, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  id: number;

  @Field(type => String)
  username: string;

  @Field(type => String)
  email: string;

  //TODO: include after creating Watchlist module and such
  // @Field((type) => [PrismaWatchlist])
  // watchlist: PrismaWatchlist[];

  @Field(type => String)
  created_at: string; //TODO: add custom scalar type for date

  @Field(type => String)
  updated_at: string; //TODO: add custom scalar type for date
}
