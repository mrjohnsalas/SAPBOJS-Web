import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AppSettingsService } from './app-settings.service';
import { ToastrType } from '../_models/toastr-type.enum';
import { ServiceException } from '../_models/service-exception';
import { EntityType } from '../_models/entity-type.enum';
import { StatusType } from '../_models/status-type.enum';
import swal from 'sweetalert';

declare function sendToastr(toastrType: ToastrType, message: string, title: string): any;

@Injectable({
  providedIn: 'root'
})
export class AppHelperService {

    constructor(private appSettingsService: AppSettingsService) { }

    getStatusTypeColor(entityType: EntityType, statusType: StatusType): string {
        switch (entityType) {
            case EntityType.FailureCause:
            case EntityType.FailureImpact:
            case EntityType.FailureMechanism:
            case EntityType.FailureSeverity:
            case EntityType.FailureType:
                switch (statusType) {
                    case StatusType.Activo:
                        return 'primary';
                    case StatusType.Anulado:
                        return 'danger';
                    default:
                        return '';
                }
            default:
                return '';
        }
    }

    getRouterLinkValue(parentPath: string, action: string, id: any): string {
        let path = '/' + parentPath + '/';
        if (action) {
            path += action + '/';
        }
        path += id;
        return path;
    }

    getServiceExceptionObject(errorResponse: HttpErrorResponse): ServiceException {
        // Validations error
        if (errorResponse.error.errors) {
            const ex = new ServiceException();
            ex.message = this.appSettingsService.ErrorMessage;
            const validation = errorResponse.error.errors;
            const fields = Object.keys(validation);
            fields.forEach(f => {
                ex.message += validation[f].join('\n');
            });
            return ex;
        }
        // Not Found error
        if (errorResponse.status === 404) {
            const ex = new ServiceException();
            ex.message = `${this.appSettingsService.ErrorMessage} ${this.appSettingsService.NotFound}`;
            ex.isNotFoundError = true;
            return ex;
        }
        // Others errors
        return errorResponse.error;
    }

    sendDeleteQuestionAlert(): Promise<any> {
        return swal({
            title: this.appSettingsService.QuestionTitle,
            text: this.appSettingsService.DeleteQuestion,
            icon: 'error',
            buttons: [this.appSettingsService.CancelAction, this.appSettingsService.DeleteAction],
            dangerMode: true
        });
    }

    sendCanExitAlert(): Promise<any> {
        return swal({
            title: this.appSettingsService.QuestionTitle,
            text: this.appSettingsService.ExitQuestion,
            icon: 'warning',
            buttons: [this.appSettingsService.CancelAction, this.appSettingsService.ExitAction]
        });
    }

    sendInvalidFormAlert(): Promise<any> {
        return this.sendWarningAlert(this.appSettingsService.InvalidFormErrorTitle, this.appSettingsService.InvalidFormErrorMessage);
    }

    sendWarningAlert(title: string, message: string): Promise<any> {
        return swal(title, message, 'warning');
    }

    sendErrorMessage(message: string): void {
        sendToastr(ToastrType.Error, message, this.appSettingsService.AppMinName);
    }

    sendSuccessMessage(message: string): void {
        sendToastr(ToastrType.Success, message, this.appSettingsService.AppMinName);
    }
}
