import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from "react-native";

export async function LoginRequest(email, senha) {

  try {
    const { data } = await axios.post('https://portalidea.com.br/api/loginJson.php', {
      email_area_aluno: email,
      senha_area_aluno:senha
    })

    return data;
  } catch (error) {
    return null;
  }

}
export async function setUserLocalStorage(user) {

    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));


    } catch (error) {
      return null;
    }
}


export async function getUserLocalStorage() {
  const json = await AsyncStorage.getItem('user');

  if (!json) {
    return null
  }

  const user = JSON.parser(json)

  return user??null;

}
