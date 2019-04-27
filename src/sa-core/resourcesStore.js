import { writable } from 'svelte/store';

const resources = {};

export const createResourceStore = (dataProvider, name) => {
    const { subscribe, update } = writable({
        data: [],
        pageIndex: 0,
        pageSize: 10,
        total: 0,
    });

    return {
        subscribe,
        setData: ({ data, total }) =>
            update(state => ({ ...state, data, total })),
        setPageIndex: pageIndex => update(state => ({ ...state, pageIndex })),
        setPageSize: pageSize => update(state => ({ ...state, pageSize })),
    };
};

export const createResourcesStore = dataProvider => {
    const addResource = name => {
        resources[name] = createResourceStore(dataProvider, name);
        return resources[name];
    };

    const getResource = name => resources[name] || createResourceStore(name);

    return {
        addResource,
        getResource,
    };
};

// const getList = async () => {
//     update(async state => {
//         const { data, total } = await dataProvider(
//             'GET_LIST',
//             'customers',
//             {
//                 pagination: {
//                     page: state.pageIndex,
//                     perPage: state.perPage,
//                 },
//                 sort: { field: 'name', order: 'ASC' },
//                 filter: {},
//             },
//         );

//         return {
//             ...state,
//             items: data,
//             total: total,
//         };
//     });
// };
