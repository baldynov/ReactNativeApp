import React, { Component } from 'react'
import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
import { width } from "../helpers/helpersScreenSize"

const Screen = styled.View`
    background: #303030;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const ModalText = styled.Text`
    color: white;
    margin-bottom: 10px;
`;
const ContainerButton = styled.View`
    width: ${width};
    flex-direction: row;
    justify-content: center;
`;
const ModalButton = styled.Button``;
const Empty = styled.View`width: 50px;`;

export default class ModalScreen extends Component<Props> {

    render() {
        const props = this.props.navigation.state.params;
        return (
            <Screen>
                <StatusBar barStyle='light-content'/>
                <ModalText>Вы действительно хотите перейти?</ModalText>
                <ContainerButton>
                    <ModalButton title='Ок'
                            onPress={() => this.props.navigation.navigate('Detail', ({...props}))}
                    />
                    <Empty />
                    <ModalButton title='Отмена'
                            onPress={() => this.props.navigation.goBack()}
                    />
                </ContainerButton>
            </Screen>
        );
    }
}
