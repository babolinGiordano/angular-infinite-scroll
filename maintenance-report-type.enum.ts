export enum MaintenanceReportType {
    Fault = 'FAULT',
    Maintenance = 'MAINTENANCE'
}

export const MaintenanceReportTypeOptions: Map<MaintenanceReportType, string> = new Map([
    [MaintenanceReportType.Fault, 'maintenance.report.title-tab.faults'],
    [MaintenanceReportType.Maintenance, 'maintenance.report.title-tab.othermaintenance']
]);
