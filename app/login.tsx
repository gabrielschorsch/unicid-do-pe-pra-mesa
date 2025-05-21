import { useRouter } from 'expo-router';
import React from 'react';
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

export default function LoginScreen() {
    const router = useRouter();
    const [telefone, setTelefone] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const handleLogin = () => {
        const usuario = logins.find(
            (login) => login.telefone === telefone && login.senha === senha
        );
        if (usuario) {
            if (usuario.telefone === logins[0].telefone) {
                router.push('/layout-vendedor' as any);
            } else if (usuario.telefone === logins[1].telefone) {
                router.push('/layout-comprador' as any);
            } else {
                alert('Tipo de usuário não reconhecido');
            }
        } else {
            alert('Telefone ou senha inválidos');
        }
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
                    onChangeText={setTelefone}
                />
                <TextInput
                    className="bg-gray-100 border-2 border-gray-300 rounded-lg p-2 mb-5 w-80"
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                <TouchableHighlight
                    className="bg-primary rounded-lg p-5 mb-5 w-80"
                    underlayColor="#005fa3"
                    onPress={handleLogin}
                >
                    <Text className="text-center text-white">Entrar</Text>
                </TouchableHighlight>
                <Text className="text-center text-blue-500">Esqueceu a senha?</Text>
            </View>
        </View>
    );
}