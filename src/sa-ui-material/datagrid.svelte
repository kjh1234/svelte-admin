<script>
    import { getContext, setContext } from 'svelte';
	let fields = [];
	
	const { data } = getContext('list');
	
	setContext('datagrid', {
		addField: field => {
			const existingFieldIndex = fields.findIndex(f => f.source === field.source);
			if (existingFieldIndex > -1) {
				fields[existingFieldIndex] = field;
			} else {
				// children are resolved from last to first
				fields = [field, ...fields];
			}
		},
		removeField: source => {
			const existingFieldIndex = fields.findIndex(f => f.source === source);
			if (existingFieldIndex > -1) {
				fields = [
					...fields.slice(0, existingFieldIndex),
					...fields.slice(existingFieldIndex -1)
				];
			}
		}
	});
</script>
<slot></slot>
<table class="mui-table">
	<thead>
		<tr>
			{#each fields as field (field.source)}
				<th>
					{field.source}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
{#if data && data.length > 0}
{#each data as item}
	<tr>
		{#each fields as field (field.source)}
			<td class={field.cellClass}>
				<svelte:component this={field.component} source={field.source} record={item} />
			</td>
		{/each}
	</tr>
{/each}
{:else}
    <tr colspan="2">Loading...</tr>
{/if}
	</tbody>
</table>