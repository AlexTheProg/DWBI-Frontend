import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OltpComponent } from './oltp/oltp.component';
import { TableComponent } from './shared/table/table.component';
import { AddEditDriverComponent } from './oltp/add-edit-driver/add-edit-driver.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TableHeaderPipe } from './shared/table-header.pipe';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { AddEditClientComponent } from './oltp/edit-add-client/add-edit-client.component';
import { AddEditLocationComponent } from './oltp/add-edit-location/add-edit-location.component';
import { AddEditInvoiceComponent } from './oltp/add-edit-invoice/add-edit-invoice.component';
import { AddEditTripComponent } from './oltp/add-edit-trip/add-edit-trip.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkTableModule } from '@angular/cdk/table';


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
    AddEditTripComponent
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
