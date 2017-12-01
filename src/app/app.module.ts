import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminService } from '../app/services/admin.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDirective } from './directives/admin.directive';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDirective,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'employee',
        component: EmployeeComponent
      }
    ])
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
