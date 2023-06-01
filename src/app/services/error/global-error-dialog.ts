import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalErrorDialogComponent } from 'src/app/shared/components/global-error-dialog/global-error-dialog.component';
import { ProblemDetails } from 'src/app/shared/models/problem-details.model';
@Injectable()
export class GlobalErrorDialogService {
  private opened = false;

  constructor(private dialog: MatDialog) {}

  openDialog(message: ProblemDetails): void {
    if (!this.opened) {
      this.opened = true;
      const dialogRef = this.dialog.open(GlobalErrorDialogComponent, {
        data: message,
        maxHeight: '100%',
        width: '540px',
        maxWidth: '100%',
        disableClose: false,
        hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }
}
