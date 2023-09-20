import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cmsy-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDataForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildUserForm();
  }

  buildUserForm() {
    this.userDataForm = this.formBuilder.group({
      user_full_name: [null, Validators.required],
      user_bio: [null, Validators.required],
      user_email: [null, Validators.required],
    })
  }

  save() {
    /**
     * Get user data from Database using the authenticated ID
     * if user data
     *    👉️ update
     *    👉️ create new
     */
  }
}
