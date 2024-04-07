import react, { useState } from "react";
import { TextInput, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
const App = () => {
  const [userName, onChangeUserName] = useState("");
  const [password, onChangePassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require("./assets/background.jpg")}>
        <Image source={require("./assets/logo.png")} style={styles.image} />
        <Text style={styles.text}>
          LOGIN
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={userName}
          onChangeText={onChangeUserName}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={onChangePassword} />

        <TouchableOpacity style={styles.button}
          onPress={() => {
            alert(`Hello ${userName} ${password}`);
            onChangeUserName("");
            onChangePassword("");
          }}
        >
          <Text>
            Login
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

  },
  background: {
    flex: 1,
    resizeMode: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200
  },
  button: {
    backgroundColor: "violet",
    color: 'white',
    padding: 10,
    width: 200,
    marginTop: 10,
    borderRadius:5,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderRadius:5,
    borderWidth: 1,
    padding: 10,
    color: "white",
    marginTop: 10
  },
  text: {
    padding:10,
    color: "white",
  }
});
export default App;
