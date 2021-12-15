import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TaskDTO } from './task.dto';
import { TaskSearchRequestV2DTO } from './task-search-request-v2.dto';


@Injectable({
  providedIn: 'root'
})
export class TaskApiV2Service {

  bearertoken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImFwcE5hbWUiOiJRTy1GUk9OVEVORCIsInRlbmFudElkIjoiZTM4MjBkMWQtNTk4Ny00MjVhLTk0NjMtYzdlNmQ2ZmNmOWNjIiwiaXNzIjoiUU8tQkFDS0VORCIsImVtcGxveWVlSWQiOiJlYmQ0N2ZhZi0zMzJiLTQxYmEtYTA0NC1hNDNmMDc3ZmJmMTIiLCJleHAiOjE2Mzk1Njc2NzksImlhdCI6MTYzOTU2NDA3OSwiYXV0aG9yaXRpZXMiOiJST0xFX0FETUlOIn0.pQoAGE7ZCAt07msH49nNgFpxzfPxSoqbQbiwCF5K5sHS93-9-zOkySThaKHF1SQhHcSQp3Z-0cJ5TnyLhgPx4g';

  public constructor(public readonly httpClient: HttpClient) {
  }

  public searchTasks(filters: TaskSearchRequestV2DTO): Observable<TaskDTO[]> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.bearertoken
    });


    return this.httpClient.post<TaskDTO[]>(
      `${environment.API_ROOT}/v2/task/search`,
      filters,
      { headers: header })
      .pipe(catchError(err => throwError(err)));
  }
}
