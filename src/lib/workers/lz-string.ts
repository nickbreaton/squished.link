import { defineEncoder } from '$lib/encoder';
import { compressToEncodedURIComponent } from 'lz-string';

defineEncoder({
	encode(value: string) {
		return compressToEncodedURIComponent(value);
	}
});
