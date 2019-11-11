import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
    readonly TotalDecimals = 2;
    readonly QuantityDecimals = 3;
    readonly PercentageDecimals = 4;
    readonly UnitPriceDecimals = 6;

    readonly EditAction = 'Editar';
    readonly DetailAction = 'Detalle';
    readonly DeleteAction = 'Anular';
    readonly InitAction = 'Iniciar';
    readonly EndAction = 'Terminar';
    readonly PauseAction = 'Pausar';
    readonly PrintAction = 'Imprimir';
    readonly NewAction = 'Crear nuevo';
    readonly CreateAction = 'Crear';
    readonly SaveAction = 'Guardar';
    readonly SearchAction = 'Buscar';
    readonly BackToIndexAction = 'Volver a la lista';
    readonly CancelAction = 'Cancelar';
    readonly AddAction = 'Agregar';
    readonly SelectAction = 'Seleccionar';
    readonly CotizarAction = 'Cotizar';
    readonly RefreshAction = 'Refrescar';
    readonly AcceptAction = 'Aceptar';
    readonly DenyAction = 'Rechazar';
    readonly BackToPendingAction = 'Volver a pendiente';

    readonly FirstAction = 'Primero';
    readonly PreviousAction = 'Anterior';
    readonly NextAction = 'Siguiente';
    readonly LastAction = 'Ultimo';

    readonly DateFormat = 'yyyy-MM-dd';
    readonly TimeFormat = 'HH:mm';

    readonly DetailLink = 'detail';
    readonly EditLink = 'edit';
    readonly DeleteLink = 'delete';

    readonly QuestionTitle = '¿Estás seguro?';
    readonly DeleteQuestion = '¿Estás seguro que quieres anular esto?';
}
