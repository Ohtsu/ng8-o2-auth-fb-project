import { NgModule } from '@angular/core';
import {
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatSnackBarModule,
   MatSidenavModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports: [
            MatNativeDateModule,
            MatDatepickerModule,
            MatIconModule,
            MatButtonModule,
            MatCheckboxModule,
            MatToolbarModule,
            FormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatListModule,
            MatRadioModule,
            MatOptionModule,
            MatSelectModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatDividerModule,
            MatSnackBarModule,
           MatSidenavModule
        ],

exports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatSnackBarModule,
   MatSidenavModule
]
})

export  class  MyMaterialModule {}