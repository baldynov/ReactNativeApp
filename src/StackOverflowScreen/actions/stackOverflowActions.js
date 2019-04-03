import actionTypes from './actionTypes';

export function getDataStackOverflow() {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.STACK_OVERFLOW_REQUEST,
        });

        const url = 'https://api.stackexchange.com/2.2/posts?order=desc&sort=activity&site=stackoverflow&filter=!)4k*ov_zsDoBZT(ZdMHuUZKyHX)H';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                return json.items.map(item => ({
                    name: item.owner.display_name,
                    title: item.title,
                    image: item.owner.profile_image,
                    link: item.link
                }))
            })
            .then(result => {
                dispatch({
                    type: actionTypes.STACK_OVERFLOW_GET_DATA,
                    payload: result
                });
            })
            .catch(error => {
                console.log('Произошла ощибка: ', error);
                dispatch({
                    type: actionTypes.STACK_OVERFLOW_FAIL
                })
            });
    }
}