import { ProblemDetails } from './../../models/common/error.model';
import { Router } from '@angular/router';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GlobalErrorDialogService } from './global-error-dialog';
import { ConnectionOnlineService } from '../connection-online/connection-online.service';
import { environment } from 'src/environments/environment';
import { apiUrls } from 'src/app/shared/constants/apiurl.const';
import { AuthorizeService } from '../authentication/authorize.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private globalErrorDialogService: GlobalErrorDialogService,
    private connectionOnlineService: ConnectionOnlineService,
    private authorizeService: AuthorizeService
  ) { }

  handleError(error: Error | HttpErrorResponse | any): void {

    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    if (chunkFailedMessage.test(error.message)) {
      if (confirm("Nueva Version Disponible. Recargar Pagina porfavor")) {
        window.location.reload();
      }
    }

    if (this.connectionOnlineService.isConnected) {
      this.NormalErrors(error);
      this.HttpErrors(error);
    }
    return;
  }

  private HttpErrors(error: any): void {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 400:

          break;
        case 401:
          this.authorizeService.clearLocalStorage();
          window.location.reload();
          break;

        case 409:

          break;

        default:
          this.CreateProblemDetailsHttp(error);
          break;
      }
    }
  }

  private NormalErrors(error: any): void {
    if (error instanceof Error) {
      const castError: any = error;
      if (castError.rejection) {
        switch (castError.rejection.status) {
          case 400:

            break;

          case 401:
            this.authorizeService.clearLocalStorage();
            window.location.reload();
            break;

          default:
            this.CreateProblemDetailsHttp(castError.rejection);
            break;
        }
      } else {
        this.CreateProblemDetails(error);
      }
    }
  }

  private CreateProblemDetails(error: Error): void {
    const problemDetails = new ProblemDetails();
    problemDetails.instance = 'Front-End';
    problemDetails.status = 500;
    problemDetails.title = 'Internal exception';
    problemDetails.detail = error.stack || error.message;
    console.log(problemDetails);
    this.globalErrorDialogService.openDialog(problemDetails);
  }

  private CreateProblemDetailsHttp(error: HttpErrorResponse): void {
    const problemDetails = new ProblemDetails();
    problemDetails.instance = 'Back-End';
    problemDetails.status = error.status;
    problemDetails.title = error.statusText;
    problemDetails.detail = error.message;
    console.log(problemDetails);
    this.globalErrorDialogService.openDialog(problemDetails);
  }
}

