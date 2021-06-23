import React from 'react';
import { View } from 'react-native'; 
 
import { styles } from './styles';
import { theme } from '../../global/styles/themes';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header'; 

export function AppointmentDetails() {
    return (
        <Background>
            <Header
                title={"Detalhes"}

            />

        </Background>
    );
}