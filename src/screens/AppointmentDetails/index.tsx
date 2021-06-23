import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native'; 
 
import { styles } from './styles';

import { Fontisto } from '@expo/vector-icons';
import { theme } from '../../global/styles/themes';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';


import { Header } from '../../components/Header'; 
import { BorderlessButton } from 'react-native-gesture-handler';
import BannerImg  from '../../assets/banner.png'
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/Buttonicon';


export function AppointmentDetails() {
    const members = [
        {
            id: '1', 
            username: 'Joao Pedro ',
            avatar_url: 'https://instagram.fcpv5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82540948_172250687331100_1494996154876690432_n.jpg?tp=1&_nc_ht=instagram.fcpv5-1.fna.fbcdn.net&_nc_ohc=Q2gkBG7ZEXkAX93ToMB&edm=ABfd0MgBAAAA&ccb=7-4&oh=876f7da9f5b36942d9c674a13e95a95b&oe=60D96C6C&_nc_sid=7bff83',
            status: 'Online'
        },
        {
            id: '2', 
            username: 'Gabrielle ',
            avatar_url: 'https://instagram.fcpv5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/187321392_303973068043054_3309499818780645828_n.jpg?tp=1&_nc_ht=instagram.fcpv5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=SIv5MwfhjO8AX822H2Y&edm=ABfd0MgBAAAA&ccb=7-4&oh=2dd1364006eec712045c330c0412cdfd&oe=60D9364F&_nc_sid=7bff83',
            status: 'Ocupado'
        },
        {
            id: '3', 
            username: 'Juan Coelho ',
            avatar_url: 'https://instagram.fcpv5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/172155504_1107099026478539_7808289025000539780_n.jpg?tp=1&_nc_ht=instagram.fcpv5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=0HFKHrRuU2MAX-40vx9&tn=jWcH-ifH-YbAguF7&edm=ABfd0MgBAAAA&ccb=7-4&oh=4080d470c1b1dc5132244673515625cb&oe=60D9D0F8&_nc_sid=7bff83',
            status: 'Ocupado'
        }
    ]

    return (
        <Background>
            <Header
                title={"Detalhes"}
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground 
                source={ BannerImg }
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida ranqueada!
                    </Text>
                </View>

            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item}) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={()=> <ListDivider />}
                style={styles.members}
            />
            
            <View style={styles.footer}>
                <ButtonIcon
                title="Entrar na Partida"
                />
            </View>
        </Background>
    );
}