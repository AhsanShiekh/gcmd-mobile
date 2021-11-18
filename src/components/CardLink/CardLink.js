import React from 'react';
import { View, Image } from 'react-native';
import { CardLinkStyles } from './CardLink.styles';
import Icon from "react-native-vector-icons/MaterialIcons";
import AppText from '../AppText/AppText';
import { useNavigation } from '@react-navigation/core';
import { colors } from '../../utils/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardLink = ({image, text, to}) => {

    const navigation = useNavigation()

    return(
        <TouchableOpacity onPress={() => navigation.navigate(to)}>
            <View style={CardLinkStyles.root}>
                <View style={CardLinkStyles.iconContainer}>
                <Image source={image} style={CardLinkStyles.image}/>
                </View>
                <AppText font="Poppins" variant="h6" color="white">{text}</AppText>
            </View>
        </TouchableOpacity>
    )
}

export default CardLink;