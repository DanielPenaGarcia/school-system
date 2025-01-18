import { PrimeNGConfigType } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { schoolPreset } from '@core/presets';

export const primeNgConfig: PrimeNGConfigType = {
  ripple: true,
  theme: {
    preset: schoolPreset,
    options: {
        darkModeSelector: false || 'none'
    }
  },
};
