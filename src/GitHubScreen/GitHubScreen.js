import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/gitHubActions'
import { StatusBar } from 'react-native'
import { Header } from '../UIKIt/Header/Header'
import { ItemList } from '../UIKIt/ItemList/ItemList'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import DetailsScreen from '../DetailScreen/DetailScreen';
import ModalScreen from '../ModalScreen/ModalScreen';

const Screen = styled.View`
    background: #303030;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

class GitHubScreen extends Component<Props> {

    static navigationOptions = {
        drawerLabel: 'GitHub',
    };

    componentDidMount() {
        this.props.screenProps.actions.getDataGitHub();
    }

    render() {
        const { data, mode, fetching } = this.props.screenProps.gitHub;
        return (
            <Screen>
                <StatusBar barStyle='light-content'/>
                <Header title={mode}
                        openDrawer={this.props.navigation.openDrawer}
                />
                <ItemList navigation={this.props.navigation}
                          data={data}
                          fetching={fetching}
                />
            </Screen>
        );
    }
}

const MainStack = createStackNavigator(
    {
        Home: GitHubScreen,
        Detail: DetailsScreen
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        Modal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(RootStack);

const mapStateToProps = state => {
    return {
        gitHub: state.gitHub,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
};

const mergeProps = (state, dispatch, ownProps) => {
    return ({
        ...ownProps,
        screenProps: {
            ...ownProps.screenProps,
            ...state,
            ...dispatch
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AppContainer)