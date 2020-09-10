import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AuthService} from '../auth/auth.service';
import {Financedoc} from '../model/financedoc';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindocService {

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
  }

  createFinDoc(data: Financedoc): Promise<void> {
    return new Promise<any>((resolve, reject) => {
        console.log('starting to save' + this.authService.getUserId());
        this.firestore.collection('users').doc(this.authService.getUserId())
          .collection('findocs')
          .add(data.toJson())
          .then(
            res => {
              console.log(res);
            },
            err => {
              console.log(err);
            }
          );
      }
    );
  }

  getUsers(): Observable<any> {

    return this.firestore.collection('/users/' + this.authService.getUserId() + '/findocs').snapshotChanges();
    // return this.firestore.collection('/users/' + this.authService.getUserId() + '/findocs').snapshotChanges().toPromise();
    // return new Promise<any>((resolve, reject) => {
    //   this.firestore.collection('/users/' + this.authService.getUserId() + '/findocs').snapshotChanges()
    //     .subscribe(snapshots => {
    //       resolve(snapshots);
    //     });
    // });
  }

  getFinDoc(id: string): Promise<any> {
    const userId = this.authService.getUserId();
    console.log('logging userid');
    console.log(userId);
    return this.firestore.collection('/users/').doc(userId).collection('/findocs/').doc(id).get().toPromise();
    // return this.firestore.doc('/users/' + this.authService.getUserId() + '/findocs/' + id).get().toPromise();

  }
}
