import { expose } from 'comlink';
import { Buffer } from 'buffer';

import base64url from 'base64url';

globalThis.Buffer = Buffer;

async function encode(value: string) {
	return base64url(value);
}

expose(encode);
