import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';


export function Profile(){
    return(
        <View style={styles.container}> 

        <Avatar urlImage="https://instagram.fcpv5-1.fna.fbcdn.net/v/t51.2885-15/e35/122027092_268520137800632_7740387787243125725_n.jpg?tp=1&_nc_ht=instagram.fcpv5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=8Ip2YeUxXHcAX-NTN9_&edm=AABBvjUBAAAA&ccb=7-4&oh=fd550dec15ed052eb65e80fd5857af5f&oe=60D80EF4&_nc_sid=83d603"/>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Daniel
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    )
}