<script>
    export let data;
    export let total;
    export let pageIndex;
    export let pageSize;
</script>

<table class="mui-table">
	<thead>
		<tr>
			<th>First name</th>
			<th>Last name</th>
		</tr>
	</thead>
	<tbody>
{#if data}
{#each data as item (item.id)}
	<tr>
		<td>{item.first_name}</td>
		<td>{item.last_name}</td>
	</tr>
{/each}
{:else}
    <tr colspan="2">Loading...</tr>
{/if}
	</tbody>
	<tfoot>
		{pageIndex * pageSize} / {total}
	</tfoot>
</table>