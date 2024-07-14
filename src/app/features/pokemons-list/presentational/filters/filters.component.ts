import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

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

  filterForm: FormGroup = this.formBuilder.group({
    superTypes: [''],
    types: [''],
    subTypes: ['']
  })

  resetForm(){
    this.filterForm.reset();
  }

  submit(){
    console.log(this.filterForm.value);
  }
}
