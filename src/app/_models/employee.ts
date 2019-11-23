import { AuditEntity } from './audit-entity';
import { Job } from './job';

export class Employee extends AuditEntity {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    grafipapelId: string;
    costHour: number;
    jobId: number;
    job: Job;
    isSuper: boolean;
    statusId: number;
}
