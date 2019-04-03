import actionTypes from './actionTypes';

export function getDataGitHub() {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.GIT_HUB_REQUEST,
        });

        const url = 'https://api.github.com/repositories';
        fetch(url)
            .then(res => res.json())
            .then(json => json.map(item => ({
                name: item.owner.login,
                title: item.name,
                image: item.owner.avatar_url,
                link: item.html_url
            })))
            .then(result => {
                dispatch({
                    type: actionTypes.GIT_HUB_GET_DATA,
                    payload: result
                });
            })
            .catch(error => {
                console.log('Произошла ощибка: ', error);
                dispatch({
                    type: actionTypes.GIT_HUB_FAIL
                })
            });
    }
}