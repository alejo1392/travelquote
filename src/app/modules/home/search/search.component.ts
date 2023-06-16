import { ConfigManager } from './../services/config.service';
import { ProgramConfig } from './../models/meeting-config.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  programConfig: ProgramConfig;
  configManager: ConfigManager;
  constructor(private http: HttpClient) {
    this.configManager = new ConfigManager(http);
  }

  ngOnInit(): void {
    this.configManager.getConfiguration('meetingsDemo').subscribe((data) => {
      this.programConfig = data;
    });
  }
}
