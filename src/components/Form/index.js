import React, { useState } from "react";
import {
    TextInput,
    View,
    Text,
    TouchableOpacity, // componente que deixa o botão opaco apos clicar
    Vibration,  //componente de vibrar o cll
    Pressable, //componente de pressionar certo elemento e quais são as ações
    Keyboard, // componente sobre o teclado
    FlatList
} from 'react-native';
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = React.useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([])

    function imcCalcular() {
        let heightFormat = height.replace(",", ".") //replace é o metodo que pega um caracter e troca por outro
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
        setImc(totalImc)
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("*Campo Obrigatório")
        }
    }

    function validationImc() {
        console.log('imcList: ',imcList)
        if (weight != null && height != null) {
            imcCalcular()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ");
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        } else {
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preencha o peso e altura")
        }
    }

    return (
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel} > Altura</Text>
                    <Text style={styles.errorMessage}> {errorMessage} </Text>
                    <TextInput
                        onChangeText={setHeight}
                        value={height}
                        style={styles.formInput}
                        placeholder="Ex. 1.60" //Exibido dentro do input ser visto como exemplo
                        keyboardType="numeric" //exibirá um telado numerico
                    ></TextInput>

                    <Text style={styles.formLabel} >Peso</Text>
                    <Text style={styles.errorMessage}> {errorMessage} </Text>
                    <TextInput
                        value={weight}
                        onChangeText={setWeight}
                        style={styles.formInput}
                        placeholder="Ex. 80.5"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationImc()
                        }}                >
                        <Text style={styles.textButtonCalculator}>  {textButton} </Text>
                    </TouchableOpacity>
                </Pressable >
                :
                <View style={styles.exibiResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationImc()
                        }}                >
                        <Text style={styles.textButtonCalculator}>  {textButton} </Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
            style={styles.listImcs}
            data={imcList.reverse()}
            renderItem={({item}) =>{
                return(
                    <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                        {item.imc}
                    </Text>
                )
            }}
            keyExtractor={(item) => {
                item.id
            }}
            >

            </FlatList>
        </View>

    );
}