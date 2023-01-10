import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: any[] | Observable<any[]> = [];
  @Input() dataColumns: string[] = [];
  @Output() addItem = new EventEmitter<void>();
  @Output() editItem = new EventEmitter<any>();

  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = [...this.dataColumns, 'actions'];
  }

  onAdd(): void {
    this.addItem.next();
  }

  onEdit(element: any): void {
    this.editItem.next(element);
  }
}
