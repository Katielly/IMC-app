import {StyleSheet } from 'react-native';

const style = StyleSheet.create({
    contextImc : {
        flex : 1,
        marginTop : 20,
        paddingTop : 15,
        alignItems : "center",
        width : "100%" 
    },
    resultImc : {
        fontSize : 48,
        color : "#ff0043",
        marginTop : 15,
        fontWeight: "bold",
    },
    titleResultImc: {
        fontSize : 18,
        color : "#ff0043",
        fontWeight: "bold"
    },    numberImc : {
        fontWeight : "bold",
        color : "#FF0043",
        fontSize : 30,
    },
    information : {
        fontSize : 40,
        color : "#FF0043",
        fontWeight: "bold", 
    },
    boxSharedbutton : {
        width :"100%", //botão pega toda largura do elemento pai
        alignItems : "center",  //centraliza os elementos
        marginBottom : 10,  // margim de baixo 
    },
    shared : {
        backgroundColor : "#1877f3",
        borderRadius : 40, //Arredondar as quina
        paddingBottom : 5,  //margem de baixo
        paddingTop : 5, // margem de cima
    },
    sharedText : {
        color : "#ffffff",
        fontWeight : "bold",
        paddingHorizontal : 30, // margem interna do lado esquerdo e 
        fontSize : 20,
    }
});

export default style