import React, { useState, useEffect } from 'react';
import { 
    ImageBackground, 
    Text, 
    View, 
    FlatList, 
    Alert,
    Share,
    Platform
} from 'react-native'; 
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

 

import { styles } from './styles';
import { theme } from '../../global/styles/themes';

import BannerImg  from '../../assets/banner.png'

import { Load } from '../../components/Load';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header'; 
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/Buttonicon';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

type Params = {
    guildSelectd: AppointmentProps
}

type GuildWidget =  {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}


export function AppointmentDetails() {
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);

    const route = useRoute();
    const {guildSelectd} = route.params as Params;

    const navigation = useNavigation();

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelectd.guild.id}/widget.json`);
            setWidget(response.data);
            

        } catch {
            Alert.alert('Ative o widget nesse Servidor!');
            
        } finally {
            setLoading(false);
        }   
    }

    function handleShareInvitation() {
        const message = Platform.OS === 'ios'
        ? `Junte-se a ${guildSelectd.guild.name} e Vamos nos Divertir!`
        : `Junte-se a ${guildSelectd.guild.name} e Vamos nos Divertir!`;

        Share.share({
            message,
            url: widget.instant_invite
        });
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite);
    }

    function handleDelGuild() {
        Alert.alert('Excluir', `Deseja excluir a partida de ${guildSelectd.guild.name}`,
        [
            {
                text: 'Não',
                style:'cancel'
            },
            {
                text: 'Sim',
                
            }
        ])
    }


    /*async function DelGuild(){
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];

        const indiceGuildDel = appointments.findIndex(() => .id === guildSelectd.id);

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments])
        );

        navigation.navigate('Home');


    }*/

   

    useEffect(()=> {
        fetchGuildWidget();
    },[])

    return (
        <Background>
            <Header
                title={"Detalhes"}
                action={
                    guildSelectd.guild.owner &&
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
                <View style= {styles.iconTrash}>
                    <View>
                    </View>
                    <BorderlessButton onPress={handleDelGuild}>
                        <Fontisto
                            name="trash"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                </View>

                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        {guildSelectd.guild.name}
                    </Text>

                    <Text style={styles.subtitle}>
                        {guildSelectd.description}
                    </Text>
                </View>

            </ImageBackground>
            {
                loading ? <Load /> :
                <>
                    <ListHeader
                        title="Jogadores"
                        subtitle={`Total: ${widget.members.length}`}
                    />

                    <FlatList 
                        data={widget.members}
                        keyExtractor={item => item.id}
                        renderItem={({ item}) => (
                            <Member data={item} />
                        )}
                        ItemSeparatorComponent={()=> <ListDivider isCentered />}
                        style={styles.members}
                    />
                </>
            }
            {
            guildSelectd.guild.owner &&
            <View style={styles.footer}>
                <ButtonIcon
                title="Entrar na Partida"
                onPress={handleOpenGuild}
                />
            </View>
            }
        </Background>
    );
}