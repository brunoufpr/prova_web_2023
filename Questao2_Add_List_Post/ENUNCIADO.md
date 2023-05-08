# Questão 2 (valor: 30 pontos)

Completar o desenvolvimento do protótipo de um pedaço de uma rede social / fórum, que tenha as seguintes funcionalidades:
    1. Listar posts
    2. Adicionar novo post

Um post deve ter as informações conforme o seguinte exemplo de objeto:

{
    id: 1,
    titulo: "Vende-se",
    mensagem: "Vende-se livro de inglês",
    dataPost: new Date(),
    qtdCurtidas: 0
}

A listagem de posts deve mostrar o título e a mensagem do post, conforme explicado no arquivo index.ejs

O formulário de inserção de novo post, conforme também explicado no arquivo index.ejs, deve conter um campo (input) para título e e um campo (input) para mensagem. 

A requisição não deve passar as informações digitadas pela URL!! 

A dataPost deve ser sempre a data atual, conforme vemos no exemplo acima. Após a inserção, deve-se redirecionar para a página inicial (rota "/").

A geração de ids sequenciais (1, 2, 3,...) é opcional, valendo nota extra. Portanto, pode-se usar o mesmo id em todos os posts neste protótipo.


## [VALENDO NOTA EXTRA] Faça o sistema se conectar a um banco de dados MongoDB e adicionar e listar a partir desse banco.

## [VALENDO NOTA EXTRA] Estilize com CSS puro ou com Bootstrap