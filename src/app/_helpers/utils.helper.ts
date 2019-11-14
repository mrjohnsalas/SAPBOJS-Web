import { EntityType } from '../_models/entity-type.enum';
import { StatusType } from '../_models/status-type.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceException } from '../_models/service-exception';
import { AppSettingsService } from '../_services/app-settings.service';

export class Utils {

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

    getServiceExceptionObject(errorResponse: HttpErrorResponse, appSettingsService: AppSettingsService): ServiceException {
        // Validations error
        if (errorResponse.error.errors) {
            const ex = new ServiceException();
            ex.message = appSettingsService.ErrorMessage;
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
            ex.message = `${appSettingsService.ErrorMessage} ${appSettingsService.NotFound}`;
            ex.isNotFoundError = true;
            return ex;
        }
        // Others errors
        return errorResponse.error;
    }

}
