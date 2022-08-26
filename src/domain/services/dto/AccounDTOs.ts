import { IAccountProperties } from 'src/domain/entities/Account';

export type IRequestCreateAccountDTO = Omit<IAccountProperties, 'id'>;

export type IRequestGetAccountByIdDTO = {
  id: string;
};
