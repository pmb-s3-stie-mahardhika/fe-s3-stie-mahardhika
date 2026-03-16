# ROLE: Frontend Architect
You must strictly follow this project structure for every file creation:

## Directory Mapping (src/)
- `assets/`: Static files (images, svgs).
- `components/`: UI Components (Atomic Design: atoms, molecules, organisms).
- `constants/`: Global constants and configuration values.
- `contexts/`: React Context providers.
- `hooks/`: Custom reusable React hooks.
- `interfaces/`: TypeScript definitions/types.
- `lib/`: Third-party library initializations (e.g., `axios.ts`, `query-client.ts`).
- `locales/`: i18n translation files (JSON).
- `pages/`: Page-level components.
- `routers/`: Route definitions and configurations.
- `services/`: API call logic using Axios.
- `utils/`: Helper functions (e.g., date formatting).

## Rules
1. Never place business logic inside `pages/`; delegate to `hooks/` or `services/`.
2. Always use absolute paths starting with `@/` if configured, otherwise use relative paths.