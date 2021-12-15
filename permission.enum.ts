export enum Permission {

    BREAKFAST_SEARCH = 'breakfast_search',
    BREAKFAST_EXPORT = 'breakfast_export',
    BREAKFAST_UPDATE = 'breakfast_update',
    BREAKFAST_REPORT = 'breakfast_report',

    CHECKLIST_SEARCH = 'checklist_search',
    CHECKLIST_EDITION = 'checklist_edition',

    CONSUMPTION_SEARCH = 'consumption_search',
    CONSUMPTION_SEARCH_DAILY = 'consumption_search_daily',
    CONSUMPTION_CREATE = 'consumption_create',
    CONSUMPTION_EXPORT = 'consumption_export',
    CONSUMPTION_PRINT = 'consumption_print',
    CONSUMPTION_PROCESS = 'consumption_process',
    CONSUMPTION_REPORT = 'consumption_report',

    CONVERSATION_READ = 'conversation_read',
    CONVERSATION_WRITE = 'conversation_write',
    CONVERSATION_WRITE_BLOCKING = 'conversation_write_blocking',

    EMPLOYEE_SEARCH = 'employee_search',
    EMPLOYEE_EDITION = 'employee_edition',
    EMPLOYEE_RESET_PASSWORD = 'employee_reset_password',

    FAULT_TEMPLATE_SEARCH = 'fault_template_search',

    FAULT_CREATE = 'fault_create',

    FAULT_CATEGORY_SEARCH = 'fault_category_search',
    FAULT_CATEGORY_EDITION = 'fault_category_edition',

    FURNITURE_TYPE_SEARCH = 'furniture_type_search',
    FURNITURE_TYPE_EDITION = 'furniture_type_edition',

    GROUP_SEARCH = 'group_search',
    GROUP_CREATE = 'group_create',
    GROUP_DELETE = 'group_delete',
    GROUP_UPDATE = 'group_update',

    GUEST_CONVERSATION_SEARCH = 'guest_conversation_search',
    GUEST_CONVERSATION_UPDATE = 'guest_conversation_update',

    GUEST_NOTE_SEARCH = 'guest_note_search',
    GUEST_NOTE_UPDATE = 'guest_note_update',

    GUEST_NOTE_TEMPLATE_SEARCH = 'guest_note_template_search',
    GUEST_NOTE_TEMPLATE_EDITION = 'guest_note_template_edition',

    GUEST_SEARCH = 'guest_search',
    GUEST_UPDATE = 'guest_update',

    LOST_AND_FOUND_SEARCH = 'lost_and_found_search',
    LOST_AND_FOUND_CREATE = 'lost_and_found_create',
    LOST_AND_FOUND_UPDATE = 'lost_and_found_update',

    LOST_AND_FOUND_STORAGE_SEARCH = 'lost_and_found_storage_search',

    MESSAGE_TEMPLATE_SEARCH = 'message_template_search',
    MESSAGE_TEMPLATE_EDITION = 'message_template_edition',

    OCCUPANCY_SEARCH = 'occupancy_search',

    PACKAGE_SEARCH = 'package_search',
    PACKAGE_EDITION = 'package_edition',

    PREFERENCES_VIEW = 'preferences_view',

    PRELIVE_RESET = 'prelive_reset',

    PRODUCT_CATEGORY_SEARCH = 'product_category_search',
    PRODUCT_CATEGORY_EDITION = 'product_category_edition',

    PRODUCT_TYPE_SEARCH = 'product_type_search',
    PRODUCT_TYPE_EDITION = 'product_type_edition',

    QUALITY_ASSURANCE_PERFORM = 'quality_assurance_perform',
    QUALITY_ASSURANCE_REPORT = 'quality_assurance_report',

    QUICK_CHECKIN = 'quick_checkin',

    RATE_CODE_SEARCH = 'rate_code_search',
    RATE_CODE_EDITION = 'rate_code_edition',
    RATE_CODE_CONFIRM = 'rate_code_confirm',

    RESERVATION_SEARCH = 'reservation_search',
    RESERVATION_UPDATE = 'reservation_update',

    SECTION_SEARCH = 'section_search',

    SHIFT_SEARCH = 'shift_search',
    SHIFT_EDITION = 'shift_edition',
    SHIFT_EXPORT = 'shift_export',

    SHIFT_REQUEST_SEARCH_MY_REQUEST = 'shift_request_search_my_request',
    SHIFT_REQUEST_EDIT_MY_REQUEST = 'shift_request_edit_my_request',
    SHIFT_REQUEST_MANAGE_REQUEST = 'shift_request_manage',

    SHIFT_TYPE_SEARCH = 'shift_type_search',
    SHIFT_TYPE_EDITION = 'shift_type_edition',

    SPACE_NOTE_SEARCH = 'space_note_search',
    SPACE_NOTE_CREATE = 'space_note_create',
    SPACE_NOTE_UPDATE = 'space_note_update',
    SPACE_NOTE_DELETE = 'space_note_delete',

    SPACE_ADD_ROOM = 'space_add_room',
    SPACE_ADD_COMMON = 'space_add_common',
    SPACE_SEARCH = 'space_search',
    SPACE_SEARCH_ONLY_MINE = 'space_search_only_mine',
    SPACE_EDITION = 'space_edition',
    SPACE_SEARCH_ASSIGNMENT = 'space_search_assignment',
    SPACE_UPDATE_PRIORITY = 'space_update_priority',
    SPACE_UPDATE_GUEST_IN_ROOM = 'space_update_guest_in_room',
    SPACE_UPDATE_FLAG = 'space_update_flag',
    SPACE_UPDATE_DND = 'space_update_dnd',

    SPACE_COVERTURE_SEARCH = 'space_coverture_search',
    SPACE_COVERTURE_CREATE = 'space_coverture_create',
    SPACE_COVERTURE_UPDATE = 'space_coverture_update',
    SPACE_COVERTURE_EXPORT = 'space_coverture_export',
    SPACE_COVERTURE_REPORT = 'space_coverture_report',

    SPACE_TYPE_SEARCH = 'space_type_search',
    SPACE_TYPE_EDITION = 'space_type_edition',

    SECTION_EDITING = 'section_editing',
    SECTIONS_MANAGE = 'sections_manage',

    TASK_CHECKLIST_UPDATE_ITEM = 'task_checklist_update_item',

    TASK_SEARCH = 'task_search',
    TASK_EXPORT = 'task_export',
    TASK_SEARCH_QUALITY_CONTROL = 'task_search_quality_control',
    TASK_SEARCH_MY_TASK = 'task_search_my_task',
    TASK_SEARCH_ASSIGNMENT = 'task_search_assignment',
    TASK_UNASSIGN = 'task_unassign',
    TASK_ASSIGN = 'task_assign',
    TASK_ASSIGN_TO_ME = 'task_assign_to_me',
    TASK_UPDATE = 'task_update',
    TASK_CREATE = 'task_create',
    TASK_REOPEN = 'task_reopen',
    TASK_CLOSE = 'task_close',
    TASK_INSPECT = 'task_inspect',
    TASK_DONE = 'task_done',
    TASK_PROGRESS = 'task_progress',
    TASK_PRIORITY = 'task_priority',
    TASK_ADD_SPACE_DETAIL = 'task_add_space_detail',
    TASK_DETAIL_FROM_LIST = 'task_detail_from_list',
    TASK_SEARCH_ONLY_MINE = 'task_search_only_mine',
    TASK_REPORT_HOUSEKEEPING = 'task_report_housekeeping',
    TASK_REPORT_MAINTENANCE = 'task_report_maintenance',
    TASK_REPORT_OTHER = 'task_report_other',

    TASK_TEMPLATE_ASSIGNMENT_UPDATE = 'task_template_assignment_update',

    TASK_TEMPLATE_SEARCH = 'task_template_search',
    TASK_TEMPLATE_EDITION = 'task_template_edition',
    TASK_TEMPLATE_SEARCH_ASSIGNMENT = 'task_template_search_assignment',

    TASK_TEMPLATE_RULE_SEARCH = 'task_template_rule_search',
    TASK_TEMPLATE_RULE_CREATE = 'task_template_rule_create',
    TASK_TEMPLATE_RULE_UPDATE = 'task_template_rule_update',
    TASK_TEMPLATE_RULE_ENABLE = 'task_template_rule_enable',
    TASK_TEMPLATE_RULE_DISABLE = 'task_template_rule_disable',
    TASK_TEMPLATE_RULE_ASSIGN = 'task_template_rule_assign',
    TASK_TEMPLATE_RULE_UNASSIGN = 'task_template_rule_unassign',

    TRACE_SEARCH = 'trace_search',
    TRACE_UPDATE = 'trace_update',

    TRACE_MAPPING_MANAGE = 'traceMapping_manage',

    DEPARTMENT_SEARCH = 'department_read',
    DEPARTMENT_MANAGE = 'department_manage'
}

export const PermissionCategory = [
    {
        label: 'permissions.category.breakfast',
        root: 'breakfast_'
    },
    {
        label: 'permissions.category.checklist',
        root: 'checklist_'
    },
    {
        label: 'permissions.category.consumption',
        root: 'consumption_'
    },
    {
        label: 'permissions.category.conversation',
        root: 'conversation_'
    },
    {
        label: 'permissions.category.employee',
        root: 'employee_'
    },
    {
        label: 'permissions.category.fault',
        root: 'fault_'
    },
    {
        label: 'permissions.category.furniture',
        root: 'furniture_'
    },
    {
        label: 'permissions.category.group',
        root: 'group_'
    },
    {
        label: 'permissions.category.guest',
        root: 'guest_'
    },
    {
        label: 'permissions.category.lost_and_found',
        root: 'lost_and_found_'
    },
    {
        label: 'permissions.category.message_template',
        root: 'message_template_'
    },
    {
        label: 'permissions.category.occupancy',
        root: 'occupancy_'
    },
    {
        label: 'permissions.category.package',
        root: 'package_'
    },
    {
        label: 'permissions.category.prelive',
        root: 'prelive_'
    },
    {
        label: 'permissions.category.preference',
        root: 'preferences_'
    },
    {
        label: 'permissions.category.product_category',
        root: 'product_category_'
    },
    {
        label: 'permissions.category.product_type',
        root: 'product_type_'
    },
    {
        label: 'permissions.category.quality_assurance',
        root: 'quality_assurance_'
    },
    {
        label: 'permissions.category.quick_checkin',
        root: 'quick_'
    },
    {
        label: 'permissions.category.rate_code',
        root: 'rate_code_'
    },
    {
        label: 'permissions.category.reservation',
        root: 'reservation_'
    },
    {
        label: 'permissions.category.section',
        root: 'section_'
    },
    {
        label: 'permissions.category.shift',
        root: 'shift_'
    },
    {
        label: 'permissions.category.space',
        root: 'space_'
    },
    {
        label: 'permissions.category.task',
        root: 'task_'
    },
    {
        label: 'permissions.category.trace',
        root: 'trace_'
    },
    {
        label: 'permissions.category.department',
        root: 'department_'
    }
];
