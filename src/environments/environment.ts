import { RoleName } from 'src/app/_models/rolename.enum';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  webApiURL: 'https://webapi.grafipapel.com.pe/api/',
  salesRoles: [RoleName.SalesAdmin, RoleName.SalesManager, RoleName.SalesEmployee],
  creditRoles: [RoleName.CreditAdmin, RoleName.CreditManager, RoleName.CreditEmployee],
  logisticsRoles: [RoleName.LogisticsAdmin, RoleName.LogisticsManager, RoleName.LogisticsEmployee],
  maintenanceRoles: [RoleName.MaintenanceAdmin, RoleName.MaintenanceManager, RoleName.MaintenanceEmployee],
  productionRoles: [RoleName.ProductionAdmin, RoleName.ProductionManager, RoleName.ProductionEmployee]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.