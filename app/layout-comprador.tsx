import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeComprador from "./comprador/Home";
import CompradorPerfil from "./comprador/Perfil";
import CompradorPesquisa from "./comprador/Pesquisa";

const Tab = createBottomTabNavigator();

export default function LayoutComprador() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeComprador} />
      <Tab.Screen name="Pesquisar" component={CompradorPesquisa} />
      <Tab.Screen name="Perfil" component={CompradorPerfil} />
    </Tab.Navigator>
  );
}
