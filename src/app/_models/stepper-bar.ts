export class StepperBar {
    ids: number[];
    id: number;
    basePath: string;

    constructor(ids: number[], id: number, basePath: string) {
        this.ids = ids;
        this.id = id;
        this.basePath = basePath;
    }
}
