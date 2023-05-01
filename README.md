# MemoryCardGame

Este código cria um simples jogo de memória utilizando HTML, CSS e JavaScript. O jogo consiste em doze cartas com diferentes imagens na frente. O objetivo é encontrar todos os pares de cartas iguais. Quando duas cartas iguais são clicadas, elas permanecem visíveis, e quando duas cartas diferentes são clicadas, elas são escondidas novamente.

Para jogar, basta clicar nas cartas para virá-las. Continue clicando até encontrar um par de cartas iguais. Quando encontrar todos os pares, o jogo termina.

O código começa criando um elemento div container e um elemento div interno para armazenar as cartas. Também cria um elemento h1 para o título e um elemento div para exibir o temporizador.

Em seguida, é criado um array com os links das imagens e um loop que cria doze cartas com imagens aleatórias do array. Cada carta tem um ouvinte de eventos que chama a função checkarSrc quando clicada.

A função adicionarClasse adiciona a classe virado na carta clicada para virá-la.

A função checkarSrc verifica se as duas cartas clicadas têm a mesma fonte de imagem. Se elas coincidirem, as cartas são marcadas como corretas e a classe virado é removida de todas as cartas. Se não coincidirem, as cartas são viradas de volta após 250 milissegundos.

O elemento timerDisplay exibe o tempo decorrido desde o início do jogo. O temporizador começa quando qualquer elemento é clicado e é atualizado a cada segundo usando a função updateTimer.

Em resumo, este código fornece uma estrutura básica para um jogo de memória que pode ser expandido com recursos e melhorias adicionais.
