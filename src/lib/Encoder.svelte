<script lang="ts">
	import { encode } from './encode.svelte';

	interface Props {
		name: string;
		EncodeWorker: new () => Worker;
		input: string;
	}

	let { input, name, EncodeWorker } = $props<Props>();
	let result = encode(EncodeWorker, () => input);
</script>

<li>
	<span style={`opacity: ${result.pending ? 0.5 : 1}`}>
		{name} ({new Blob([result.value]).size}): {result.value}
	</span>
</li>
