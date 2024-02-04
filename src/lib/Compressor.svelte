<script lang="ts">
	import { compute } from './compute.svelte';

	interface Props {
		name: string;
		Worker: new () => Worker;
		input: string;
	}

	let { input, name, Worker } = $props<Props>();

	const result = compute(Worker, () => input);
</script>

<li>
	<span style={`opacity: ${result.pending ? 0.5 : 1}`}>
		{name} ({new Blob([result.value]).size}): {result.value}
	</span>
</li>
