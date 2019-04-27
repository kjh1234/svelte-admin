<script>
	import { createHashHistory as createHistory } from 'history';
	import dataProvider from './data-provider';
	import fakeServer from './fake-server';
	import Resource from './sa-core/resource.svelte';
	import Admin from './sa-core/admin.svelte';
	import CustomersList from './demo/customers/list.svelte';

	const history = createHistory();

	fakeServer();
</script>

<Admin
	dataProvider={dataProvider}
	history={history}
	defaultResource="customers"
>
	<Resource name="customers" list={CustomersList} />
	<Resource name="categories" />
	<Resource name="products" />
	<Resource name="commands" />
	<Resource name="invoices" />
	<Resource name="reviews" />
</Admin>