import React from 'react'
import { Provider } from 'react-redux';
import { createAppContainer, createDrawerNavigator } from 'react-navigation'
import GitHubScreen from './src/GitHubScreen/GitHubScreen'
import StackOverflowScreen from './src/StackOverflowScreen/StackOverflowScreen'
import configureStore from './src/redux/store/configureStore'

const DrawerNavigator = createDrawerNavigator({
    StackOverflow: {
        screen: StackOverflowScreen,
    },
    GitHub: {
        screen: GitHubScreen,
    },
});

const AppContainer = createAppContainer(DrawerNavigator);
const store = configureStore();

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        );
    }
}