import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
    readonly TotalDecimals = 2;
    readonly QuantityDecimals = 3;
    readonly PercentageDecimals = 4;
    readonly UnitPriceDecimals = 6;

    readonly ActionEdit = 'Editar';
    readonly ActionDetail = 'Detalle';
    readonly ActionDelete = 'Anular';
    readonly ActionInit = 'Iniciar';
    readonly ActionEnd = 'Terminar';
    readonly ActionPause = 'Pausar';
    readonly ActionPrint = 'Imprimir';
    readonly ActionNew = 'Crear nuevo';
    readonly ActionCreate = 'Crear';
    readonly ActionSave = 'Guardar';
    readonly ActionSearch = 'Buscar';
    readonly ActionBackToIndex = 'Volver a la lista';
    readonly ActionCancel = 'Cancelar';
    readonly ActionAdd = 'Agregar';
    readonly ActionSelect = 'Seleccionar';
    readonly ActionCotizar = 'Cotizar';
    readonly ActionRefresh = 'Refrescar';
    readonly ActionAccept = 'Aceptar';
    readonly ActionDeny = 'Rechazar';
    readonly ActionBackToPending = 'Volver a pendiente';

    readonly ActionFirst = 'Primero';
    readonly ActionPrevious = 'Anterior';
    readonly ActionNext = 'Siguiente';
    readonly ActionLast = 'Ultimo';

    readonly DateFormat = 'yyyy-MM-dd';
    readonly TimeFormat = 'HH:mm';
}
