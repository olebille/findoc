import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {FindocService} from '../services/findoc.service';
import {Financedoc} from '../model/financedoc';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-financedocinput',
  templateUrl: './financedocinput.component.html',
  styleUrls: ['./financedocinput.component.css']
})
export class FinancedocinputComponent implements OnInit {
  form: FormGroup;
  @Input() finDoc: Financedoc;
  description = new FormControl('', Validators.required);
  amount = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);

  constructor(private theActivatedRoute: ActivatedRoute, fb: FormBuilder, private findocService: FindocService) {
    this.form = fb.group({
      description: this.description,
      amount: this.amount,
      date: this.date
    });
  }

  ngOnInit(): void {
    this.getFindocDetail();
  }

  onSubmitModelBased(): void {
    console.log('model-based form submitted');
    console.log(this.description.value);
    console.log(this.amount.value);
    const doc = new Financedoc();
    doc.description = this.description.value;
    doc.amount = this.amount.value;
    doc.date = this.date.value;
    if (this.finDoc) {
      this.findocService.updateFinDoc(this.finDoc.id, doc);
    } else {
      this.findocService.createFinDoc(doc);
    }
    // console.log(this.form);
  }

  getFindocDetail(): void {
    const id = this.theActivatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.findocService.getFinDoc(id + '').then(item => {
        if (item.exists) {
          console.log(item.data());
          this.finDoc = item.data();
          this.finDoc.id = id;
          this.description.setValue(this.finDoc.description);
          this.amount.setValue(this.finDoc.amount);
          this.date.setValue(this.finDoc.date.toDate());
        }
      });
    }
    // if (doc.exists ) {
    //   this.finDoc =  doc.data;
    //   this.finDoc.id = doc.id;
    //   this.description.setValue(this.finDoc.description);
    //   this.amount.setValue('999888');
    // }
    // this.description.setValue(hero.descripton);
    // this.amount.setValue(hero.amount);
  }
}
