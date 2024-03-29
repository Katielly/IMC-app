import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext : {
        flex : 1,
        backgroundColor : "#ffffff",
        marginTop : 30,
        alignItems : "center",
        borderTopRightRadius: 30,
        borderTopLeftRadius : 30,
        paddingTop : 30,
    },
    form : {
        width :"100%",
        height :"auto",
    },
    formLabel : {
        color : "#000000",
        fontSize : 18,
        paddingLeft : 20,
    },
    formInput : {
        width : "90%",
        borderRadius : 50,
        backgroundColor : "#f6f6f6",
        height : 40,
        margin : 12,
        paddingLeft : 10, 
    },
    buttonCalculator : {
        borderRadius : 50,
        alignItems : "center",
        justifyContent : "center",
        width : "90%",
        backgroundColor : "#ff0043",
        paddingTop : 14,
        paddingBottom : 14,
        marginLeft : 12,
        margin : 30,
    },
    textButtonCalculator : {
        color : "#ffffff",
        fontSize : 20,
    },
    errorMessage : {
        fontSize : 12,
        color : "red",
        fontWeight : "bold",
        paddingLeft : 20,
    },
    exibiResultImc : {
        width : "100%",
        height: "50%",
    },
    listImcs : {
        marginTop : 20,

    }, 
    resultImcItem : {
        fontSize : 30,
        height : 50,
        color: "red",
        width : "100%",
        paddingRight : 20,
    },
    textResultItemList : {
        fontSize : 20,
        color: "red",
    }
});

export default styles;