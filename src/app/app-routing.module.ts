import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';

const routes: Routes = [{ 
        path: 'home', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'about-us', 
        loadChildren: () => AboutUsPageModule
      },
  { 
        path: 'pracownik/:name', 
        loadChildren: () => EmployeeDetailsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
