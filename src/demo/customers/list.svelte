<script>
    import { setContext } from 'svelte';

    import List from '../../sa-ui-material/list.svelte';
    import Datagrid from '../../sa-ui-material/datagrid.svelte';
    import TextField from '../../sa-ui-material/textfield.svelte';
    export let resource;

    setContext('list', {
        data: [
            { id: 0, first_name: 'Gildas', last_name: 'Garcia' },
            { id: 1, first_name: 'Chloé', last_name: 'Garcia' },
            { id: 2, first_name: 'Alba', last_name: 'Garcia' },
,        ]
    });
</script>

<List>
    <div slot="data">
        <Datagrid>
            <TextField source="first_name" />
            <TextField source="last_name" cellClass="mui--text-accent" />
        </Datagrid>
    </div>
</List>