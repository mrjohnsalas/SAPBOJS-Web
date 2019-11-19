import { AuditEntity } from './audit-entity';

export class TimeFrequency extends AuditEntity {
    id: number;
    name: string;
    description: string;
    statusId: number;
}
