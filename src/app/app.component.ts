import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CallesServiceService } from './calles-service.service';

export interface UserData {
  ID: number;
  TIPO_VIA: string;
  VIA: string;
  LAT: string;
  LOG: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnDestroy, OnInit {
  title = 'p4';
  displayedColumns: string[] = ['ID', 'TIPO_VIA', 'VIA', 'LAT', 'LOG'];
  dataSource: MatTableDataSource<UserData>;
  current = 0;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  calles: any = [];

  constructor(
    protected callesService: CallesServiceService
  ) {
    this.dataSource = new MatTableDataSource(this.calles);
  }
  ngOnInit() {
    this.callesService.getCalles()
    .subscribe(
      (data) => { // Success

        this.calles = data;
        // console.log (this.calles);
        // Calling the DT trigger to manually render the table
        // this.dtTrigger.next();

        // console.log(this.calles);
        this.dataSource = new MatTableDataSource(this.calles);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.error(error);
      }
    );

  }
  onRowClicked(row) {
    console.log('Row clicked: ', row);
    this.current = row.ID;
    console.log(this.current);
}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    // this.dtTrigger.unsubscribe();

  }
}

