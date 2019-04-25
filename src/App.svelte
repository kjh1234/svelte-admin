<script>
	import { createBrowserHistory } from 'history';
	import dataProvider from './data-provider';
	import fakeServer from './fake-server';
	import Resource from './sa-core/resource.svelte';

	const history = createBrowserHistory();

	fakeServer();
</script>

<Resource name="customers" history={history} />