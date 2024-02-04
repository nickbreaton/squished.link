import JSONCrush from 'jsoncrush';

import { defineEncoder } from '$lib/encoder';

defineEncoder({
	encode(value: string) {
		try {
			// try to parse, will compress better as actual JSON
			return JSONCrush.crush(JSON.parse(value));
		} catch {
			// otherwise just fall back to a string
			return JSONCrush.crush(value);
		}
	}
});
