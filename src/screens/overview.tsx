import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

const DATA = [
  {
    id: '45324521',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/ATT-Emblem.png',
    name: 'AT&T',
    priceInDollars: 29.99,
    data: '5GB',
    validity: 'Valid for 30 days',
    color: '#A3A8F1',
    location: 'Mexico',
  },
  {
    id: '45324522',
    logo: 'https://cdn.worldvectorlogo.com/logos/verizon-2.svg',
    name: 'Verizon',
    priceInDollars: 39.99,
    data: '10GB',
    validity: 'Valid for 24 days',
    color: '#F9A3A3',
    location: 'Canada',
  },
  {
    id: '45324523',
    logo: 'https://cdn.worldvectorlogo.com/logos/verizon-2.svg',
    name: 'T-Mobile',
    priceInDollars: 49.99,
    data: '15GB',
    validity: 'Valid for 20 days',
    color: '#7CE0A3',
    location: 'USA',
  },
  {
    id: '45324524',
    logo: 'https://cdn.worldvectorlogo.com/logos/verizon-2.svg',
    name: 'Cricket Wireless',
    priceInDollars: 59.99,
    data: '20GB',
    validity: 'Valid for 5 days',
    color: '#F9DFA3',
    location: 'Brazil',
  },
  {
    id: '45324525',
    logo: 'https://cdn.worldvectorlogo.com/logos/verizon-2.svg',
    name: 'Boost Mobile',
    priceInDollars: 69.99,
    data: '25GB',
    validity: 'Valid for 1 day',
    color: '#A3A3F9',
    location: 'Argentina',
  },
];

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>Hello World</Text>
          <Text style={styles.subtitle}>This is the first page of your app.</Text>
        </View>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginBottom: 16,
                  padding: 16,
                  justifyContent: 'space-between',
                  borderRadius: 16,
                  backgroundColor: item.color,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 20,
                  }}>
                  <View style={{ flexDirection: 'row', gap: 8 }}>
                    <Image
                      source={{ uri: item.logo }}
                      style={{
                        height: 24,
                        width: 24,
                        borderRadius: 48,
                        backgroundColor: '#fff',
                      }}
                    />
                    <Text style={{ color: '#010810', fontSize: 16 }}>{item.name}</Text>
                  </View>

                  <Text style={{ color: '#010810', fontSize: 18 }}>{item.location}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text style={{ color: '#0e0524', fontSize: 16, fontWeight: '500' }}>
                      {item.data}
                    </Text>
                    <Text style={{ fontSize: 12 }}>{item.validity}</Text>
                  </View>
                  <Text style={{ color: '#0e0524', fontSize: 20, fontWeight: '500' }}>
                    ${item.priceInDollars}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#6366F1',
    borderRadius: 24,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#38434D',
    fontSize: 36,
  },
});
