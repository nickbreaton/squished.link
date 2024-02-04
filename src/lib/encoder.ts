import { wrap, expose } from 'comlink';

export function defineEncoder(encoder: { encode: (value: string) => string }) {
	expose(encoder);
}

export function createEncoder(worker: Worker) {
	return wrap<Parameters<typeof defineEncoder>[0]>(worker);
}
