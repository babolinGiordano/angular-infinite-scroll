import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { TaskApiV2Service } from './task-api-v2.service';
import { BaseDestroyable } from './base.destroyable';
import { SpaceCategories } from './space-categories';
import { TaskSearchRequestDTO } from './task-search-request.dto';
import { TaskViewModel } from './task-view.model';
import { TaskDTO } from './task.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseDestroyable {

  private readonly hasData = new BehaviorSubject<boolean>(true);
  public hasData$ = this.hasData.asObservable();

  public constructor(
    private readonly v2ApiService: TaskApiV2Service
  ) {
    super();
  }


  public searchTasksWithoutStore(filters: TaskSearchRequestDTO): Observable<TaskDTO[]> {
    return this.v2ApiService.searchTasks({
      hotelId: filters.hotelId,
      spaceId: filters.spaceId,
      employeeId: filters.employeeId,
      departmentId: filters.departmentId === 'ALL' ? null : filters.departmentId,
      spaceCategory: (filters.spaceCategory === SpaceCategories.ALL) ? undefined : filters.spaceCategory,
      statuses: filters.statuses,
      qualityControl: filters.qualityControl,
      myTask: filters.myTask,
      dueDateFrom: '2021-12-15',
      dueDateTo: '2021-12-15',
      createdAtFrom: filters.createdAtFrom,
      createdAtTo: filters.createdAtTo,
      doneAtFrom: filters.doneAtFrom,
      doneAtTo: filters.doneAtTo,
      taskTemplateName: filters.taskTemplateName,
      filterByCleaningTasks: filters.filterByCleaningTasks,
      filterByCleaningTasksInspected: filters.filterByCleaningTasksInspected,
      filterBySanitizationTasks: filters.filterBySanitizationTasks,
      filterByNotDoneTasks: filters.filterByNotDoneTasks,
      filterByDepartureCleaning: filters.filterByDepartureCleaning,
      filterByVacantCleaning: filters.filterByVacantCleaning,
      filterByQuickCheckCleaning: filters.filterByQuickCheckCleaning,
      filterByQuickCheck: filters.filterByQuickCheck,
      onlyFaultTasks: filters.onlyFaultTasks,
      filterByOtherTasks: filters.filterByOtherTasks,
      filterByInHouseCleaning: filters.filterByInHouseCleaning,
      inProgressAt: filters.inProgressAt,
      stillOpenAt: filters.stillOpenAt
    });
  }

  public searchTaskViewModelsWithoutStore(filters: TaskSearchRequestDTO): Observable<TaskViewModel[]> {
    return this.searchTasksWithoutStore(filters).pipe(mergeMap(tasks => {
      return of(tasks.map(t => new TaskViewModel(t)));
    }));
  }


}
