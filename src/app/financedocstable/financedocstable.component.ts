import {Component, OnInit} from '@angular/core';
import {Financedoc} from '../model/financedoc';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';
import {FindocService} from '../services/findoc.service';

@Component({
  selector: 'app-financedocstable',
  templateUrl: './financedocstable.component.html',
  styleUrls: ['./financedocstable.component.css']
})
export class FinancedocstableComponent implements OnInit {

  financeDocs: Financedoc[];
  itemCollection: AngularFirestoreCollection<Financedoc>;

  constructor(private firestore: AngularFirestore, private authService: AuthService, private findocService: FindocService) {
    // this.financeDocs = this.findocService.getUsers();

    this.findocService.getUsers().subscribe(data => {
      this.financeDocs = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Financedoc;
      });
    });
    // this.authService.userEmitter.subscribe(user => {
    //   this.itemCollection = this.firestore.collection<Financedoc>('users/' + this.authService.getUserId() + '/findocs', ref => {
    //     // Compose a query using multiple .where() methods
    //     return ref;
    //   });
    //   this.financeDocs = this.itemCollection.valueChanges();
    // });
  }

  ngOnInit(): void {
  }

  update(item: Financedoc): void {

  }
}
