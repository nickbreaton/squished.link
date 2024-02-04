import JsonURL from '@jsonurl/jsonurl';

import { expose } from 'comlink';

function encode(value: string) {
	try {
		// try to parse, might compress better as actual JSON
		return JsonURL.stringify(JSON.parse(value));
	} catch {
		// otherwise just fall back to a string
		return JsonURL.stringify(value);
	}
}

expose(encode);
