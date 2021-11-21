import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  disabled: boolean = true;
  value1!: string;
  rememberPC: string[] = [];

  loginForm = new FormGroup({
    id: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        id: new FormControl(),
        password: new FormControl(),
    })
  }

  onFormSubmit() {
    let LoginData = this.loginForm.value;
    console.log(LoginData);
  }
}
