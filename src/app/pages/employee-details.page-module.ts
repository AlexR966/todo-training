import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import {ActivatedRoute} from '@angular/router';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeeDetailsPage,
        }
      ])],
  	declarations: [EmployeeDetailsPage],
  	providers: [],
  	exports: [] })
export class EmployeeDetailsPageModule {
}
