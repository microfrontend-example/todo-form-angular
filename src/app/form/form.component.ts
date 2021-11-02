import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'tf-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  todoControl: FormControl = new FormControl(null, Validators.required);
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('test');
  }

  addNew() {
    if (this.todoControl.invalid) return;
    console.log(this.todoControl.value);
  }

  redirect(): void {
    this.router.navigate(['/test']);
  }
}
