import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { TaskFilterModel } from './task-filter-model';
import { TaskViewModel } from './task-view.model';
import { TaskService } from './task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  readonly displayedColumns = ['spaceName', 'currentReservation', 'nextReservation', 'name', 'assigneeName'];

  tasks: TaskViewModel[] = [];
  filters!: TaskFilterModel;
  dtOptions: DataTables.Settings = {};

  // public dataSource$!: Observable<any[]>;
  public matDataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private changeDetectorRef: ChangeDetectorRef,
    private taskService: TaskService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.matDataSource.paginator = this.paginator;
    // // this.matDataSource.sort = this.sort;

    // this.filters = {
    //   hotelId: 'd16b39e3-88cc-4dd4-8bae-7689a4021541',
    //   departmentId: 'HOU',
    //   myTask: false,
    //   dueDateFrom: new Date('2021-12-01'),
    //   dueDateTo: new Date('2021-12-01'),
    // };

    // this.taskService.searchTaskViewModelsWithoutStore(this.filters).subscribe(data => {
    //   console.log(data);

    //   this.matDataSource.data = data;

    //   // The important part:
    //   this.changeDetectorRef.detectChanges();
    // });

  }
}



