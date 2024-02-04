<script lang="ts">
	import Base64URLWorker from '$lib/workers/base64url?worker';
	import JsonURLWorker from '$lib/workers/jsonurl?worker';
	import JsonCrushWorker from '$lib/workers/jsoncrush?worker';
	import EncodeURIComponentWorker from '$lib/workers/encodeURIComponent?worker';
	import Encoder from '$lib/Encoder.svelte';

	let text = $state('');

	const encoders = [
		{
			name: 'encodeURIComponent',
			EncodeWorker: EncodeURIComponentWorker
		},
		{
			name: 'Base64 URL',
			EncodeWorker: Base64URLWorker
		},
		{
			name: 'JSON URL',
			EncodeWorker: JsonURLWorker
		},
		{
			name: 'JSON Crush',
			EncodeWorker: JsonCrushWorker
		}
	];
</script>

<input bind:value={text} />

<ul>
	{#each encoders as encoder}
		<Encoder {...encoder} input={text ?? ''} />
	{/each}
</ul>
