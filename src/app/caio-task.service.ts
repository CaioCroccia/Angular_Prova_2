import { Injectable } from '@angular/core';

interface Tasks{
  periodo: string;
  tarefa: string
}



@Injectable()
export class CaioTaskService {
  list: Array<Tasks> = [
    {
      periodo: 'manha',
      periodo: 'tomar cafe',

    }

  ]
  constructor() { }

}