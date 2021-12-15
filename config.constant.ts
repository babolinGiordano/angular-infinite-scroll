export const Configs = {
    APPLICATION_NAME: 'QO-FRONTEND',
    LOCAL_STORAGE: {
        ACCESS_TOKEN: 'hox_access_token',
        LANGUAGE: 'hox_language'
    },
    TIMEOUT: {
        TOASTER: 5000
    },
    AVAILABLE_LANGUAGES: [
        {lang: 'de', translationKey: 'employee-profile.deutsch'},
        {lang: 'en', translationKey: 'employee-profile.english'},
        {lang: 'es', translationKey: 'employee-profile.spanish'},
        {lang: 'fr', translationKey: 'employee-profile.french'},
        {lang: 'he', translationKey: 'employee-profile.hebrew'},
        {lang: 'it', translationKey: 'employee-profile.italian'},
        {lang: 'pt', translationKey: 'employee-profile.portuguese'}
    ],
    MAX_UPLOAD_LOGO_SIZE_MB: 1,
    MAX_UPLOAD_FILE_SIZE_MB: 20,
    MAX_NUMBER_OF_UPLOAD_FILES: 20,
    ALLOWED_UPLOAD_IMAGE_TYPES: 'image/jpg, image/jpeg, image/png, image/gif',
    AUTOCOMPLETE_CHARACTER_NUMBERS: 3,
    DEBOUNCE_TIME: 300,
    MAX_MESSAGE_TEMPLATE_DISPLAY_DESKTOP: 4,
    MAX_MESSAGE_TEMPLATE_DISPLAY_MOBILE: 2,
    MAX_MESSAGE_CONTENT_LENGTH_DISPLAY: 10,
    AUTO_REFRESH_TIMER: 10000,
    MAX_READ_PEOPLE_NAME_DISPLAY: 2,
    ALLOWED_UPLOAD_DOCUMENT_TYPES: 'application/pdf',
    TASK_ASSIGNMENT_TIME_UNIT: 'min',
    AVATAR_COLORS: ['cabbage', 'grass', 'smoke', 'wood', 'sky', 'ocean',
        'papaya', 'eggplant', 'peach', 'lotus', 'clay', 'pumpkin', 'leaf'],
    SECTION_LEVEL: 1,
    SUB_SECTION_LEVEL: 2,
    SUB_SUB_SECTION_LEVEL: 3,
    MAX_LENGTH_OF_MESSAGE: 600,
    REPORT_PAGE_SIZE: 25,
    THROTTLE_TIME: 500,
    REPORT_CARD_COLORS: {ALERT: 'alert', WARNING: 'warning', SUCCESS: 'success', NORMAL: 'normal'},
    REPORT_CHECKLIST_SCORE_ALERT: 50,
    REPORT_CHECKLIST_SCORE_SUCCESS: 80,
    MAX_REPORT_TASK_TIMING_AVERAGE: 10,
    MIN_REPORT_TASK_TIMING_AVERAGE: -10,
    DEFAULT_TIMEZONE: 'Europe/Zurich'
};
