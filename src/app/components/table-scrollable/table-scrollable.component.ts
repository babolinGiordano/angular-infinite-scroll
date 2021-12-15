import { Component, OnInit } from '@angular/core';
import { TaskFilterModel } from 'src/app/task-filter-model';
import { TaskViewModel } from 'src/app/task-view.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-table-scrollable',
  templateUrl: './table-scrollable.component.html',
  styleUrls: ['./table-scrollable.component.scss']
})
export class TableScrollableComponent implements OnInit {

  public displayedColumns: string[] = ['spaceName', 'name'];
  filters!: TaskFilterModel;
  dataSource: TaskViewModel[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.filters = {
      hotelId: 'd16b39e3-88cc-4dd4-8bae-7689a4021541',
      departmentId: 'HOU',
      myTask: false,
      dueDateFrom: new Date('2021-12-15'),
      dueDateTo: new Date('2021-12-15'),
    };

    this.taskService
      .searchTaskViewModelsWithoutStore(this.filters)
      .subscribe((elem: TaskViewModel[]) => {
        this.dataSource = elem;
      });
  }

  onTableScroll(e: any) {
    const tableViewHeight = e.target.offsetHeight; // viewport: ~500px
    const tableScrollHeight = e.target.scrollHeight; // length of all table
    const scrollLocation = e.target.scrollTop; // how far user scrolled

    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      this.filters = {
        hotelId: 'd16b39e3-88cc-4dd4-8bae-7689a4021541',
        departmentId: 'HOU',
        myTask: false,
        dueDateFrom: new Date('2021-12-15'),
        dueDateTo: new Date('2021-12-15'),
      };

      this.taskService
        .searchTaskViewModelsWithoutStore(this.filters)
        .subscribe((elem: TaskViewModel[]) => {
          this.dataSource = this.dataSource.concat(elem);
        });
    }
  }

}
