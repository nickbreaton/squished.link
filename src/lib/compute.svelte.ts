import { wrap } from 'comlink';

export function compute(Worker: new () => Worker, signal: () => string) {
	let value = $state('');
	let pending = $state(true);

	$effect(() => {
		const worker = wrap<(value: string) => string>(new Worker());

		$effect(() => {
			const input = signal();
			let stale = false;

			pending = true;

			if (!input) {
				pending = false;
				value = input;
				return;
			}

			worker(input)
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
