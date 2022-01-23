import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profile: User={
    id:0,
    firstname: '',
    lastname:'',
    email:'',
    password: '',
    mobilenumber: ''
  };
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    mobilenumber: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  constructor(private userService: UserService, private actRoute:ActivatedRoute) {
    this.profile.id = this.actRoute.snapshot.params.id
   }
  get email(){
    return this.profileForm.get('email')
  }
  get firstname(){
    return this.profileForm.get('firstname')
  }
  get lastname(){
    return this.profileForm.get('lastname')
  }
  get mobilenumber(){
    return this.profileForm.get('mobilenumber')
  }
  get password(){
    return this.profileForm.get('password')
  }

  ngOnInit(){
    this.getProfile()
  }
  getProfile(){
    this.userService
    .getUserProfile(this.profile.id)
    .subscribe(res => {
      this.profile = res
    })
  }
  onSubmit(){
    
    this.updateProfile()
  }
  updateProfile(){
    const values = {
      ...this.profileForm.value
    }
    this.userService.updateProfile(this.profile.id, values)
  }


}
