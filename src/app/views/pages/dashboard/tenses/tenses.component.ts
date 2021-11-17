// Version OK
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../../data/services/alert.service';
import { TensesService } from '../../../../core/services/tenses.service';
// import { FormVerbComponent } from '../../../components/form-verb/form-verb.component';
import { FormBuilder } from '@angular/forms';

import { VerbCls } from '../../../../data/schema/verb.model';
import { VerbInt } from '../../../../data/schema/verbInt.model';

import { pastIns, presentIns, futureIns, conditionalIns } from '../../../../data/tenses/tens';

@Component({
  selector: 'app-tenses',
  templateUrl: './tenses.component.html',
  styleUrls: ['./tenses.component.css']
})
export class TensesComponent implements OnInit {

  dataSource: any;
  verbs: VerbCls[] = [];

  pastO;
  presentO;
  futureO;
  conditionalO;

  verb: VerbInt;

  constructor(public dialog: MatDialog,
              public alertService: AlertService,
              public tensesService: TensesService,
  ) {
  }

  ngOnInit(): void {
    this.tensesService.getTenses().subscribe(resp => {
      console.log('=========== resp =============== ', resp);

      this.verbs = resp.verbs;
      this.dataSource = this.verbs;

      this.pastO = pastIns;
      this.presentO = presentIns;
      this.futureO = futureIns;
      this.conditionalO = conditionalIns;

      this.generateStrings(this.pastO);
      this.generateStrings(this.presentO);
      this.generateStrings(this.futureO);
      this.generateStrings(this.conditionalO);

    }, error => {
      console.error(error);
      // this.alertService.errorDialog('Ocurrió un error inesperado');
    });
  }

  generateStrings(ten): any {
    let txt: string;
    // let ten: [];
    for ( const element of ten) {
      txt = `Los dinosaurios ${element.name}`;
      txt = `
<tbody>
<tr>
<td>
    ${element.expEng1}
</td>
<td>
    ${element.expSpa1}
</td>
</tr>
<tr>
<td>
    ${element.expEng2}
</td>
<td>
    ${element.expSpa2}
</td>
</tr>
<tr>
<td>
    ${element.expEng3}
</td>
<td>
    ${element.expSpa3}
</td>
</tr>
<tr>
<td>
    ${element.expEng4}
</td>
<td>
    ${element.expSpa4}
</td>
</tr>
<tr>
<td>
    ${element.expEng5}
</td>
<td>
    ${element.expSpa5}
</td>
</tr>
<tr>
<td>
    ${element.expEng6}
</td>
<td>
    ${element.expSpa6}
</td>
</tr>
<tr>
<td>
    ${element.expEng7}
</td>
<td>
    ${element.expSpa7}
</td>
</tr>
<tr>
<td>
    ${element.expEng8}
</td>
<td>
    ${element.expSpa8}
</td>
</tr>
<tr>
<td>
    ${element.expEng9}
</td>
<td>
    ${element.expSpa9}
</td>
</tr>
<tr>
<td>
    ${element.expEng10}
</td>
<td>
    ${element.expSpa10}
</td>
</tr>
<tr>
<td>
    ${element.expEng11}
</td>
<td>
    ${element.expSpa11}
</td>
</tr>
<tr>
<td>
    ${element.expEng12}
</td>
<td>
    ${element.expSpa12}
</td>
</tr>
<tr>
<td>
    ${element.expEng13}
</td>
<td>
    ${element.expSpa13}
</td>
</tr>
<tr>
<td>
    ${element.expEng14}
</td>
<td>
    ${element.expSpa14}
</td>
</tr>
<tr>
<td>
    ${element.expEng15}
</td>
<td>
    ${element.expSpa15}
</td>
</tr>
<tr>
<td>
    ${element.expEng16}
</td>
<td>
    ${element.expSpa16}
</td>
</tr>
<tr>
<td>
    ${element.expEng17}
</td>
<td>
    ${element.expSpa17}
</td>
</tr>
<tr>
<td>
    ${element.expEng18}
</td>
<td>
    ${element.expSpa18}
</td>
</tr>
<tr>
<td>
    ${element.expEng19}
</td>
<td>
    ${element.expSpa19}
</td>
</tr>
<tr>
<td>
    ${element.expEng20}
</td>
<td>
    ${element.expSpa20}
</td>
</tr>
<tr>
<td>
    ${element.expEng21}
</td>
<td>
    ${element.expSpa21}
</td>
</tr>
<tr>
<td>
    ${element.expEng22}
</td>
<td>
    ${element.expSpa22}
</td>
</tr>
<tr>
<td>
    ${element.expEng23}
</td>
<td>
    ${element.expSpa23}
</td>
</tr>
<tr>
<td>
    ${element.expEng24}
</td>
<td>
    ${element.expSpa24}
</td>
</tr>
<tr>
<td>
    ${element.expEng25}
</td>
<td>
    ${element.expSpa25}
</td>
</tr>
<tr>
<td>
    ${element.expEng26}
</td>
<td>
    ${element.expSpa26}
</td>
</tr>
<tr>
<td>
    ${element.expEng27}
</td>
<td>
    ${element.expSpa27}
</td>
</tr>
<tr>
<td>
    ${element.expEng28}
</td>
<td>
    ${element.expSpa28}
</td>
</tr>
<tr>
<td>
    ${element.expEng29}
</td>
<td>
    ${element.expSpa29}
</td>
</tr>
<tr>
<td>
    ${element.expEng30}
</td>
<td>
    ${element.expSpa30}
</td>
</tr>
<tr>
<td>
    ${element.expEng31}
</td>
<td>
    ${element.expSpa31}
</td>
</tr>
<tr>
<td>
    ${element.expEng32}
</td>
<td>
    ${element.expSpa32}
</td>
</tr>
</tbody>
`;
      // return txt;
      console.log('==========================', txt);
    }
  }

}
