/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          'Inter',
          'system-ui',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          'Inter',
          'system-ui',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      colors: {
        cream: { 50: '#FBF8F1', 100: '#F6F0E1', 200: '#EFE4C9' },
        sand: {
          50: '#FAF1D5',
          100: '#F4E5B0',
          200: '#EFD37F',
          300: '#E8C66B',
          400: '#DFB456',
          500: '#D4A847',
          600: '#B58F30',
          700: '#8E6622',
        },
        navy: {
          50: '#EEF1F8',
          100: '#DDE3EE',
          200: '#B8C4DE',
          700: '#0F1F3B',
          800: '#0B1730',
          900: '#070F22',
          950: '#04081A',
        },
        ink: {
          900: '#0B2030',
          700: '#1F2937',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
        },
      },
      boxShadow: {
        soft: '0 1px 3px rgba(11,23,48,0.04), 0 6px 20px rgba(11,23,48,0.06)',
        lift: '0 4px 12px rgba(11,23,48,0.06), 0 24px 60px rgba(11,23,48,0.12)',
        glow: '0 0 0 1px rgba(11,23,48,0.04), 0 8px 30px rgba(11,23,48,0.08)',
      },
      animation: {
        'fade-up': 'fadeUp .7s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
