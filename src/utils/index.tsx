function getUrlParam(name:string) {
    const query = window.location.search.substring(1);
    const paramsArr = query.split('&');
    for (let i = 0; i < paramsArr.length; i += 1) {
        const pair = paramsArr[i].split('=');
        if (pair[0] === name) {
            return pair[1];
        }
    }
    return false;
}

export default {
    getUrlParam,
};
