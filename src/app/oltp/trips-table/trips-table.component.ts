import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-trips-table',
  templateUrl: './trips-table.component.html',
  styleUrls: ['./trips-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TripsTableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: Observable<any[]> | undefined = of([]);
  @Input() dataColumns: string[] = [];
  @Output() addItem = new EventEmitter<void>();
  @Output() editItem = new EventEmitter<any>();
  @Output() deleteItem = new EventEmitter<number>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  newDataSource = new MatTableDataSource<Element>();
  expandedElement: any = undefined;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource
        .pipe(take(1))
        .subscribe((response) => {
          this.newDataSource.data = response;
          this.newDataSource.paginator = this.paginator as MatPaginator;
        });
    }

  }

  onAdd(): void {
    this.addItem.next();
  }

  onEdit(element: any): void {
    this.editItem.next(element);
  }

  onDelete(element: any) {
    this.deleteItem.next(element.id);
  }
}
