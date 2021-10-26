import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';


export function Home(){
    const [category, setCategory ] = useState('');
    const navigation = useNavigation();

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
        {
            id: '3',
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
        {
            id: '4',
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
        {
            id: '5',
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
        {
            id: '6',
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

    function handleAppointmentDetail(){
        navigation.navigate('AppointmentDetail');
    }
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    return(
        <Background style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd 
                onPress={handleAppointmentCreate}/>
            </View>
           
            <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <ListHeader
                title="Partidas agendadas"
                subtitle="Total 6"
            />
            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment 
                        data={item}
                        onPress={handleAppointmentDetail} />
                    )}
                ItemSeparatorComponent={ () => <ListDivider />}
                contentContainerStyle={ {paddingBottom: 69}}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
            />

        </Background>
    );
}