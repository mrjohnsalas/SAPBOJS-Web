import { AuditEntity } from './audit-entity';

export class MaintenanceType extends AuditEntity {
    id: number;
    name: string;
    description: string;
    requireFailure: boolean;
    statusId: number;
}
