import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';


export function Home(){
    const [category, setCategory ] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 as 20:40h',
            description: 'E hoje que vamos chegar '
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Variados',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 as 20:40h',
            description: 'E hoje que vamos chegar '
        },
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View>
                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
                <View style={styles.content}>
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle="Total 6"
                    />
                     <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment data={item} />
                        )}
                        ItemSeparatorComponent={ () => <ListDivider />}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
}