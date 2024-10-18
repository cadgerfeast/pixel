import { defineConfig } from 'vertis';
import { lernaConventional } from 'vertis/strategy';

export default defineConfig({
	strategy: lernaConventional({
		gitTarget: 'github'
	})
});
