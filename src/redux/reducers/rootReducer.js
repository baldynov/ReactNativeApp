import { combineReducers } from 'redux'
import stackOverflow from '../../StackOverflowScreen/reducers/reducers'
import gitHub from '../../GitHubScreen/reducers/reducers';

export default combineReducers({
    stackOverflow,
    gitHub,
})