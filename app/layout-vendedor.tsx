import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import VendedorEstoque from "./vendedor/Estoque";
import VendedorPerfil from "./vendedor/Perfil";

const Tab = createBottomTabNavigator();

export default function LayoutVendedor() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Estoque" component={VendedorEstoque} />
      <Tab.Screen name="Perfil" component={VendedorPerfil} />
    </Tab.Navigator>
  );
}
