# Plano de Testes de Usabilidade


Os testes de usabilidade permitem avaliar a qualidade da interface com o usuário da aplicação interativa. Este plano de testes busca definir possíveis critérios para realização de teste futuros.


## Objetivos Principais Dos Testes


|ID    | Objetivo | 
|------|-----------------------------------------|
|RF-001| Entender as principais dificuldades que o usuário tiver durante a realização da busca desejada. |
|RF-002| Entender as dificuldades de navegação e compreensão que o usuário encontrar com a tela de exibição relacionado às palavras buscadas. |
|RF-003| Compreender as dificuldades que o usuário encontrar ao utilizar os filtros auxiliares para busca |
|RF-004| Perceber se o usuário consegue identificar corretamente qual streaming o conteúdo buscado se encontra disponível. |
|RF-005| Perceber se o usuário identifica claramente às informações como notas dos principais sites de crítica, duração total do filme, gênero e as demais informações a qual o filme se encontra. |
|RF-006| Identificar erros no que tange às sugestões de filmes/series/documentários que a aplicação fará em detrimento dos conteúdos relacionados pelas buscas realizadas anteriormente e/ou pelos conteúdos favoritados.  |
|RF-007| Verificar possíveis atritos em relação ao cadastramento, leitura, atualização e exclusão de suas informações cadastrais.  |
|RF-008| Verificar quaisquer atritos que o usuário possuir ao realizar login na plataforma.  |
|RF-009| Identificar quaisquer dificuldades no que tange a verificação de login de usuário na plataforma.  |


## Perfil De Usuários Para Testes


Para todo ciclo de testes definimos o perfil de usuários de testes como aqueles indivíduos que possuem o interesse/necessidade de organizarem melhor todas as suas redes de Streamings


## Equipamentos e Softwares Utilizados Para os Testes


* Computadores ou Aparelhos mobiles
* Possuir conexão com a Internet e acesso aos principais navegadores da Web como Google Chrome, Mozilla Firefox, entre outros.


## Relatório De Dados


Todos os testes de usabilidade serão realizados em ambiente remoto e os resultados recolhidos serão utilizados no preenchimento de um relatório ao final do teste.


## Atividades Planejadas Para o Usuário


O objetivo das atividades será de encontrar quaisquer dificuldades que os usuários encontrarem durante a utilização da aplicação.

No total serão 5 Participantes que realizarão todo o processo de testes simulando atividades na aplicação.


### Teste - 1 - Usabilidade da Página Principal


O usuário se encontra na página principal da aplicação, simule clicar nos botões de Login, cadastro para acessar o pop-up com novas informações.

Simule clicar no botão de pesquisa, no qual, deverá ser possível digitar nomes de filmes, os quais, quando terminados de serem descritos no campo de pesquisa, a aplicação apresentará o filme indicado.

Simule clicar nos conteúdos recomendados, cujo o qual, ao ser selecionado abrirá uma nova pagina apresentando o filme selecionado e todas as informações como sinopse, elenco, notas e em qual streaming se encontrá.


#### Possíveis Problemas Encontrados:


    • Os botões não foram responsivos.
    • O campo de preenchimento na aba pesquisar não funcionou 
    • O filme/série/documentário descrito não foi encontrado por erro da aplicação
    • O pop-up de login e cadastro não apareceu.
    • O filme pesquisado ou recomendado, ao ser selecionado, não levou o usuário para a página desejada.


### Teste - 2 - Cadastro, Login e Recuperação de Conta

O Usuário encontrando-se na pagina inicial, ao clicará em login ou em cadastrar, deste modo, um pop-up aparecerá no meio de sua tela. Este pop-up conterá as seguintes informações: Login - Cadastrar - Recuperar Senha.


#### Login 

Em Login, o usuário já cadastrado simulará seu login descrevendo seu E-mail e sua Senha cadastradas, em suas respectivas abas “Email” e “Senha”.  Após o preenchimento, clicar em Login, fazendo com que a aplicação verifique se seu Email e Senha estão de acordo. Se E-mail e Senha estiverem devidamente cadastrados e associados, a aplicação retornará a página principal dando ao usuário os beneficios de estar logado ao site. Caso contrário, e o E-mail e Senha não estejam devidamente cadastrados ou associados, a aplicação citará o ERRO e descreverá qual erro ocorreu.

Os Beneficios que o usuário adquire ao efetuar corretamente seu login será de receber sugestões de filmes, séries e documentários de acordo com suas pesquisas prévias e conteúdos favoritados por ele.


#### Cadastrar

O usuário simulará o cadastro após abrir o menú interativo, seja clicando em Login ou Cadastrar na pagina Inicial. No Menú interativo teremos o botão de "Cadastrar Nova Conta", o qual, após ser clicado pelo usuário, atualizará o Menu Interativo com novas informações que deverão serem preenchidas. O usuário neste novo menú, preenchera respectivamente, seu Nome, Sobrenome, Genero, E-mail, Senha e novamente a confirmação desta Senha, em seguida clicará no botão confirmar. Após todo o processo e Clicando em confirmar seu cadastro será devidamente concluído. Com seu cadastro realização, o usuário poderá logar na aplicação e obter os benefícios de estar logado.

Ao clicar em Cadastrar Nova Conta, se o usuário desistir de faze-lo por quaisquer motivos, bastará clicar em voltar, que o Menú Interativo voltará para Menu inicial de Login/Cadastro/Recuperar Senha.


#### Recuperar Senha

O usuário estando no Menú Inicial, simulará clicar em “Recuperar Senha” o qual atualizará o Menú em um novo pop-up. Neste novo Menú o usuário observará que existe apneas uma aba a ser preenchida descrita “ E-mail de recuperação” o qual o usuário descreverá o seu e-mail cadastrado. Após o e-mail cadastrado ser preenchido na aba o usuário clicará no botão de “Enviar Senha”. Caso o e-mail esteja corretamente cadastrado o Menú fechará e a senha de cadastro do usuário será enviada a seu e-mail cadastrado. Contudo, caso o e-mail não esteja de acordo um Erro aparecerá indicando que o e-mail não está cadastrado.

#### Possíveis Problemas de Usabilidades:

    • O usuário encontrou problemas ao fazer o login
    • O usuário encontrou problemas ao tentar realizar o cadastro
    •  O usuário encontrou problemas ao tentar recuperar sua senha.
    •  O usuário teve problemas para voltar a página principal.
    • O usuário teve problema ao receber sua senha durante a recuperação de senha.
    
    
### Teste - 3 - Buscando o Conteúdo Desejado

O usuário verificará se na pagina inicial, o filme/série/documentário que deseja obter informações, está presente, caso sim o usuário clicará no conteúdo em questão e a aplicação o levará até a tela do conteúdo buscado, no qual ele terá a sua disposição as informações como; Descrição, Imagem, Elenco e Nota do filme como também conteúdo recomendado que estará associado as informações supracitadas na página como também em qual Streaming o filme se encontra disponível.

Por outro lado, caso o usuário não verifique o conteúdo desejado na Pagina Inicial, este deverá selecionar a aba de pesquisa, clicando em pesquisar. Com a aba de pesquisa aberta o usuário descreverá qual é o Filme/série/documentário desejado. Concluindo a pesquisa a aplicação mostrará na tela o conteúdo buscado, dando deste modo, a oportunidade do usuário de clicar e possibilitar a aplicação de redireciona-lo a Pagina desejada.

O usuário estando satisfeito com as informações, caso deseje procurar um novo conteúdo, simulará, na própria página do conteúdo já pesquisado, clicar novamente na aba de "Pesquisar" para obter acesso a nova busca de um outro conteúdo.

#### Possíveis Problemas de Usabilidades:

    • Encontrou dificuldades ao selecionar o filme/série/documentário
    • Encontrou atrito com as informações associadas ao conteúdo indicado
    • Encontrou dificuldade ao ser direcionado as novas páginas, seja durante a pesquisa ou ao selecionar qualquer conteúdo.
    • Erro no que tange a nota ou em qual streaming o filme está disponivel.

## Informações Coletadas

Atividade Planejada - Relatório

