import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProgramConfig } from '../models/meeting-config.model';

export class ConfigManager {
  public urlServer: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getConfiguration(programUrl: string): Observable<ProgramConfig> {
    return this.http.get<ProgramConfig>(
      `${this.urlServer}/config/${programUrl}`,
      {}
    );
  }
}
