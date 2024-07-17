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
    if (value) {
      this.populateForm(value)
    }
    this._card = value;
    this.similarCardsTabLabel = `Similar Cards (artist:${this._card?.artist})`
  };
  _card!: Card | null;
  get card(): Card | null {
    return this._card
  }
  @Input() similarCards: Card[] = [];

  @Input() attacksTableDisplayedColumns: string[] = ['name', 'damage', 'cost', 'convertedEnergyCost'];
  @Input() similarCardsDisplayedColumns: string[] = ['id', 'name', 'supertype']

  @Input() superTypes: SuperType[] = [];
  @Input() types: Type[] = [];
  @Input() subTypes: SubType[] = [];

  @Input() editable: boolean = false;
  @Input() showSimilarCardsTab: boolean = false;

  @Output() cardUpdateEvent = new EventEmitter<Card>();
  @Output() closeEvent = new EventEmitter<void>();
  @Output() rowClickEvent: EventEmitter<[number, Card]> = new EventEmitter();

  editMode = false;
  similarCardsTabLabel: string = `Similar Cards`

  cardForm = this.formBuilder.group<Partial<Card>>({
    name: '',
    hp: '',
    supertype: '',
    types: [],
    subtypes: []
  },);

  private populateForm(value: Partial<Card>) {
    this.cardForm.reset();
    this.cardForm.patchValue(value);
    this.cardForm.disable();
  }

  edit() {
    this.editMode = true;
    this.cardForm.enable();
  }

  save() {
    this.editMode = false;
    this.cardForm.disable();
    this.cardUpdateEvent.emit({ ...this._card, ...this.cardForm.value } as Card);
  }

  discard() {
    this.editMode = false;
    if (this._card)
      this.populateForm(this._card);
  }

  close() {
    this.editMode = false;
    this.closeEvent.emit();
  }


}
