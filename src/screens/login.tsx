import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GetSetGitHubApiToken from '../secrets/secrets';

const Login = () => {
  const {navigate} = useNavigation();

  // criando nossos states
  const [user, setUser] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [tokenValue, setTokenValue] = useState<String>('');

  const login = () => {
    // GetSetGitHubApiToken(tokenValue.toString());
    const tkn = tokenValue.toString();
    navigate({route: 'Home', params: tkn});
  };

  const forgetMyPassword = () => {
    Alert.alert('Atenção', 'Cliquei em esqueci minha senha');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView />
      <Text style={styles.title}>Login</Text>
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          onChangeText={text => setUser(text)}
          keyboardType="email-address"
          maxLength={25}
        />
        {/* <Text>User: '{user}'</Text>
        <Text>Senha: '{password}'</Text>
        <Text>Token: '{tokenValue}'</Text> */}
        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          secureTextEntry
          maxLength={10}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Token da API do GitHub"
          onChangeText={text => setTokenValue(text)}
          maxLength={100}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={login}
          activeOpacity={0.8}>
          <Text style={styles.label}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.whiteBackground]}
          onPress={forgetMyPassword}>
          <Text style={[styles.label, styles.blackLabel]}>
            Esqueceu a sua senha?
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.divider}>
        ------------------ ou ------------------
      </Text>
      <View style={styles.containerFooter}>
        <TouchableOpacity style={[styles.button, styles.socialButton]}>
          <Text style={[styles.label, styles.socialLabel]}>
            Login com o Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.whiteBackground]}>
          <Text style={[styles.label, styles.blackLabel, styles.underline]}>
            Não possui uma conta?{' '}
            <Text style={styles.boldWeight}>Crie agora mesmo</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 26,
    marginTop: 24,
    fontWeight: 'bold',
  },
  containerInputs: {
    flex: 2,
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderWidth: 0.3,
    borderColor: 'grey',
    marginTop: 8,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    height: 45,
    backgroundColor: '#000',
    justifyContent: 'center',
    marginTop: 16,
    borderRadius: 5,
  },
  label: {
    color: '#FFF',
    textAlign: 'center',
  },
  whiteBackground: {
    backgroundColor: '#FFF',
  },
  blackLabel: {
    color: '#000',
  },
  containerFooter: {
    flex: 1,
    justifyContent: 'center',
  },
  socialButton: {
    borderColor: 'blue',
    borderWidth: 0.3,
    backgroundColor: '#FFF',
  },
  socialLabel: {
    color: 'blue',
  },
  boldWeight: {
    fontWeight: 'bold',
  },
  divider: {
    textAlign: 'center',
    color: 'grey',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
