import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import StackOverflowInitialState from '../../StackOverflowScreen/store/initialState'
import GitHubInitialState from '../../GitHubScreen/store/initialState'

export default function configureStore() {
    const initialState = {
        stackOverflow: StackOverflowInitialState(),
        gitHub: GitHubInitialState(),
    };
    const middlewares = [thunk];

    return createStore(rootReducer, initialState, composeWithDevTools(
        applyMiddleware(...middlewares)),
    );
}