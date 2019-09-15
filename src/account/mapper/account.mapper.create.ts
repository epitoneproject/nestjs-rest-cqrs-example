import moment from 'moment';
import { Account } from '../model/account.model';

export class CreateAccountMapper {
  public readonly account_id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly password: string;
  public readonly active: boolean;
  public readonly created_at: string;

  constructor(account: Account) {
    this.account_id = account.accountId;
    this.name = account.name;
    this.email = account.email;
    this.password = account.password;
    this.active = true;
    this.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}