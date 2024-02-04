<script lang="ts">
	import Encoder from '$lib/Encoder.svelte';

	import Base64URLWorker from '$lib/workers/base64url?worker';
	import JsonURLWorker from '$lib/workers/jsonurl?worker';
	import JsonCrushWorker from '$lib/workers/jsoncrush?worker';
	import EncodeURIComponentWorker from '$lib/workers/encodeURIComponent?worker';
	import LzStringWorker from '$lib/workers/lz-string?worker';

	let text = $state('');

	let encoders = [
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
			name: 'JSON Crush (URI encoded)',
			EncodeWorker: JsonCrushWorker
		},
		{
			name: 'lz-string (compressToEncodedURIComponent)',
			EncodeWorker: LzStringWorker
		}
	];
</script>

<input bind:value={text} />

<ul>
	{#each encoders as encoder}
		<Encoder {...encoder} input={text ?? ''} />
	{/each}
</ul>
