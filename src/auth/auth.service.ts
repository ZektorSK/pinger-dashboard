import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (!(await bcrypt.compare(password, user?.password))) {
      throw new UnauthorizedException();
    }
    // TODO: Generate a JWT and return it here
    return user;
  }
}
