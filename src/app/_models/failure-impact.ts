import { AuditEntity } from './audit-entity';

export class FailureImpact extends AuditEntity {
    id: number;
    name: string;
    description: string;
    statusId: number;
}
