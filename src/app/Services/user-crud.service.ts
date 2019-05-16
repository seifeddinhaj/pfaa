import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {
private basepath:string="profile/0N3na4Yo3pOrxPsAflGohQpPBl03";
users:Observable<any>;
  constructor(private db : AngularFireDatabase) {

   }
getUsers()
{
this.users=this.db.object("profile/0N3na4Yo3pOrxPsAflGohQpPBl03" ).valueChanges();
console.log(this.users);
return this.users;
}

}
