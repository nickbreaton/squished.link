import { createEncoder } from './encoder';

export function encode(EncodeWorker: new () => Worker, signal: () => string) {
	let value = $state('');
	let pending = $state(true);

	$effect(() => {
		let encoder = createEncoder(new EncodeWorker());

		$effect(() => {
			let input = signal();
			let stale = false;

			pending = true;

			if (!input) {
				pending = false;
				value = input;
				return;
			}

			encoder
				.encode(input)
				.then((result) => {
					if (!stale) {
						// TODO: add time to parse (computed in worker)
						pending = false;
						value = result;
					}
				})
				.catch((error) => {
					if (!stale) {
						pending = false;
						value = error.message ?? error.toString();
					}
				});

			return () => (stale = true);
		});
	});

	return {
		get value() {
			return value;
		},
		get pending() {
			return pending;
		}
	};
}
