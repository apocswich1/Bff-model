import AccountRepository from './AccountRepository';
import { getRepository } from 'typeorm';
import { mocked } from 'ts-jest/utils';
import PostgresConnection from '../connection/PostgresConnection';

jest.mock('typeorm');
jest.mock('../connection/PostgresConnection');

const mockedGetRepo = mocked(getRepository(<jest.Mock>{}));
beforeEach(() => {
  mockedGetRepo.find.mockClear();
  mockedGetRepo.save.mockClear();
});

describe('AccountRepository', () => {
  describe('getAccounts', () => {
    test('should return empty array', async () => {
      mockedGetRepo.find.mockResolvedValue([]);
      const accountRepository = new AccountRepository(new PostgresConnection());
      const {status, data } = await accountRepository.list();
      expect(data).toEqual([]);
      expect(status).toEqual(200);
      expect(mockedGetRepo.find).toHaveBeenCalledWith();
      expect(mockedGetRepo.find).toHaveBeenCalledTimes(1);
    });

    test('should return user list', async () => {
      const accountsData = [
        {
          id: 1,
          title: 'hola',
        },
      ];
      mockedGetRepo.find.mockResolvedValue(accountsData);
      const accountRepository = new AccountRepository(new PostgresConnection());
      const {status, data } = await accountRepository.list();
      expect(data).toEqual(accountsData);
      expect(status).toEqual(200);
      expect(mockedGetRepo.find).toHaveBeenCalledWith();
      expect(mockedGetRepo.find).toHaveBeenCalledTimes(1);
    });
  });
});
