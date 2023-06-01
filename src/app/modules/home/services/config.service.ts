import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class GoalsManager {
  public urlServer: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getConfiguration(): Observable<ProgramConfig> {
    let params;
    if (filter) {
      params = new HttpParams({ fromString: filter.qsstringify() });
    }
    return this.http.get<meetingConfig>(
      `${this.crudService.urlServer}${apiUrls.goalsApi}/teams`,
      { params }
    );
  }
}
