import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IUser {
  avatar_url: string;
  name: string;
  bio: string;
  followers_url: string;
}

interface IOwner {
  avatar_url: string;
  url: string;
  followers_url: string;
}

interface IData {
  id: string;
  name: string;
  owner: IOwner;
  url: string;
  language: string;
}

const textDecorationLine = param => {
  const gitHubApiToken = '[GITHUB TOKEN]';
  const [user, setUser] = useState<IUser>();
  const [listRpos, setListRepos] = useState<IData[]>([]);

  const URL = 'https://api.github.com';
  useEffect(() => {
    fetch(`${URL}/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${gitHubApiToken}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        setUser(json);
      })
      .catch(e => {
        console.log(`Erro: ${e}`);
      })
      .finally(() => {
        // Tem algo pra ser feito aqui?
      });
  });

  useEffect(() => {
    fetch(`${URL}/users/mafgomes/repos`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${gitHubApiToken}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(`REPOSITORIOS: ${JSON.stringify(json)}`);
        setListRepos(json);
      });
  }, [gitHubApiToken]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.imageView}>
        <Image source={{uri: user?.avatar_url}} style={styles.image} />
        <Text style={styles.titulo}>Tipo: '{typeof param}'</Text>
        <Text style={styles.titulo}>{user?.name}</Text>
        <Text style={styles.grande}>{user?.bio}</Text>
      </View>
      <View style={styles.praDentro}>
        <Text style={styles.medio}>Repositórios</Text>
        <Text style={styles.pequeno}>Token: '{gitHubApiToken}'</Text>
      </View>
      <FlatList
        data={listRpos}
        renderItem={({item, index}) => (
          <TouchableOpacity>
            <View
              key={index}
              style={{backgroundColor: '#FFF', marginTop: 8, padding: 8}}>
              <Text>{item.name}</Text>
              <Text>{item.language || 'Linguagem não encontrada'}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        // ListHeaderComponent={
        //   <View style={{padding: 8}}>
        //     <Text style={{fontWeight: 'bold', fontSize: 16}}>Repositórios</Text>
        //   </View>
        // }
        ListEmptyComponent={<ActivityIndicator size={'large'} color={'red'} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageView: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
  },
  praDentro: {
    padding: 8
  },
  image: {
    width: 120,
    height: 120,
    borderWidth: 3,
    borderColor: 'grey',
    borderRadius: 60,
    alignSelf: 'center',
  },
  titulo: {
    fontSize: 24,
  },
  grande: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  medio: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pequeno: {
    fontSize: 12,
  },
});
