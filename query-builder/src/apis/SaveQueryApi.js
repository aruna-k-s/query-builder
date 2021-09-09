export const SaveQueryAPI = async(saveQueryData) => {
    try {
        const url = 'https://abcd.com/' + 'classes/saveQuery';
        const body = saveQueryData.payload;
        const saveQueryResponseData = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
        });
        return await saveQueryResponseData.json();
    } catch (errors) {
        return errors;
    }
};
