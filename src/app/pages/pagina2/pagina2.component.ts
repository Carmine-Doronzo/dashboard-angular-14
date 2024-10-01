import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  patchForm : FormGroup
  people: any
  key:string
  constructor(private firebaseDB: FirebaseService, private router: Router) { }

  ngOnInit(): void {
    this.firebaseDB.getPeople(`.json`).subscribe(data => {
      this.people = Object.keys(data).map((key) => {
        (data as any)[key]['id'] = key
        return (data as any)[key]
      })

      this.firebaseDB.peopleToMod = this.people
      console.log(this.people)
    })

    this.patchForm = new FormGroup({
      "name": new FormControl(null,[Validators.required]),
      "surname" : new FormControl(null,[Validators.required])
    })
  }
  autoRefresh(){
    const currentUrl = this.router.url;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentUrl]);
      });
  }

  onDelete(id: string) {
    this.firebaseDB.deletePerson(id).subscribe(() => {
      this.autoRefresh()
    })

  }

  onPatch() {
    this.firebaseDB.patchPerson(this.key, this.patchForm.value).subscribe(() => {
      this.autoRefresh()
    })
  }

}
