import { Field, HideField, Int, ID, ObjectType, GraphQLISODateTime } from "@nestjs/graphql";

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

  @Field(type => GraphQLISODateTime)
  created_at: Date;

  @Field(type => GraphQLISODateTime)
  updated_at: Date;
}
