import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth/auth.service';
import {FindocService} from '../services/findoc.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService, private findocService: FindocService) { }

  ngOnInit(): void {
  }

  saveData(): void {

    // this.findocService.createFinDoc({ description: 'test' });
  }
}
