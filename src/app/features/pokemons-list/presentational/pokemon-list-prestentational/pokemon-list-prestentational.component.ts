import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pokemon-list-prestentational',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatPaginatorModule, CommonModule, MatTableModule, MatSidenavModule, MatDivider],
  templateUrl: './pokemon-list-prestentational.component.html',
  styleUrl: './pokemon-list-prestentational.component.scss'
})
export class PokemonListPrestentationalComponent {
@Input() dataSource: any;
@Input() displayedColumns: string[] = ['id', 'name', 'supertype'];
}
