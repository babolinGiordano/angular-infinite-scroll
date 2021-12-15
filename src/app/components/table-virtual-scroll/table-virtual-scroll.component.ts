import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { TaskFilterModel } from 'src/app/task-filter-model';
import { TaskViewModel } from 'src/app/task-view.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-table-virtual-scroll',
  templateUrl: './table-virtual-scroll.component.html',
  styleUrls: ['./table-virtual-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableVirtualScrollComponent {
  displayedColumns: string[] = ['spaceName', 'name'];

  title = 'app';
  // myPhotosList: Photos[] = [];
  dataSource: TaskViewModel[] = [];
  filters!: TaskFilterModel;
  page: number = 1;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    // To call api for initial image rendering
    this.filters = {
      hotelId: 'd16b39e3-88cc-4dd4-8bae-7689a4021541',
      departmentId: 'HOU',
      myTask: false,
      dueDateFrom: new Date('2021-12-15'),
      dueDateTo: new Date('2021-12-15'),
    };

    this.taskService
      .searchTaskViewModelsWithoutStore(this.filters)
      .subscribe((res) => {
        this.dataSource = res;

      });
  }

  // To get image data from api
  getPhotos() {
    console.log(this.page);
    this.filters = {
      hotelId: 'd16b39e3-88cc-4dd4-8bae-7689a4021541',
      departmentId: 'HOU',
      myTask: false,
      dueDateFrom: new Date('2021-12-15'),
      dueDateTo: new Date('2021-12-15'),
    };

    this.taskService
      .searchTaskViewModelsWithoutStore(this.filters)
      .subscribe((res) => {
        this.dataSource = this.dataSource.concat(res);
        console.log(this.dataSource);

      });
  }


  // When scroll down the screen
  onScroll() {
    console.log("Scrolled");
    this.page = this.page + 1;
    this.getPhotos();
  }

}
