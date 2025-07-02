import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                // Your custom Guranse Tea colors
                'guranse': {
                    'primary': '#065841',    // Banners, Buttons and Highlights
                    'text': '#455560',  // Text Color
                    'accent': '#D97706',     // accent color for highlights and buttons
                    'png-background': '#E0E0E0',       // Background for png images/products
                    'background': '#F5E8DB', // Background color for sections
                }
            },
            fontFamily: {
                // Your custom fonts
                'recoleta': ['Recoleta', ...defaultTheme.fontFamily.serif],
                'metropolis': ['Metropolis', ...defaultTheme.fontFamily.sans],
                'nunito': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
                // Keep the default sans as fallback
                sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
            },
            letterSpacing: {
                'metropolis': '0.05em', // 10% letter spacing for Metropolis
            }
        },
    },
    plugins: [forms],
};