import { AuditEntity } from './audit-entity';

export class FailureType extends AuditEntity {
    id: number;
    name: string;
    description: string;
    statusId: number;
}
