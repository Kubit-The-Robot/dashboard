# Kubit: The Game

## Em uma galáxia muito, muito distante...

O **Kubit** é um robô cientista vindo de uma galáxia muito, muito distante, com a missão de pesquisar o nosso sistema solar.
Um dia, enquanto fazia amizade com a sonda *Curiosity* no planeta **Marte**, nosso pequeno herói foi atingido por um asteroide, que o lançou diretamente ao **planeta terra**. 
Agora, você precisará concertar o **Kubit** e o ajudá-lo em sua missão!

## Mecânicas
#### Mecânicas Gerais
> * Ao **resolver as atividades** pedagógicas o **Kubit** desbloqueia `novas skins`, e aumenta a `barra de estudos`.
> * **Toda interação** com o robô gera moedas, que **podem ser trocadas** por `skins` e `acessórios` na loja.

#### Indicadores e Triggers
* **🔋`Energia`**:
	* `Decrementa`: 
		* ⌛*Tempo online*.
	* `Incrementa`: 
		* 🍕*Comer*
		* 📚*Fazer atividades*

* **🔧`Reparos`**:
	* `Decrementa`: 
		* 🐞*Bug aleatório*.
		* 🔋*Bateria abaixo de 25% aumenta a chance de bugs*
	* `Incrementa`: 
		* 🧰*Utilizar caixa de ferramentas para conserto*
		
* **🍕`Fome`**:
	* * `Decrementa`:
		* ⌛*Tempo geral offline + online*.
		* 🎮*Todas as outras atividades*
	* `Incrementa`: 
		* 🍝*Comer comidas variadas*
			* 🛍*Variedades de comidas podem ser obtidas na loja*.

* **❤️`Alegria`**:
	* `Decrementa`:
		* 📊*Baseada nos outros indicadores abaixo de 25%*
		* ⌛*Período sem interações*
	* `Incrementa`: 
		* 🤗*Interações (fazer cócegas, cafuné...)*
		* 📊*Manter os outros indicadores altos*

#### Interações
* **🥳`Como você está se sentindo hoje?`**:
	* `Input`: *Criança escolhe um emoji para representar seu humor, naquele dia.*
	* `Output`: *Pais recebem um **relatório** sobre o humor de seu filho.*

* **🛒`Loja`**: *Espaço onde a criança pode trocar moedas por `acessórios`, `skins` e `comidas` para o Kubit.*
* **🎨`Personalizar`**: Espaço onde a criança pode customizar o robô alterando `skins` e `acessórios`.
* **🎁`Social`**: *A criança pode enviar um presente aleatório todos os dias para outros colegas.*
