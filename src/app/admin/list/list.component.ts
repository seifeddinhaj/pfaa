import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/auth/authservice.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from 'src/app/models/user.model';
import { UserCrudService } from 'src/app/Services/user-crud.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users:Observable<any>;
  user;
  itemsRef: AngularFireList<any>;
  constructor(private db : AngularFireDatabase,
    ) {
  
    this.itemsRef = db.list('profile');
   }




  ngOnInit() {
    this.db.list("profile" ).valueChanges().subscribe(data =>{
      this.user = data ;
      console.log(data);
      console.log(this.user);
    });
   this.users= this.db.list("profile").snapshotChanges().pipe(
      map(
        (changes => 
           changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
         
           )
         )
    )
    
  }
  activer(keyy,verif){
    this.itemsRef.update(keyy,{verifier:verif})
      }
      desActiver(keyy,verif){
        this.itemsRef.update(keyy,{verifier:verif})
          }

  deleteProfile(key){
  this.itemsRef.remove(key)
  } 

}
