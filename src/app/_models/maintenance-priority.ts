import { AuditEntity } from './audit-entity';

export class MaintenancePriority extends AuditEntity {
    id: number;
    name: string;
    description: string;
    statusId: number;
}
