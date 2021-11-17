import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TensesRoutingModule } from './tenses-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import {TensesComponent} from './tenses.component';

import {MatChipsModule} from '@angular/material/chips';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ TensesComponent ],
  imports: [
    CommonModule,
    TensesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatSelectModule,

    MatChipsModule,
    ScrollingModule,
  ]
})
export class TensesModule { }
