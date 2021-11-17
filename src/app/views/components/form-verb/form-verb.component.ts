import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TensesService } from '../../../core/services/tenses.service';
import { AlertService } from '../../../data/services/alert.service';
import { VerbInt } from '../../../data/schema/verbInt.model';

export interface DialogData {
  verbInt: VerbInt;
}

@Component({
  selector: 'app-form-verb',
  templateUrl: './form-verb.component.html',
  styleUrls: ['./form-verb.component.css']
})
export class FormVerbComponent implements OnInit {

  verb: FormGroup;

  constructor(public formBuild: FormBuilder,
              public dialogRef: MatDialogRef<FormVerbComponent>,
              public tensesService: TensesService,
              public alertService: AlertService,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit(): void {
    this.verb = this.formBuild.group({
      eBaseForm: ['', Validators.required],
      ePast: ['', Validators.required],
      eParticiple: ['', Validators.required],
      eGerund: ['', Validators.required],
      ePresent: ['', Validators.required],
      sBaseForm: ['', Validators.required],
      sParticiple: ['', Validators.required],
      sGerund: ['', Validators.required],
      sPast: ['', Validators.required],
      sPresent: ['', Validators.required],
      sFuture: ['', Validators.required],
      sConditional: ['', Validators.required],
      spPastI: ['', Validators.required],
      spPastYou: ['', Validators.required],
      spPastUs: ['', Validators.required],
      spPastThey: ['', Validators.required],
      spPresentI: ['', Validators.required],
      spPresentYou: ['', Validators.required],
      spPresentUs: ['', Validators.required],
      spPresentThey: ['', Validators.required],
      spFutureI: ['', Validators.required],
      spFutureYou: ['', Validators.required],
      spFutureUs: ['', Validators.required],
      spFutureThey: ['', Validators.required],
      spConditionalYou: ['', Validators.required],
      spConditionalUs: ['', Validators.required],
      spConditionalThey: ['', Validators.required],
    });
  }

  cteVerb(): any {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
