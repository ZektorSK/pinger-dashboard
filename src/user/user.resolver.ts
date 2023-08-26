import { User } from './models/user.model';
import { Args, Int, ResolveField, Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver(User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(returns => User, {name: 'User'})
  async getUser(@Args('email', { type: () => String }) email: string) {
    return this.userService.findOne(email);
  }
}
