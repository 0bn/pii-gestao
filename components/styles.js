import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';


const StatusBarHeight = Constants.statusBarHeight;


//colors
export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    tertiary: '#fd1d1d',
    darkLight: '#9CA3AF',
    brand: '#6D28D9',
    green: '#10B981',
    red: '#EF4444',
    customGreen: '#709383',
    backgroundGreen: '#FFFBF6',
    greenForm: '#91A098',
    roxinho: '#937080',
    green2: '#CEE5DD',
    black: '#000000'
}


const {primary, secondary, tertiary, darkLight, brand, green, red, customGreen, backgroundGreen, green2, greenForm, black} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${backgroundGreen};
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
`;


export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${backgroundGreen};
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;  
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;

    `;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%;
`;

export const PageTitle = styled.Text`
    font-size: 36px;
    text-align: left;
    font-weight: bold;
    padding: 10px;
    line-height: 1.5px; 
    ${(props) => props.welcome && `
    font-size: 35px;
    `}
`;

export const MyTextInput = styled.TextInput`
    background-color: ${customGreen};
    padding: 15px;
    padding-left: 55px;
    border-radius: 20px; 
    font-size: 16px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${black};  
`;


export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${primary}; 

    ${(props) => props.welcome && `
    margin-bottom: 5px;
    font-weight: normal;
    `}
`;
export const StyledFormArea = styled.View`
    width: 90%; `;
    

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    border-radius: 5px;
    font-size: 16px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${primary}; 
    
    `;
export const StyledInputLabel = styled.Text`
    color: ${black}; 
    font-size: 13px;
    
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 30px;
    position: absolute;
    z-index: 1;
    color: ${primary};
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 30px;
    position: absolute;
    z-index: 1;
    color: ${primary}; 
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: #709383;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

    ${(props) => props.google == true && `
        padding-left: 15px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${(props) => props.type === 'SUCESSO' ? customGreen : tertiary};
`;


export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-itmes: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content:center;
    color: ${black};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items:center;
`;

export const TextLinkContent = styled.Text`
    color: ${customGreen};
    font-size: 15px;
`;

