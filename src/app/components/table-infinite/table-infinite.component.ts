import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TaskFilterModel } from 'src/app/task-filter-model';
import { TaskViewModel } from 'src/app/task-view.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-table-infinite',
  templateUrl: './table-infinite.component.html',
  styleUrls: ['./table-infinite.component.scss']
})
export class TableInfiniteComponent implements OnInit, AfterViewInit {

  //@ViewChild(MatTable) public matTable: MatTable<Element[]>;
  @ViewChild('table', { read: ElementRef }) public matTableRef!: ElementRef;
  public displayedColumns: string[] = ['spaceName', 'name'];
  public dataSource: Observable<TaskViewModel[]>;
  private dataStream: BehaviorSubject<TaskViewModel[]>;
  private numberOfPagesInBuffer: number = 1;
  private firstPage: number = 1;
  private pageSize: number = 10;
  private totalNumberOfPages: number = 100; // input
  filters!: TaskFilterModel;

  public get lastPage(): number {
    return Math.min(this.totalNumberOfPages, this.firstPage + this.numberOfPagesInBuffer - 1);
  }

  constructor(private el: ElementRef,
    private renderer: Renderer2,
    private taskService: TaskService) {
    this.dataStream = new BehaviorSubject<TaskViewModel[]>([]);
    this.dataSource = this.dataStream.asObservable();
  }

  public ngOnInit(): void {
    this.fetchData();
  }

  public ngAfterViewInit(): void {
    fromEvent(this.matTableRef.nativeElement, 'scroll')
      .pipe(debounceTime(700))
      .subscribe((e: any) => this.onTableScroll(e));
  }

  private onTableScroll(e: any): void {
    const tableViewHeight = e.target.offsetHeight; // viewport: ~500px
    const tableScrollHeight = e.target.scrollHeight; // length of all table
    const scrollLocation = e.target.scrollTop; // how far user scrolled

    // If the user has scrolled within 200px of the bottom, add more data
    const scrollThreshold = 10;

    // const scrollUpLimit = scrollThreshold;
    // if (scrollLocation < scrollUpLimit && this.firstPage > 1) {
    //   this.firstPage--;
    //   console.log(`onTableScroll() UP: firstPage decreased to ${this.firstPage}. Now fetching data...`);
    //   this.fetchData();
    //   this.scrollTo(tableScrollHeight / 2 - 2 * tableViewHeight);
    // }

    const scrollDownLimit = tableScrollHeight - tableViewHeight - scrollThreshold;
    if (scrollLocation > scrollDownLimit && this.lastPage < this.totalNumberOfPages) {
      this.firstPage++;
      console.log(`onTableScroll(): firstPage increased to ${this.firstPage}. Now fetching data...`);
      this.fetchData();
      this.scrollTo(tableScrollHeight / 2 + tableViewHeight);
    }
  }

  private fetchData(): void {
    let pageData: TaskViewModel[] = [];
    this.filters = {
      hotelId: 'd16b39e3-88cc-4dd4-8bae-7689a4021541',
      departmentId: 'HOU',
      myTask: false,
      dueDateFrom: new Date('2021-12-15'),
      dueDateTo: new Date('2021-12-15'),
    };
    for (let i = this.firstPage; i <= this.lastPage; i++) {
      this.taskService
        .searchTaskViewModelsWithoutStore(this.filters)
        .subscribe((elem: TaskViewModel[]) => {
          pageData = pageData.concat(elem);
        });
      // pageData = pageData.concat(this.generateFakePageData(i));
    }
    this.dataStream.next(pageData);
  }

  private scrollTo(position: number): void {
    this.renderer.setProperty(this.matTableRef.nativeElement, 'scrollTop', position);
  }

}
