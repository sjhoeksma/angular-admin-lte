import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextRoutingModule } from './input-text-routing.module';
import { InputTextComponent } from './input-text.component';

import { InputGroupModule, InputTextModule as mkInputTextModule, BoxModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BoxModule,
    InputTextRoutingModule,
    mkInputTextModule,
    InputGroupModule
  ],
  declarations: [InputTextComponent]
})
export class InputTextModule { }
