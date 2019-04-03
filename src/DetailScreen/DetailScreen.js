import React, {Component} from 'react';
import styled from 'styled-components/native'
import { StatusBar, Linking, Button } from 'react-native'
import { Header } from "../UIKIt/Header/Header";
import { width } from './../helpers/helpersScreenSize'

const Screen = styled.View`
    background: #303030;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    width: ${width};
`;
const DetailView = styled.View`
    flex: 1;
    background: #424242;
    width: ${width};
`;
const DetailViewImage = styled.View`
    justify-content: center;
    align-items: center;
`;
const DetailImage = styled.Image`
    width: 150px;
    height: 150px;
    margin-top: 20px;
`;
const DetailName = styled.Text`
    color: white;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
`;
const DetailDescription = styled.Text`
    color: white;
    margin: 10px;
`;


export default class DetailsScreen extends Component<Props> {
    render() {
        const props =this.props.navigation.state.params;
        return (
            <Screen>
                <StatusBar barStyle='light-content'/>
                <Header detail={true}
                        goBack={this.props.navigation.goBack}
                />
                <DetailView>
                    <DetailViewImage>
                        <DetailImage source={{uri: props.image}}/>
                    </DetailViewImage>
                    <DetailName>{props.name}</DetailName>
                    <DetailDescription>{props.title}</DetailDescription>
                    <Button title='Перейти по URL' onPress={() => Linking.openURL(props.link)}/>
                </DetailView>
            </Screen>
        );
    }
}
