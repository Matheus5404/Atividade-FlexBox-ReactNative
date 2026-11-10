# Tarefa Flexbox — Tela de Perfil em React Native

**Aluno:** Matheus Lourenço Duarte  
**Curso:** Análise e Desenvolvimento de Sistemas (ADS)  
**Atividade:** React Native — Flexbox

## Objetivo

Desenvolver uma tela de perfil simples com os conceitos de **Flexbox** no React Native, conforme a atividade proposta em aula.

## Prévia ilustrativa

![Ilustração da tela de perfil](assets/previa-ilustrativa.svg)

*Esta é uma ilustração do layout, não uma captura do aplicativo em execução.*

## Funcionalidades

- Avatar circular com iniciais, nome de usuário e descrição.
- Estatísticas alinhadas horizontalmente: publicações, seguidores e seguindo.
- Botão **Seguir**, que alterna para **Seguindo** e altera um contador de demonstração.
- Layout centralizado e adaptado a telas menores com rolagem.

## Requisitos de Flexbox

| Requisito | Implementação |
| --- | --- |
| Container ocupando a tela | `flex: 1` |
| Conteúdo centralizado nos dois eixos | `justifyContent: 'center'` e `alignItems: 'center'` |
| Avatar, nome e descrição centralizados | `View` com `alignItems: 'center'` |
| Estatísticas em linha | `flexDirection: 'row'` |
| Espaçamento equilibrado | `justifyContent: 'space-around'` e `flex: 1` |
| Botão abaixo das informações | `Pressable` centralizado |
| Responsividade | `ScrollView`, `flexGrow: 1`, `maxWidth` |

Não foram usadas bibliotecas externas de layout.

## Tecnologias

React Native, Expo SDK 57, JavaScript e StyleSheet.

## Como executar

É recomendado usar **Node.js 22.13 ou mais recente**.

1. Abra um terminal na pasta do projeto.
2. Execute `npm install`.
3. Para abrir no navegador sem emulador Android, execute `npm run web`.
4. Para executar com Expo Go, use `npm start` e abra o QR Code no celular, observando a compatibilidade de versão do Expo Go.

> **Observação:** o código foi preparado para entrega acadêmica. O funcionamento completo em dispositivo físico ainda não foi verificado neste ambiente.

## Arquivos principais

- `App.js`: interface e propriedades Flexbox.
- `index.js`: entrada do Expo.
- `package.json`: dependências e scripts.
- `app.json`: configuração do aplicativo.
- `INSTRUCOES_ENTREGA.md`: como entregar no Teams.
