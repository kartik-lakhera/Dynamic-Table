import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports:[
    SharedComponent
  ]
})
export class SharedModule { }
