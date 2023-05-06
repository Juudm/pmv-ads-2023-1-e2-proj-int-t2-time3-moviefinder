# Registro de Testes de Software

Com base nas funcionalidades, requisitos e casos de testes propostos no item anterior (08. Plano de Testes de Software) os registros dos testes são descritos a seguir:

| Caso de Teste | CT-01 – Cadastro de usuário |
|---------------|--------------------------|
| Requisitos Associados | RF-007 - A aplicação deve permitir ao usuário cadastrar, ler, atualizar e excluir suas informações de cadastro. |
| Objetivo do Teste | Verificar se o cadastro é realizado de maneira correta |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, clicar em "Cadastrar-se" <br> 4 - Selecionar se irá se cadastrar ou acessar a aplicação com a conta do Google <br> 5 - Caso deseje se cadastrar, preencher os campos obrigatórios: Nome, Sobrenome, e-mail, senha e confirmação de senha e clicar em "Cadastrar". Caso deseje acessar a aplicação com a conta do google, clicar em "Acessar com o Google"|
| Critérios de Êxito | - O cadastro foi realizado com sucesso. |
| Print dos Testes | https://user-images.githubusercontent.com/114538749/236645954-be4a4301-661f-4455-9e1a-1bfb341c8cd1.mp4 |
| Conclusão do teste | O cadastro foi realizado com sucesso, adicionando todos os dados de Nome, Sobrenome, e-mail, senha, confirmação de senha e outros. O cadsatro foi registrado no banco.|

| Caso de Teste | CT-04 – Pesquisa de filmes |
|---------------|--------------------------|
| Requisitos Associados | RF-001 - A aplicação deve permitir que o usuário faça a busca desejada. <br> RF-002 - A aplicação deve exibir resultados relacionados às palavras buscadas |
| Objetivo do Teste | Verificar se a pesquisa e o seu filtro funcionam corretamente e retornam o filmes desejado e sugerem complemento de palavras durante a digitação. |
| Passos | 1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, digitar o título de um filmes desejado no campo de busca|
| Critérios de Êxito | - O resultado retornado corresponde aos dados do filmes buscado e durante a digitação, palavras são sugeridas de acordo as palavras utilizadas na busca |
| Print dos Testes | https://user-images.githubusercontent.com/114538749/236646233-32d8120c-0b44-40ce-a873-45f13143c4eb.mp4
 |
| Conclusão do teste | O teste de pesquisa foi realizado com sucesso. Ao digitar as palavras desejadas, resultados relacionados eram exibidos, inclusive, em português e inglês. A adição de filtros ainda não é executada. |

| Caso de Teste | CT-08 – Conteúdos relacionados e favoritos |
|---------------|--------------------------|
| Requisitos Associados | RF-006	- A aplicação deve sugerir conteúdos relacionados às buscas já realizadas anteriormente e favoritar conteúdos. |
| Objetivo do Teste | Verificar se o usuário logado consegue favoritar conteúdos e se conteúdos relacionados aos seus favoritos são exibidos na tela inicial |
| Passos |1 - Abrir o navegador <br> 2 - Acessar a aplicação <br> 3 - Na página inicial, verificar se os conteúdos apresentados estão relacionados com os favoritos do usuário <br> 4 - Na página inicial, selecionar um conteúdo ou realizar uma busca específica <br> 5 - Favoritar o conteúdo selecionado <br> 6 - Na página de perfil, verificar se o conteúdo favoritado foi inserido na lista de favoritos |
| Critérios de Êxito | - Os conteúdos exibidos estão relacionados aos favoritos do usuário logado e é possível favoritar conteúdo e visualizá-lo no seu perfil na lista de favoritos  |
| Print dos Testes |  |
| Conclusão do teste |  |

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Para cada caso de teste definido no Plano de Testes de Software, realize o registro das evidências dos testes feitos na aplicação pela equipe, que comprovem que o critério de êxito foi alcançado (ou não!!!). Para isso, utilize uma ferramenta de captura de tela que mostre cada um dos casos de teste definidos (obs.: cada caso de teste deverá possuir um vídeo do tipo _screencast_ para caracterizar uma evidência do referido caso).

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
