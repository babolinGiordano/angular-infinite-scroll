export enum Severity {
    NOT_SPECIFIED = 'NOT_SPECIFIED',
    NORMAL = 'NORMAL',
    MEDIUM = 'MEDIUM',
    SEVERE = 'SEVERE'
}

export const SeverityOrders: Map<Severity, number> = new Map([
    [Severity.NOT_SPECIFIED, 0],
    [Severity.NORMAL, 1],
    [Severity.MEDIUM, 2],
    [Severity.SEVERE, 3]
]);
export const SeverityOptions: Map<Severity, string> = new Map([
    [Severity.NOT_SPECIFIED, 'severity.not-specified'],
    [Severity.NORMAL, '1'],
    [Severity.MEDIUM, '2'],
    [Severity.SEVERE, '3']
]);
export const SeverityOptionsFilter: Map<Severity, string> = new Map([
    [Severity.NOT_SPECIFIED, '-'],
    [Severity.NORMAL, '1'],
    [Severity.MEDIUM, '2'],
    [Severity.SEVERE, '3']
]);
