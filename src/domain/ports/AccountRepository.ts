import Account from 'src/domain/entities/Account';
import IRepositoryMethodResult from './RepositoryMethodResult';

export default interface IAccountRepository {
  save(account: Account): Promise<IRepositoryMethodResult<Account>>;
  list(): Promise<IRepositoryMethodResult<Account[]>>;
}
