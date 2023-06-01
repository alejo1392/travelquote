import { Component, Inject, NgZone } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProblemDetails } from '../../models/problem-details.model';

@Component({
  selector: 'app-global-error-dialog',
  templateUrl: './global-error-dialog.component.html',
  styleUrls: ['./global-error.dialog.component.scss'],
})
export class GlobalErrorDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ProblemDetails,
    private router: Router,
    private zone: NgZone
  ) {}

  public showDetails = false;

  toogleShowDetails(): void {
    this.zone.run(() => {
      this.showDetails = !this.showDetails;
    });
  }

  goHome(): void {
    this.zone.run(() => {
      this.router.navigate(['/']);
    });
  }
}
