import { Component, OnInit } from '@angular/core';
import {EncuestasService } from '../../services/encuestas.service';
import { QuestionSelect } from 'src/app/model/question';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Answer } from 'src/app/model/answer';


@Component({
  selector: 'app-crea-encuesta',
  templateUrl: './crea-encuesta.component.html',
  styleUrls: ['./crea-encuesta.component.css']
})
export class CreaEncuestaComponent implements OnInit {
//arreglo de preguntas que viene de la bdd
  questions:any=[]

//array de preguntas para la encuesta
  questionsSelect : QuestionSelect[]=[]
  questionSelect:QuestionSelect

 //Pregunta agregar en la bdd
  question:QuestionSelect = new QuestionSelect()
 
  //esta variable boleana es para desactivar el input del modal que agrega una pregunta
  PreValid=true;
  //nueva pregunta 
  newQuestion:QuestionSelect = new QuestionSelect()
 
  answersFornewQuestion: Answer[] = []

  formSelecter= new FormGroup(({
    questionSelect: new FormControl('', Validators.required)
  }));


  formNewPregunta= new FormGroup({
    pregunta: new FormControl('',[Validators.minLength(4),Validators.required])
  })


  constructor(private encuestasService:EncuestasService) { }
  
  ngOnInit(): void {
    
    this.getAllPreguntas()
  }
 //Trae las preguntas de Bdd
  getAllPreguntas(){
    this.encuestasService.getPreguntas().subscribe(
      (data)=>{this.questions=data['questions']
    console.log(data)
  console.log(this.questions)}

    )
  }
  //guarda las preguntas en El array questionsSelect
  selectQuestions(){ 
    this.questionsSelect.push(this.formSelecter.get('questionSelect').value)
    console.log(this.formSelecter.get('questionSelect').value)
    this.formSelecter.get('questionSelect').setValue('')
  }
  //Borra la pregunta del array
  deleteItem(index){
    this.questionsSelect.splice(index,1)
  }


  gestionQuestionAndAnswer(){
    
    
  }

  addQuestion(){
    
    // this.encuestasService.addQuestion(this.formNewPregunta.get('pregunta').value).subscribe(
    //   (data)=> {
    //     this.newQuestion = data['question'];
    //     console.log(this.newQuestion)
    //     this.formNewPregunta = new FormGroup({respuesta: new FormControl('',[Validators.min(2),Validators.required])})
    //     this.PreValid=false
    //   }
    // )
    this.newQuestion.question_string= this.verificaStrignPregunta(this.formNewPregunta.get('pregunta').value)
    
    this.formNewPregunta = new FormGroup({respuesta: new FormControl('',[Validators.min(2),Validators.required])})
    this.PreValid=false

    
  }

  deleteAnswer(index){
    this.answersFornewQuestion.splice(index,1);
  }


  addAnwers(){

  }
  //Verifica que la pregunta escrita no tenga Signos de preguntas y Diacriticos
  verificaStrignPregunta(pregunta:string){
    
    if(pregunta.indexOf('¿')||pregunta.lastIndexOf('?')){ 
        pregunta= pregunta.replace('¿','');
        pregunta= pregunta.replace('?','');
        
      alert('Cuado ingrese la pregunta. NO debe contene signo de pregunta "¿ o ?", estos caracteres seran eliminados');
    }
    const preCorrecta = this.eliminarDiacriticos(pregunta)
        this.formNewPregunta.get('pregunta').setValue(preCorrecta)
      return preCorrecta
  }
  // Elimina los diacríticos de un texto (ES6)
  eliminarDiacriticos(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
  }
//cancela pregunta
  cancelaNewPregunta(){
    this.newQuestion.question_string=''
    this.formNewPregunta.get('respuesta').clearAsyncValidators()
    
    this.formNewPregunta= new FormGroup({
      pregunta: new FormControl('',[Validators.minLength(4),Validators.required])
    })

    this.PreValid=true
  }

}
