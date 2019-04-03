import React from 'react'
import styled from 'styled-components/native'
import { width } from './../../helpers/helpersScreenSize'
import { TouchableOpacity } from 'react-native'

const ItemContainer = styled.View`
    height: 50px;
    width: ${width};
    justify-content: center;
    align-items: flex-start;
    padding: 0 10px 0 10px;
    background: #424242;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255, 255, 255, 0.12);
`;
const ItemName = styled.Text`
    color: white;
    font-weight: bold;
`;
const ItemText = styled.Text`color: white;`;

const Item = props => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <ItemContainer>
                <ItemName numberOfLines={1} ellipsizeMode='tail'>{props.name}</ItemName>
                <ItemText numberOfLines={1} ellipsizeMode='tail'>{props.title}</ItemText>
            </ItemContainer>
        </TouchableOpacity>
    )
};

export { Item }