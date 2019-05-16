import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-parking',
  templateUrl: './modifier-parking.component.html',
  styleUrls: ['./modifier-parking.component.css']
})
export class ModifierParkingComponent implements OnInit {
  parking:Observable<any>;
  keyy:string;
  itemsRef: AngularFireList<any>;
  constructor(private route: ActivatedRoute,private db:AngularFireDatabase) {
    this.parking=this.db.object("Parking/"+this.route.snapshot.params.id).valueChanges();
    console.log( this.route.snapshot.params.id)
    this.keyy=this.route.snapshot.params.id;
    this.itemsRef = db.list('Parking');
   }

  ngOnInit() {
  }
  updateParking(keyy,NomP,Lieu,Distance,nbrPlace,placeDispo,prixJr){
    this.itemsRef.update(keyy,{Nom:NomP,Lieu:Lieu,Distance:Distance,nbrPlace:nbrPlace,placeDispo:placeDispo,prixJr:prixJr})
}
}
