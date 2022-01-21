import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-stop-add',
  templateUrl: './stop-add.component.html',
  styleUrls: ['./stop-add.component.css']
})
export class StopAddComponent implements OnInit {

  form: any = {
    fare: null,
    code: null,
    name: null,
    detail: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { fare, code, name, detail } = this.form;

    this.authService.registerAgency(fare, code, name,detail).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
