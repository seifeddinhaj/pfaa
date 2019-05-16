import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
items;
testkey;
itemsRef: AngularFireList<any>;
  constructor(private route: ActivatedRoute,private db:AngularFireDatabase) { 
    this.db.list('reservation',ref => ref.orderByChild('userID').equalTo(this.route.snapshot.params.id)).valueChanges().subscribe(data =>{
      
      this.items=data;
      console.log(this.items)
    });
   this.testkey= this.db.list('reservation',ref => ref.orderByChild('userID').equalTo(this.route.snapshot.params.id)).snapshotChanges().pipe(
      map(
        (changes => 
           changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
         
           )
         )
    )
    this.itemsRef = db.list('reservation');
  }
  valider(key,Rayon,Numero,valider){
    this.itemsRef.update(key,{rayon:Rayon,numero:Numero,valider:valider});

  }
  nonValider(key,Rayon,Numero,valider){
    this.itemsRef.update(key,{rayon:Rayon,numero:Numero,valider:valider});

  }
  ngOnInit() {
  }

}
