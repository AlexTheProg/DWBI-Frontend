import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditDriverComponent } from './oltp/add-edit-driver/add-edit-driver.component';
import { AddEditInvoiceComponent } from './oltp/add-edit-invoice/add-edit-invoice.component';
import { AddEditLocationComponent } from './oltp/add-edit-location/add-edit-location.component';
import { AddEditTripComponent } from './oltp/add-edit-trip/add-edit-trip.component';
import { AddEditClientComponent } from './oltp/edit-add-client/add-edit-client.component';
import { OltpComponent } from './oltp/oltp.component';
import { TableHeaderPipe } from './shared/table-header.pipe';
import { TableComponent } from './shared/table/table.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { TripsTableComponent } from './oltp/trips-table/trips-table.component';


@NgModule({
  declarations: [
    AppComponent,
    OltpComponent,
    TableComponent,
    AddEditDriverComponent,
    TableHeaderPipe,
    WarehouseComponent,
    AddEditClientComponent,
    AddEditLocationComponent,
    AddEditInvoiceComponent,
    AddEditTripComponent,
    TripsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    HttpClientModule,
    FormsModule,
    NgxMatMomentModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
