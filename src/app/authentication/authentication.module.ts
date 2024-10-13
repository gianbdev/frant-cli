import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CommonModule, AuthenticationRoutingModule, LoginModule],
})
export class AuthenticationModule {}
