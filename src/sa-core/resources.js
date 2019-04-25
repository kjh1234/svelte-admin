import { writable } from 'svelte/store';

export const createResourcesStore = dataProvider => {
    const { subscribe, set, update } = writable({
        items: [],
        total: 0,
        pageIndex: 0,
        pageSize: 10,
    });

    const getList = async () => {
        update(async state => {
            const { data, total } = await dataProvider(
                'GET_LIST',
                'customers',
                {
                    pagination: {
                        page: state.pageIndex,
                        perPage: state.perPage,
                    },
                    sort: { field: 'name', order: 'ASC' },
                    filter: {},
                },
            );

            return {
                ...state,
                items: data,
                total: total,
            };
        });
    };

    return {
        subscribe,
        getList,
    };
};
