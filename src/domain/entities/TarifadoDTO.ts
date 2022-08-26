import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface ITarifadotProperties {
  rut: number;
  dv: number;
  canal: string;
  objetivoCredito: string;
  tipoTasa: string;
  ltv: number;
  plazo: number;
  montoCredito: number;
  primeraVivienda: boolean
}
@Entity()
export default class TarifadoDTO {

  rut: number;
  dv: number;
  canal: string;
  objetivoCredito: string;
  tipoTasa: string;
  ltv: number;
  plazo: number;
  montoCredito: number;
  primeraVivienda: boolean

  constructor({ rut, dv, canal, objetivoCredito, tipoTasa, ltv, plazo, montoCredito, primeraVivienda }: ITarifadotProperties) {
    this.rut = rut;
    this.dv = dv;
    this.canal =canal;
    this.objetivoCredito = objetivoCredito;
    this. tipoTasa = tipoTasa;
    this.ltv = ltv;
    this.plazo = plazo;
    this.montoCredito = montoCredito;
    this.primeraVivienda = primeraVivienda;0

   /* if (title.length < 5) {
      throw new Error('Title is less than 5');
    }*/
  }
}
