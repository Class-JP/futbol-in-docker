export const formatDate = (date: string | undefined): string => {
    if (date === undefined)
        return '';

    return new Date(date).toLocaleString();
};