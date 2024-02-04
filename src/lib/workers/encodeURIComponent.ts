import { defineEncoder } from '$lib/encoder';

defineEncoder({
	encode(value: string) {
		return encodeURIComponent(value);
	}
});
