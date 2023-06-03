# Registro de Testes de Software

Com base nas funcionalidades, requisitos e casos de testes propostos no item anterior (08. Plano de Testes de Software) os registros dos testes são descritos a seguir:

| Caso de Teste | CT-01 – Cadastro de usuário |
|---------------|--------------------------|
| Requisitos Associados | RF-007 - A aplicação deve permitir ao usuário cadastrar, ler, atualizar e excluir suas informações de cadastro. |
| Objetivo do Teste | Verificar se o cadastro é realizado de maneira correta |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, clicar em "Cadastrar-se" <br> 4 - Selecionar se irá se cadastrar ou acessar a aplicação com a conta do Google <br> 5 - Caso deseje se cadastrar, preencher os campos obrigatórios: Nome, Sobrenome, e-mail, senha e confirmação de senha e clicar em "Cadastrar". Caso deseje acessar a aplicação com a conta do google, clicar em "Acessar com o Google"|
| Critérios de Êxito | - O cadastro foi realizado com sucesso. |
| Conclusão do teste | O cadastro foi realizado com sucesso, adicionando todos os dados de Nome, Sobrenome, e-mail, senha, confirmação de senha e outros. O cadastro foi registrado no banco. As validações foram executadas corretamente, não permitindo que um cadastro seja realizado com algum dado em branco ou com alguma regra descumprida, como por exemplo, os caracterers exigidos na senha. Além disso, não é possível fazer mais de um cadastro com o mesmo e-mail e uma mensagem é exibida com este alerta, impedindo de prosseguir com o cadastro. Ao final, quando o cadastro é realizado uma mensagem de confirmação é exibida. Ainda não é possível visualizar e alterar as informações do cadastro. |
| Print dos Testes |

https://user-images.githubusercontent.com/114538749/236691685-294c37d9-d12a-49cd-a55d-a5a27040d6ce.mp4 


| Caso de Teste | CT-04 – Pesquisa de filmes |
|---------------|--------------------------|
| Requisitos Associados | RF-001 - A aplicação deve permitir que o usuário faça a busca desejada. <br> RF-002 - A aplicação deve exibir resultados relacionados às palavras buscadas |
| Objetivo do Teste | Verificar se a pesquisa e o seu filtro funcionam corretamente e retornam o filmes desejado e sugerem complemento de palavras durante a digitação. |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, digitar o título de um filmes desejado no campo de busca|
| Critérios de Êxito | - O resultado retornado corresponde aos dados do filmes buscado e durante a digitação, palavras são sugeridas de acordo as palavras utilizadas na busca |
| Conclusão do teste | O teste de pesquisa foi realizado com sucesso. Ao digitar as palavras desejadas, os resultados relacionados são exibidos com os cartazes dos filmes, além de exibir sugestões para as palavras buscadas. A pesquisa também pode ser realizada em ingles ou português. A adição de filtros ainda não é executada. |
| Print dos Testes |

https://user-images.githubusercontent.com/114538749/236646233-32d8120c-0b44-40ce-a873-45f13143c4eb.mp4 


| Caso de Teste | CT-08 – Conteúdos relacionados e favoritos |
|---------------|--------------------------|
| Requisitos Associados | RF-006	- A aplicação deve sugerir conteúdos relacionados às buscas já realizadas anteriormente e favoritar conteúdos. |
| Objetivo do Teste | Verificar se o usuário logado consegue favoritar conteúdos e se conteúdos relacionados aos seus favoritos são exibidos na tela inicial |
| Passos |1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, verificar se os conteúdos apresentados estão relacionados com os favoritos do usuário <br> 4 - Na página inicial, selecionar um conteúdo ou realizar uma busca específica <br> 5 - Favoritar o conteúdo selecionado <br> 6 - Na página de perfil, verificar se o conteúdo favoritado foi inserido na lista de favoritos |
| Critérios de Êxito | - Os conteúdos exibidos estão relacionados aos favoritos do usuário logado e é possível favoritar conteúdo e visualizá-lo no seu perfil na lista de favoritos  |
| Conclusão do teste | O filme foi favoritado com sucesso. Houve registro nas tabelas e associação ao usuário. O conteúdo recomendado com base nos favoritos ainda não esta acessível. |
| Print dos Testes |  

https://user-images.githubusercontent.com/114538749/236647216-f485fcda-5af7-4d3b-a5fe-8deff8f42475.mp4 

