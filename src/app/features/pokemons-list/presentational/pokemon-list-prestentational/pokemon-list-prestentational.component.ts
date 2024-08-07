import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Card } from '../../../../core/models/model';

@Component({
  selector: 'app-pokemon-list-prestentational',
  standalone: true,
  imports: [MatListModule, MatPaginatorModule, CommonModule, MatTableModule],
  templateUrl: './pokemon-list-prestentational.component.html',
  styleUrl: './pokemon-list-prestentational.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListPrestentationalComponent {
  @Input() dataSource: any;
  @Input() displayedColumns: string[] = ['id', 'name', 'supertype', 'types', 'subtypes'];

  @Output() paginationData: EventEmitter<PageEvent> = new EventEmitter();
  @Output() rowClickEvent: EventEmitter<[number, Card]> = new EventEmitter();
}
