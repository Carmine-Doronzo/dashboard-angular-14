import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  insertForm : FormGroup
  constructor(private firebaseDB: FirebaseService) { }

  ngOnInit(): void {
    this.insertForm = new FormGroup({
      "name": new FormControl(null,[Validators.required]),
      "surname" : new FormControl(null,[Validators.required])
    })
  }
  
  onSubmit(){
    //console.log(this.url)
    this.firebaseDB.insertPersona('.json',this.insertForm.value).subscribe(data =>{
      console.log(data)
    })
  }


}
