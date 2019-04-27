<script>
    export let record;
    export let source;
</script>

{#if record && source}
<span>{record[source]}</span>
{/if}