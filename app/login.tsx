import { Link } from 'expo-router';
import React, { Component } from 'react';
import { Image, Text, TextInput, TouchableHighlight, View } from 'react-native';

const logins = [{
    //vendendor:
    telefone: '123456789',
    senha: '123456',
},
    {
        //comprador
        telefone: '987654321',
        senha: '654321',
    }

]

export class login extends Component {


state = {
    telefone: '',
    senha: '',
};

handleTelefoneChange = (text: string) => {
    this.setState({ telefone: text });
};

handleSenhaChange = (text: string) => {
    this.setState({ senha: text });
};

render() {
    const { telefone, senha } = this.state;
    const href = {
        pathname: "/login/[telefone]/[senha]",
        params: { telefone: encodeURIComponent(telefone), senha: encodeURIComponent(senha) }
    };

    return (
        <View className="flex-1">
            <Image
                source={require('../assets/images/bra1.png')}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                }}
            />
            <View className="items-center flex-1 justify-center gap-5">
                <Image
                    source={require('../assets/images/logo_com_fundo.png')}
                    className="w-80 h-80 mb-5 rounded-xl"
                />
                <Text className="text-2xl font-bold mb-5">Login</Text>
                <TextInput
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg p-2 mb-5 w-80"
                    placeholder="Telefone"
                    keyboardType="numeric"
                    value={telefone}
                    onChangeText={this.handleTelefoneChange}
                />
                <TextInput
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg p-2 mb-5 w-80"
                    placeholder="Senha"
                    value={senha}
                    onChangeText={this.handleSenhaChange}
                    secureTextEntry
                />
                {logins.some(
                    (login) => login.telefone === telefone && login.senha === senha
                ) ? (
                    <Link
                        href={{
                            pathname: telefone == logins[0].telefone ? "/home-vendedor" : "/home-comprador",
                            params: {
                                telefone: encodeURIComponent(telefone),
                                senha: encodeURIComponent(senha),
                            },
                        }}
                        asChild
                    >
                        <TouchableHighlight
                            className="bg-primary rounded-lg p-5 mb-5 w-80"
                            underlayColor="#005fa3"
                        >
                            <Text className="text-center text-white">Entrar</Text>
                        </TouchableHighlight>
                    </Link>
                ) : (
                    <TouchableHighlight
                        className="bg-primary rounded-lg p-5 mb-5 w-80"
                        underlayColor="#005fa3"
                        onPress={() => {
                            alert('Telefone ou senha inválidos');
                        }}
                    >
                        <Text className="text-center text-white">Entrar</Text>
                    </TouchableHighlight>
                )}
                <Text className="text-center text-blue-500">Esqueceu a senha?</Text>
            </View>
        </View>
    );
}
}

export default login