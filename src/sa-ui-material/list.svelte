<script>
    import { getContext, onMount } from 'svelte';
    import Datagrid from './datagrid.svelte';
    export let resource;
    export let fields;
    const adminContext = getContext('admin');
    const store = adminContext.getStore(resource);
</script>

<div>
    <slot name="data" data={$store.data}>
        <Datagrid data={$store.data} fields={fields} />
    </slot>
    <slot name="pagination">
		{$store.pageIndex * $store.pageSize} / {$store.total}
    </slot>
</div>