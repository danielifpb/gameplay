import React from 'react';
import { Image } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';


export function GuildIcon(){
    const uri = 'https://i.imgur.com/khf1txv.png';

    return(
        <Image 
            source={{ uri }}
            style={ styles.image}
            resizeMode="cover"
        /> 

       
    )
}