import { Component, OnInit, Input } from '@angular/core';
import {EncuestasService} from '../../services/encuestas.service'
import {SurveryResp} from '../../model/survery-resp'
import { QuestionSelect } from 'src/app/model/question';

@Component({
  selector: 'app-encuestas-form',
  templateUrl: './encuestas-form.component.html',
  styleUrls: ['./encuestas-form.component.css']
})
export class EncuestasFormComponent implements OnInit {

  preguntas:QuestionSelect[]=[]

  respuestas:any=[]

  stan=true

  surveryresps=[{
    survey:'',
    answer_id:'',
    survey_id:'',
},{
  survey:'',
  answer_id:'',
  survey_id:'',
},{
  survey:'',
  answer_id:'',
  survey_id:'',
},{
  survey:'',
  answer_id:'',
  survey_id:'',
},{
  survey:'',
  answer_id:'',
  survey_id:'',
},{
  survey:'',
  answer_id:'',
  survey_id:'',
},{
  survey:'',
  answer_id:'',
  survey_id:'',
},{
  survey:'',
  answer_id:'',
  survey_id:'',
},{
  survey:'',
  answer_id:'',
  survey_id:'',
},{
  survey:'',
  answer_id:'',
  survey_id:'',
},{
  survey:'',
  answer_id:'',
  survey_id:'',
},]

  pregResp:any=[]
  

  constructor(private serviceEncuesta:EncuestasService) { }



  ngOnInit(): void {
    // this.serviceEncuesta.getPreguntas().subscribe(
    //   (data)=>{
    //     console.log(data)
    //     this.preguntas=data['preguntas']}
    // )

    // this.getRespuesta()
    // this.armaArreglo()
    this.getQuestions()

  }

 getQuestions(){
  this.preguntas =this.serviceEncuesta.getArray()
  console.log(this.preguntas)
 }

  getRespuesta(){
   this.serviceEncuesta.getRespuestas().subscribe(
     (data)=>{this.respuestas=data['answers']
        console.log(data)
        for(let i=0;i<10;i++){
          
        this.pregResp[i]= data['answers']
        }
        console.log(this.pregResp)
      }

   )

  }
  
  

}
