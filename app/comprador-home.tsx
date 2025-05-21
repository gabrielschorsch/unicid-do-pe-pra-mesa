import { FlatList, Text, View } from "react-native";

const produtos = [
  { id: "1", nome: "Produto 1" },
  { id: "2", nome: "Produto 2" },
  { id: "3", nome: "Produto 3" },
];

export default function HomeComprador() {
  return (
    <FlatList
      data={produtos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#eee' }}>
          <Text>{item.nome}</Text>
        </View>
      )}
    />
  );
}
