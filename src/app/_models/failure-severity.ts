import { AuditEntity } from './audit-entity';

export class FailureSeverity extends AuditEntity {
    id: number;
    name: string;
    description: string;
    statusId: number;
}
