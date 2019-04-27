
<script>
    import { getContext } from 'svelte';
    export let name;
    export let list;
    const adminContext = getContext('admin');
</script>

{#if name === adminContext.resource}
    {#if adminContext.view === 'list'}
    <svelte:component this={list} resource={name} />
    {/if}

    {#if adminContext.view === 'show'}
    <div name="show">
        <p>Show</p>
    </div>
    {/if}

    {#if adminContext.view === 'edit'}
    <div name="edit">
        <p>Edit</p>
    </div>
    {/if}
{/if}