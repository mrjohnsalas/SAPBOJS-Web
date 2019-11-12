import { AuditEntity } from './audit-entity';

export class FailureCause extends AuditEntity {
    id: number;
    name: string;
    description: string;
    statusId: number;
}
