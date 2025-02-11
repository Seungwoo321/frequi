import '@/styles/tailwind.scss';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const FtTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#0089a1',
      100: '#0089a1',
      200: '#0089a1',
      300: '#0089a1',
      400: '#0089a1',
      500: '#0089a1',
      600: '#0089a1',
      700: '#0089a1',
      800: '#0089a1',
      900: '#0089a1',
      950: '#0089a1',
    },
  },
});

export { PrimeVue, FtTheme };
