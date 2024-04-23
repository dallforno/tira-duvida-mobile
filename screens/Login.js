import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Image,
} from "react-native";
import { COLORS, images } from '../constants'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Aqui você pode adicionar sua lógica de autenticação
    if (username === "user" && password === "pass") {
      navigation.navigate("Main");
    } else {
      setError("Nome de usuário ou senha incorretos");
    }
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Image
          source={images.avatar}
          style={styles.logo}
        />
        <Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          placeholderTextColor={COLORS.white}
          value={username}
          onChangeText={setUsername}
          />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={COLORS.white}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0e0e",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 40,
    color: COLORS.white,
    backgroundColor: "#212121",
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default LoginScreen;
