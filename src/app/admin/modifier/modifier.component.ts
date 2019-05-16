import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
user:Observable<any>;
keyy:string;
itemsRef: AngularFireList<any>;
  constructor(private route: ActivatedRoute,private db:AngularFireDatabase) {
this.user=this.db.object("profile/"+this.route.snapshot.params.id).valueChanges();
    console.log( this.route.snapshot.params.id)
    this.keyy=this.route.snapshot.params.id;
    this.itemsRef = db.list('profile');
   }

  ngOnInit() {
  }
  updateProfile(keyy,Nom,Prenom,Adresse,CodePostale,Ville,Pays,Telephone){
this.itemsRef.update(keyy,{nom:Nom,prenom:Prenom,adresse:Adresse,codePostal:CodePostale,ville:Ville,pays:Pays,numberPhone:Telephone})
  }

}
