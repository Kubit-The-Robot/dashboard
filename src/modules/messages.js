/**
 * Narrator's lines throughout the game
 */

export const messages = {
  GAME: {
    stageName: (stageName) => `${stageName}`,
  },
  LESSON: {
    math: () => 'Quantas frutas e legumes de cada tipo, existem na imagem?',
  },
  USERNAME: {
    greetings: () => 'Olááá! esse é o Qilbit, e eu sou a Ana Byte, Como posso te chamar?',
    ifIsEmpty: () => 'Você precisa digitar o seu nome, nessa caixa para poder continuar!',
    ifMinChars: () => 'Seu nome precisa ter mais de 2 letras',
    IfKnowYourName: (name) => `${name}, que nome legal!`,
  },
}