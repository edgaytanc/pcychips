tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#ef4444',
                    600: '#dc2626', // Brand Red
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                    DEFAULT: '#dc2626', // Fallback for text-primary
                },
                "primary-dark": "#1d4ed8", // Alias for compatibility
                neutral: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },
                // Compatibility aliases for other files
                "background-light": "#f8fafc", // neutral-50
                "background-dark": "#0f172a", // neutral-900
                "surface-light": "#ffffff",
                "surface-dark": "#1e293b", // neutral-800
                "background-subtle": "#f8fafc",

                "card-light": "#ffffff",
                "card-dark": "#1e293b",
                "border-light": "#e2e8f0",
                "border-dark": "#334155",

                "text-main": "#0f172a",
                "text-secondary": "#64748b",
                "text-muted": "#64748b",

                "accent-purple": "#8b5cf6",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif", "Lexend", "Plus Jakarta Sans", "Outfit"],
                "body": ["Inter", "sans-serif", "Noto Sans"],
                "sans": ["Inter", "sans-serif"], // Default sans
                "heading": ["Outfit", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "md": "0.375rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
                "full": "9999px"
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'glow': '0 0 20px rgba(37, 99, 235, 0.2)',
                'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
                'card-hover': '0 0 0 1px rgba(0,0,0,0.03), 0 8px 16px rgba(0,0,0,0.08)',
            }
        },
    },
}
