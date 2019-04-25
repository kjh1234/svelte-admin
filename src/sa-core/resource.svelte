<script>
    export let name;
    export let history;

    const getView = location => {
        const parts = location.pathname.split('/');
    
        if (parts.length > 2 && parts[2] === 'edit') {
            return { view: 'edit', params: { id: parts[1] } };
        }
    
        if (parts.length > 1 && parts[1]) {
            return { view: 'show', params: { id: parts[1] } };
        }

        return { view: 'list' };
    }

    let { view, params } = getView(history.location);
</script>

<div class="mui-container-fluid">
    <p>{history.location.pathname}</p>
    {#if view === 'list'}
    <div name="list">
        <p>List</p>
    </div>
    {/if}

    {#if view === 'show'}
    <div name="show">
        <p>Show</p>
    </div>
    {/if}

    {#if view === 'edit'}
    <div name="edit">
        <p>Edit</p>
    </div>
    {/if}
</div>