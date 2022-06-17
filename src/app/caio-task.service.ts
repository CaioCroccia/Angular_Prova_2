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
   
  ShowList(){
    return this.list;
  }

  PutList(periodo: string, tarefa: string){
    this.list.push({periodo, tarefa})
  }

  deleteList(index: number){
    this.list.slice(index,1);
  }
}