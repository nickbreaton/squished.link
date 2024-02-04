import { Buffer } from 'buffer';

import base64url from 'base64url';
import { defineEncoder } from '$lib/encoder';

globalThis.Buffer = Buffer;

defineEncoder({
	encode: (text) => {
		return base64url(text);
	}
});
