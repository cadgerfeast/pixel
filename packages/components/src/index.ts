import { type Theme } from 'slithe';
import pixelicons from '@pixel/icons';
import variables from './variables.css?raw';
// Constants
const variablesStylesheet = new CSSStyleSheet();
const styles = import.meta.glob<{ default: string }>('./components/**/*.scss', { query: '?inline', eager: true });
const components: Record<string, CSSStyleSheet[]> = {};
const icons: Record<string, string> = {};

variablesStylesheet.replaceSync(variables);

for (const style in styles) {
  const componentStylesheet = new CSSStyleSheet();
  componentStylesheet.replaceSync(styles[style].default);
  components[style.split('/')[2].slice(0, -5)] = [variablesStylesheet, componentStylesheet];
}
for (const [name, icon] of Object.entries(pixelicons)) {
  icons[name] = icon.data.svg;
}

export default {
  components,
  icons,
  fallbackIcon: icons['cross']
} satisfies Theme;
