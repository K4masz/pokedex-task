import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pokemon-list-prestentational',
  standalone: true,
  imports: [MatListModule, MatPaginatorModule, CommonModule, MatTableModule],
  templateUrl: './pokemon-list-prestentational.component.html',
  styleUrl: './pokemon-list-prestentational.component.scss'
})
export class PokemonListPrestentationalComponent {
  @Input() dataSource: any;
  @Input() displayedColumns: string[] = ['id', 'name', 'supertype', 'types', 'subtypes'];

  @Output() paginationData: EventEmitter<PageEvent> = new EventEmitter()
}
