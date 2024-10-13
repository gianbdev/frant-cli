import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CoreComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule, HttpClientModule],

  providers: [],
})
export class CoreModule {}
