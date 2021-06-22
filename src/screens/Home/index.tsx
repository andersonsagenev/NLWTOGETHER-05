import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';


export function Home(){
    const [category, setCategory ] = useState('');

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
                    setCategory={setCategory}/>
            </View>

        </View>
    );
}