<script>
    import { setContext } from 'svelte';
    import { createResourcesStore } from './resourcesStore';
    import createLocationStore from './locationStore'
    export let history;
    export let dataProvider;
    export let defaultResource;

    const locationStore = createLocationStore(history, defaultResource);
    const resourcesStore = createResourcesStore(dataProvider);

    setContext('admin', {
        resource: $locationStore.resource,
        view: $locationStore.view,
        params: $locationStore.params,
        getStore: resource => resourcesStore.getResource(resource),
    });
</script>

<div class="mui-container-fluid">
    <p class="mui--text-dark-secondary">{$locationStore.resource}/{$locationStore.view}</p>
    <slot></slot>
</div>
