import { Component, OnInit } from '@angular/core';
import { CrudParkingService } from 'src/app/Services/crud-parking.service';
import { Parking } from 'src/app/models/parking.model';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {
parkings:Observable<any>;
parking;
itemsRef: AngularFireList<any>;

  constructor(private db : AngularFireDatabase) { 
    this.itemsRef = db.list('Parking');
    this.parkings= this.db.list("Parking").snapshotChanges().pipe(
      map(
        (changes => 
           changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
         
           )
         )
    )
  }

  ngOnInit() {
   
  }
  deleteParking(key){
    this.itemsRef.remove(key)
    } 


}
