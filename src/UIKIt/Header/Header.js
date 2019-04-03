import React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native';
import { width } from './../../helpers/helpersScreenSize'

const HeaderContainer = styled.View`
    height: 50px;
    width: ${width};
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;
`;
const HeaderButton = styled.Button`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`;
const HeaderText = styled.Text`
    font-size: 15;
    color: white;
    text-align: center;
`;
const View = styled.View`
    flex: 1;
    width: ${width};
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ViewLeft = styled.View`
    position: absolute;
    left: 0;
`;

const Header = props => {
    return (
        <SafeAreaView>
            <HeaderContainer>
                {
                    props.detail ?
                        <HeaderButton title='Назад'
                                onPress={() => props.goBack()}
                        />
                        :
                        <View>
                            <ViewLeft>
                                <HeaderButton title='Меню'
                                              onPress={props.openDrawer}
                                />
                            </ViewLeft>
                            <HeaderText>{props.title}</HeaderText>
                        </View>
                }
            </HeaderContainer>
        </SafeAreaView>
    )
};

export { Header }