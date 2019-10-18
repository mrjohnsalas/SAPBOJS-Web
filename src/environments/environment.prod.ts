import { RoleName } from 'src/app/_models/rolename.enum';

export const environment = {
  production: true,
  webApiURL: 'https://webapi.grafipapel.com.pe/api/',
  salesRoles: [RoleName.SalesAdmin, RoleName.SalesManager, RoleName.SalesEmployee],
  creditRoles: [RoleName.CreditAdmin, RoleName.CreditManager, RoleName.CreditEmployee],
  logisticsRoles: [RoleName.LogisticsAdmin, RoleName.LogisticsManager, RoleName.LogisticsEmployee],
  maintenanceRoles: [RoleName.MaintenanceAdmin, RoleName.MaintenanceManager, RoleName.MaintenanceEmployee],
  productionRoles: [RoleName.ProductionAdmin, RoleName.ProductionManager, RoleName.ProductionEmployee]
};
