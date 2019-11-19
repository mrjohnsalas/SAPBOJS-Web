import { AuditEntity } from './audit-entity';

export class Job extends AuditEntity {
    id: number;
    name: string;
    description: string;
    costHour: number;
    statusId: number;
}
