import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/**
 * Atividade prática — tela de perfil com Flexbox.
 * O posicionamento usa propriedades do próprio React Native.
 */
export default function App() {
  const [estaSeguindo, setEstaSeguindo] = useState(false);

  const estatisticas = [
    { quantidade: '24', descricao: 'Publicações' },
    { quantidade: String(estaSeguindo ? 301 : 300), descricao: 'Seguidores' },
    { quantidade: '120', descricao: 'Seguindo' },
  ];

  return (
    <SafeAreaView style={styles.tela}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F5FA" />
      <ScrollView
        contentContainerStyle={styles.conteudoCentralizado}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cartao}>
          <Text style={styles.titulo}>MEU PERFIL</Text>

          <View style={styles.secaoPerfil}>
            <View
              style={styles.avatar}
              accessibilityLabel="Avatar com as iniciais MD"
            >
              <Text style={styles.iniciais}>MD</Text>
            </View>
            <Text style={styles.nome}>Matheus Duarte</Text>
            <Text style={styles.usuario}>@matheusdev</Text>
            <Text style={styles.descricao}>
              Estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor em formação.
            </Text>
          </View>

          <View style={styles.divisor} />

          <View style={styles.secaoEstatisticas}>
            {estatisticas.map((item, indice) => (
              <View
                key={item.descricao}
                style={[
                  styles.estatistica,
                  indice > 0 && styles.separadorEstatistica,
                ]}
              >
                <Text style={styles.numero}>{item.quantidade}</Text>
                <Text style={styles.legenda}>{item.descricao}</Text>
              </View>
            ))}
          </View>

          <Pressable
            onPress={() => setEstaSeguindo((valorAtual) => !valorAtual)}
            accessibilityRole="button"
            accessibilityLabel={estaSeguindo ? 'Deixar de seguir' : 'Seguir'}
            style={({ pressed }) => [
              styles.botao,
              estaSeguindo && styles.botaoSeguindo,
              pressed && styles.botaoPressionado,
            ]}
          >
            <Text style={[styles.textoBotao, estaSeguindo && styles.textoBotaoSeguindo]}>
              {estaSeguindo ? 'Seguindo ✓' : 'Seguir'}
            </Text>
          </Pressable>
        </View>

        <Text style={styles.rodape}>
          Atividade prática de React Native • Flexbox
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F2F5FA',
  },
  conteudoCentralizado: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  cartao: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingVertical: 30,
    alignItems: 'center',
    gap: 26,
    borderWidth: 1,
    borderColor: '#E4EAF2',
    shadowColor: '#14213D',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 5,
  },
  titulo: {
    color: '#6E7F99',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
  secaoPerfil: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },
  avatar: {
    width: 118,
    height: 118,
    borderRadius: 59,
    backgroundColor: '#2554D6',
    borderWidth: 5,
    borderColor: '#DDE8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iniciais: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
  },
  nome: {
    color: '#1A2740',
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
  },
  usuario: {
    color: '#2554D6',
    fontSize: 14,
    fontWeight: '600',
  },
  descricao: {
    color: '#65758E',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    maxWidth: 310,
  },
  divisor: {
    height: 1,
    width: '100%',
    backgroundColor: '#E6EBF4',
  },
  secaoEstatisticas: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  estatistica: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 4,
  },
  separadorEstatistica: {
    borderLeftWidth: 1,
    borderLeftColor: '#E6EBF4',
  },
  numero: {
    color: '#1A2740',
    fontSize: 21,
    fontWeight: '800',
  },
  legenda: {
    color: '#65758E',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
  botao: {
    width: '100%',
    maxWidth: 300,
    borderRadius: 14,
    backgroundColor: '#2554D6',
    borderWidth: 1,
    borderColor: '#2554D6',
    paddingVertical: 15,
    paddingHorizontal: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoSeguindo: {
    backgroundColor: '#EFF4FF',
    borderColor: '#B8CBFA',
  },
  botaoPressionado: {
    opacity: 0.8,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  textoBotaoSeguindo: {
    color: '#2554D6',
  },
  rodape: {
    color: '#7E8DA4',
    fontSize: 12,
    textAlign: 'center',
  },
});
