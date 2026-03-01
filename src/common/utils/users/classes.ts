import { Users } from 'src/common/entities/users/users.entity';

export class StatusRes {
  status: number;
  message: string;
}

export class GetUsers extends Users {
  hadBirthday: boolean;
}
