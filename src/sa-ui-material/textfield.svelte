<script>
    import { getContext, onMount } from 'svelte';
    import TextFieldCell from './textfield-cell.svelte';
    export let source;
    export let record;
    export let cellClass;
    const dataGridContext = getContext('datagrid');

    onMount(() => {
        if (dataGridContext) {
            dataGridContext.addField({ source, component: TextFieldCell, cellClass });
        }

        return () => {
            dataGridContext.removeField(source);
        }
    });
</script>