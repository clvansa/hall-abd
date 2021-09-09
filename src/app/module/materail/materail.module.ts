import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import {MatButtonModule} from '@angular/material/button';




const MaterailModules =
  [
    DragDropModule,
    CdkAccordionModule,
    MatButtonModule
  ]


@NgModule({
  declarations: [],
  imports: [
    MaterailModules,
  ],
  exports: [
    MaterailModules
  ]
})
export class MaterailModule { }
