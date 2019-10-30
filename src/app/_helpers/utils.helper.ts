import { EntityType } from '../_models/entity-type.enum';
import { StatusType } from '../_models/status-type.enum';

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

}
