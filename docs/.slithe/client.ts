import { definePlaygroundClient } from '@slithe/playground/client';
import { setTheme } from 'slithe';
import pixel from '@pixel/components';
import '@pixel/components/global.css';

export const playground = definePlaygroundClient({
	setTheme: (theme) => {
		setTheme(theme, pixel);
	}
});
