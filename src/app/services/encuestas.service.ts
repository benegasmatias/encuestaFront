import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionSelect } from '../model/question';
@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  dataQuestion:QuestionSelect[]

  URI="sistemaG"

  constructor(private http:HttpClient) {}

  getPreguntas(){
    return this.http.get(`${this.URI}/questions/index.json`);
    
  }

  getRespuestas(){
    return this.http.get(`${this.URI}/answers/index.json`);
  }

  addQuestion(question){
    return this.http.post(`${this.URI}/questions/add.json`,question);
  }

  //Metodos para comunicacion entre componentes
  setArray(array:QuestionSelect[]){
    this.dataQuestion=array
  }
  getArray(){
    return this.dataQuestion;
  }
}


