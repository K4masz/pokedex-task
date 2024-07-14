import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

export interface FilterValues{
  superType: string | null;
  types: string[] | null;
  subTypes: string[] | null;
}

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  formBuilder = inject(FormBuilder);

  @Input() types: string[] = [];
  @Input() subTypes: string[] = [];
  @Input() superTypes: string[] = [];

  @Output() filtersChange: EventEmitter<FilterValues> = new EventEmitter();

  filterForm: FormGroup = this.formBuilder.group({
    superType: null,
    types: [null],
    subTypes: [null]
  })

  changesSubscription = this.filterForm.valueChanges.pipe(
    takeUntilDestroyed(),
  ).subscribe((values:FilterValues) => this.filtersChange.emit(values))

  resetForm(){
    this.filterForm.reset();
  }
}
