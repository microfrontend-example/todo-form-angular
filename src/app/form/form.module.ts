import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./components/test/test.module').then((m) => m.TestModule),
  },
];

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class FormModule {}
