// config.ts
import { z } from 'zod';

export const EnvSchema = z.object({
    VITE_APP_W3FORM_API_KEY: z.string().min(1, "REACT_APP_W3FORM_API_KEY is required"),
});

export type Env = z.infer<typeof EnvSchema>;

// Create a validated environment object
const env: Env = EnvSchema.parse({
    VITE_APP_W3FORM_API_KEY: import.meta.env.VITE_APP_W3FORM_API_KEY ?? '',
});

export default env;
