<script lang="ts">
	import Compressor from '$lib/Compressor.svelte';
	import { compute } from '$lib/compute.svelte';

	import Base64URLWorker from '$lib/workers/base64url?worker';
	import JsonURLWorker from '$lib/workers/jsonurl?worker';
	import JsonCrushWorker from '$lib/workers/jsoncrush?worker';

	const compressors = [
		{
			name: 'Base64 URL',
			Worker: Base64URLWorker
		},
		{
			name: 'JSON URL',
			Worker: JsonURLWorker
		},
		{
			name: 'JSON Crush',
			Worker: JsonCrushWorker
		}
	];

	let text = $state('');
</script>

<input bind:value={text} />

<ul>
	{#each compressors as compressor}
		<Compressor {...compressor} input={text ?? ''} />
	{/each}
</ul>
