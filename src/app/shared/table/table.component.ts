import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource: Observable<any[]> | undefined = of([]);
  @Input() dataColumns: string[] = [];
  @Output() addItem = new EventEmitter<void>();
  @Output() editItem = new EventEmitter<any>();
  @Output() deleteItem = new EventEmitter<number>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = [];
  newDataSource = new MatTableDataSource<Element>();

  ngOnInit() {
    this.displayedColumns = [...this.dataColumns, 'actions'];
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

  onDelete(element:any) {
    this.deleteItem.next(element.id);
  }
}
