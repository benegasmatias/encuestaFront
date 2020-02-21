import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  URI="sistemaG"

  constructor(private http:HttpClient) {}

  getPreguntas(){
    return this.http.get(`${this.URI}/questions/index.json`);
    
  }

  getRespuestas(){
    return this.http.get(`${this.URI}/answers/index.json`);
  }
}


