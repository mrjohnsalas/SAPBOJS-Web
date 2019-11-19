import { AuditEntity } from './audit-entity';

export class ProductionMachine extends AuditEntity {
    id: number;
    name: string;
    statusId: number;
}
