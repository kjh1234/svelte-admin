export default (location, defaultResource) => {
    const parts = location.pathname.split('/');

    const resource =
        parts.length > 1 ? parts[1] || defaultResource : defaultResource;

    if (parts.length > 3 && parts[3] === 'edit') {
        return { resource, view: 'edit', params: { id: parts[2] } };
    }

    if (parts.length > 2 && parts[2]) {
        return { resource, view: 'show', params: { id: parts[2] } };
    }

    return { resource, view: 'list' };
};
