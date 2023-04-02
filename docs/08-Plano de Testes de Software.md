# Plano de Testes de Software

Apresentamos a seguir os testes funcionais a serem executados e seus respectivos critérios de êxito:
 
| **Caso de Teste** 	| **CT-01 – Cadastro de usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-007 - A aplicação deve permitir ao usuário cadastrar, ler, atualizar e excluir suas informações de cadastro. |
| Objetivo do Teste 	| Verificar se o cadastro é realizado de maneira correta |
| Passos 	| 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, clicar em "Cadastrar-se" <br> 4 - Selecionar se irá se cadastrar ou acessar a aplicação com a conta do Google <br> 5 - Caso deseje se cadastrar, preencher os campos obrigatórios: Nome, Sobrenome, e-mail, senha e confirmação de senha e clicar em "Cadastrar". Caso deseje acessar a aplicação com a conta do google, clicar em "Acessar com o Google" |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login**	|
|Requisito Associado | RF-008 - O usuário deve conseguir realizar login na plataforma. |
| Objetivo do Teste 	| Verificar se o login está ocorrendo corretamente |
| Passos 	| 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, clicar em "Login" <br> 4 - Preencher os campos obrigatórios: E-mail e senha <br> 5 - Clicar em "Entrar" |
|Critério de Êxito | - O login foi realizado com sucesso, o conteúdo apresentado está associado às preferências do usuário e o mesmo é capaz de acessar o seu perfil |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Ler/Editar/Excluir Dados do perfil**	|
|Requisito Associado | RF-007 - A aplicação deve permitir ao usuário cadastrar, ler, atualizar e excluir suas informações de cadastro. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar a edição dos dados ou exclusão do cadastro. |
| Passos 	| 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, clicar em "Perfil" <br> 4 - Na página de perfil, clicar em "Alterar Dados" ou "Excluir Conta" <br> 5 - Caso a opção escolhida seja a alteração dos dados, alterar os campos desejados e manter os campos obrigatórios preenchidos <br> 6 - Clicar em "Concluir" |
|Critério de Êxito | - As informações do perfil foram alteradas com sucesso de acordo com as informações oferecidas pelo usuário, ou caso a opção selecionada seja a exclusão, o cadastro foi excluído e não é mais possível acessar a conta com as credenciais escolhidas |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Pesquisa de filmes**	|
|Requisito Associado | RF-001 - A aplicação deve permitir que o usuário faça a busca desejada. <br> RF-002 - A aplicação deve exibir resultados relacionados às palavras buscadas |
| Objetivo do Teste 	| Verificar se a pesquisa e o seu filtro funcionam corretamente e retornam o filmes desejado e sugerem complemento de palavras durante a digitação. |
| Passos 	| 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, digitar o título de um filmes desejado no campo de busca |
|Critério de Êxito | - O resultado retornado corresponde aos dados do filmes buscado e durante a digitação, palavras são sugeridas de acordo as palavras utilizadas na busca |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Filtros de Busca**	|
|Requisito Associado | RF-003 - A aplicação deve conter filtros para auxiliar na busca do conteúdo pesquisado. |
| Objetivo do Teste 	| Verificar se o conteúdo retornado após a pesquisa está classificado corretamente, de acordo com o critério selecionado nos filtros |
| Passos 	| 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, clicar em filtros e selecionar um filtro <br> 4 - Buscar por um conteúdo com base no filtro selecionado |
|Critério de Êxito | - O conteúdo retornado está de acordo com o filtro selecionado pelo usuário |
|   |   |
| **Caso de Teste** 	| **CT-06 – Filtro/pesquisa de receitas através de ingredientes**	|
|Requisito Associado | RF-004 - A aplicação deve exibir em qual plataforma de streaming o conteúdo desejado se encontra disponível para exibição. |
| Objetivo do Teste 	| Verificar se o conteúdo selecionado ou pesquisado apresenta a plataforma de streaming na qual está disponível para exibição. |
| Passos 	| 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, selecionar um dos conteúdos exibidos ou realizar uma busca específica <br> 4 - Verificar se o conteúdo escolhido apresenta a plataforma de streaming na qual está presente entre os dados fornecidos |
|Critério de Êxito | - A informação sobre a plataforma de streaming está presenta entre os diversos dados fornecidos sobre o conteúdo selecionado |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Visualizar informações sobre os conteúdos**	|
|Requisito Associado | RF-005	- A aplicação deve exibir informações como notas dos principais sites agregadores de crítica, duração total, gênero e outras informações relacionadas. |
| Objetivo do Teste 	| Verificar se os conteúdos disponíveis apresentam as informações pré-definidas durante o desenvolvimento do projeto |
| Passos 	| 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, selecionar um dos conteúdos exibidos ou realizar uma busca específica <br> 4 - Na página do conteúdo selecionado, verificar as informações exibidas sobre o mesmo |
|Critério de Êxito | - Os dados apresentados sobre o conteúdo selecionado devem estar de acordo com os dados selecionados para serem exibidos |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Conteúdos relacionados e favoritos**	|
|Requisito Associado | RF-006	- A aplicação deve sugerir conteúdos relacionados às buscas já realizadas anteriormente e favoritar conteúdos. |
| Objetivo do Teste 	| Verificar se o usuário logado consegue favoritar conteúdos e se conteúdos relacionados aos seus favoritos são exibidos na tela inicial |
| Passos 	| 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, verificar se os conteúdos apresentados estão relacionados com os favoritos do usuário <br> 4 - Na página inicial, selecionar um conteúdo ou realizar uma busca específica <br> 5 - Favoritar o conteúdo selecionado <br> 6 - Na página de perfil, verificar se o conteúdo favoritado foi inserido na lista de favoritos |
|Critério de Êxito | - Os conteúdos exibidos estão relacionados aos favoritos do usuário logado e é possível favoritar conteúdo e visualizá-lo no seu perfil na lista de favoritos |
|  	|  	|
