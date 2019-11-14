import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
    readonly TotalDecimals = 2;
    readonly QuantityDecimals = 3;
    readonly PercentageDecimals = 4;
    readonly UnitPriceDecimals = 6;
    readonly DataPageSize = 30;

    readonly DateFormat = 'yyyy-MM-dd';
    readonly TimeFormat = 'HH:mm';
    readonly FullDate = 'yyyy-MM-dd HH:mm';

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
    readonly ExitAction = 'Salir';
    readonly AddAction = 'Agregar';
    readonly SelectAction = 'Seleccionar';
    readonly CotizarAction = 'Cotizar';
    readonly RefreshAction = 'Refrescar';
    readonly AcceptAction = 'Aceptar';
    readonly DenyAction = 'Rechazar';
    readonly BackToPendingAction = 'Volver a pendiente';
    readonly LoginAction = 'Iniciar sesión';

    readonly AppMinName = 'JS+';
    readonly AppName = 'SapBO.JS';
    readonly AppDescription1 = 'SapBO.JS es una de las soluciones de negocios más avanzada y robusta del mercado, 100% integrada con SAP Business One.';
    readonly AppDescription2 = 'Es fácil de usar y configurar. Es tan simple como lo desees o tan sofisticado como lo necesites.';
    readonly AppDeveloped = 'Desarrollado y diseñado por';
    readonly DeveloperName = 'John Salas';
    readonly DeveloperEmail = 'salas.john@hotmail.com';
    readonly AppReservedYears = '2017-2019';
    readonly GoodNotification = 'La operación se realizó satisfactoriamente.';
    readonly BadNotification = 'La operación se realizó satisfactoriamente.';
    readonly NotFound = 'Su búsqueda no produjo ningún resultado.';
    readonly ErrorTitle = 'Error:';
    readonly ErrorMessage = 'Error Message:';
    readonly PleaseWait = 'Espere por favor...';
    readonly LoadingData = 'Cargando datos...';
    readonly WellcomeMessage = 'Bienvenido';

    readonly FirstAction = 'Primero';
    readonly PreviousAction = 'Anterior';
    readonly NextAction = 'Siguiente';
    readonly LastAction = 'Ultimo';

    readonly CreateLink = 'create';
    readonly DetailLink = 'detail';
    readonly EditLink = 'edit';
    readonly DeleteLink = 'delete';

    readonly LastModification = 'Última modificación';

    readonly Elements = 'Elementos';
    readonly RequiredErrorMessage = 'Este campo es requerido.';
    readonly RequiredValidEmailErrorMessage = 'El valor ingresado no es un email valido.';
    readonly MaxLengthErrorMessage = 'La longitud máxima de caracteres de este campo es:';

    readonly QuestionTitle = '¿Estás seguro?';
    readonly DeleteQuestion = '¿Estás seguro que quieres anular esto?';
    readonly InvalidFormErrorTitle = 'Formulario con errores.';
    readonly InvalidFormErrorMessage = 'Algunos datos del formulario tienen errores.';
    readonly ExitQuestion = '¿Quieres salir del formulario y perder los cambios?';

    readonly IdNotFoundError = 'No se encontró ningún id como parámetro en la ruta.';
}
