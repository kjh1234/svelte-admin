import { readable } from 'svelte/store';
import parseLocation from './parseLocation';

const getStateFromLocation = (location, defaultResource) => {
    const { resource, view, params } = parseLocation(location, defaultResource);

    return {
        location,
        resource,
        view,
        params,
    };
};
const createLocationStore = (history, defaultResource) => {
    const initialState = getStateFromLocation(history.location);

    return readable(initialState, set => {
        const unlisten = history.listen(newLocation => {
            const newState = getStateFromLocation(newLocation, defaultResource);
            set(newState);
        });

        return () => {
            unlisten();
        };
    });
};

export default createLocationStore;
