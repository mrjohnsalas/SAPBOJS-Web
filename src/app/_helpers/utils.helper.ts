import { EntityType } from '../_models/entity-type.enum';
import { StatusType } from '../_models/status-type.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceException } from '../_models/service-exception';

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

    getServiceExceptionObject(errorResponse: HttpErrorResponse): ServiceException {
        if (errorResponse.error.errors) {
            const ex = new ServiceException();
            ex.message = 'Error Message: ';
            const validation = errorResponse.error.errors;
            const fields = Object.keys(validation);
            fields.forEach(f => {
                ex.message += validation[f].join('\n');
            });
            console.log(ex.message);
            return ex;
        } else {
          return errorResponse.error;
        }
    }

}
