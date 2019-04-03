import React from 'react'
import styled from 'styled-components/native'
import { ScrollView, ActivityIndicator } from 'react-native';
import { width } from './../../helpers/helpersScreenSize'
import { Item } from "../Item/Item";

const ItemListContainer = styled.View`
    flex: 1;
    width: ${width};
    justify-content: flex-start;
    align-items: center;
    background: #424242; 
`;
const ItemListText = styled.Text`
    color: white;
    justify-content: center;
    align-items: center;
`;
const ContentCenter = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ItemList = props => {
    return (
        <ItemListContainer>
            {
                props.fetching ?
                    <ContentCenter>
                        <ActivityIndicator size='large' color='#000000'/>
                        <ItemListText>Загрузка</ItemListText>
                    </ContentCenter>
                    :
                    !props.data || props.data.length === 0 ?
                        <ContentCenter>
                            <ItemListText>Данные отсутствуют</ItemListText>
                        </ContentCenter>
                        :
                        <ScrollView>
                            {
                                props.data.map((item, index) => {
                                    return <Item key={`item_${index}`}
                                                 name={item.name}
                                                 title={item.title}
                                                 onPress={() => props.navigation.navigate('Modal', ({...item}))}/>
                                })
                            }
                        </ScrollView>
            }

        </ItemListContainer>
    )
};

export { ItemList }