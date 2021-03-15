import React, { useState } from "react"
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Text,
  Image,
} from "react-native"

function Login({ navigation }) {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = () => {
    if (login == "mohamed" && password == "123456") {
      navigation.navigate("Quizz")
    } else {
      Alert.alert("Username or password is incorrect!")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>

      <View style={[{ width: "70%", margin: 10, padding: 10 }]}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          onChangeText={(login) => setLogin(login)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          title="Sign in"
          style={styles.loginButton}
          onPress={handleSignIn}
        />
      </View>
      <Text style={styles.text} onPress={() => navigation.navigate("Register")}>
        Click here to register
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 150,
  },
  input: {
    height: 40,
    padding: 12,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  loginButton: {},
  text: {
    marginTop: 10,
  },
})

export default Login
