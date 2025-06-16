// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                secondary: 'var(--secondary-color)',
            },
        },
    },
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
};

export default config;
