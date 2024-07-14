import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Card } from '../../../../core/models/model';
import { SubType, SuperType, Type } from '../../../../core/models/util-types';
@Component({
  selector: 'app-pokemon-details-presentational',
  standalone: true,
  imports: [MatTabsModule, MatChipsModule, MatTableModule, JsonPipe, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './pokemon-details-presentational.component.html',
  styleUrl: './pokemon-details-presentational.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailsPresentationalComponent {
  formBuilder = inject(FormBuilder)

  @Input() set card(value: Card | null) { //TODO: refactor
    if (value){
      this.populateForm(value)
  }
    this._card = value;
  };
  _card!: Card | null;
  get card(): Card | null {
    return this._card
  }
  @Input() similarCards: Card[] = [];
  @Input() attacksTableDisplayedColumns: string[] = ['name', 'damage', 'cost', 'convertedEnergyCost'];

  @Input() superTypes: SuperType[] = [];
  @Input() types: Type[] = [];
  @Input() subTypes: SubType[] = [];

  @Output() editedCardData = new EventEmitter<Partial<Card>>();

  editMode = false;

  cardForm = this.formBuilder.group<Partial<Card>>({
    name: '',
    hp: '',
    supertype: '',
    types: [],
    subtypes: []
  },);

  private populateForm(value: Partial<Card>){
    this.cardForm.patchValue(value);
    this.cardForm.disable();
  }

  edit(){
    this.editMode = true;
    this.cardForm.enable();
  }

  save(){
    this.editMode = false;
    this.cardForm.disable();
    console.log(this.cardForm.value) //TODO:Remove
    this.editedCardData.emit(this.cardForm.value as Partial<Card>);
  }

  discard(){
    if(this._card)
    this.populateForm(this._card);
  }


}
