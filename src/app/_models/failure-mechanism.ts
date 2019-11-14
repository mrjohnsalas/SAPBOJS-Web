import { AuditEntity } from './audit-entity';

export class FailureMechanism extends AuditEntity {
    id: number;
    name: string;
    description: string;
    statusId: number;
}
