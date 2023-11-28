## Log in

    Caminho do endpoint: /token

    Método do endpoint: POST

    Formato da solicitação (formulário):
        username: string
        password: string
        confirmação de senha: string

    Resposta: Informações da conta e um token

    Formato da resposta (JSON):

    json

    {
      "account": {
        «key»: «type»,
      },
      "token": string
    }

## Log out

    Caminho do endpoint: /token

    Método do endpoint: DELETE

    Headers:
        Authorization: Bearer token

    Resposta: Sempre verdadeiro

    Formato da resposta (JSON):

    json

    true

## Sign Up

    Caminho do endpoint: /token

    Método do endpoint: POST

    Formato da solicitação (formulário):
        primeiro nome: string
        sobrenome: string
        email: string
        username: string
        password: string
        confirmação de senha: string

    Resposta: Informações da conta e um token

    Formato da resposta (JSON):

    json

    {
      "account": {
        «key»: «type»,
      },
      "token": string
    }

## Visualização de Detalhes da Conta

    Caminho do endpoint: /account

    Método do endpoint: GET

    Headers:
        Authorization: Bearer token

    Resposta: Detalhes da conta

    Formato da resposta:

    json

    {
      "contas": [
        {
          "first_name": string,
          "last_name": string,
          "email": string,
          "username": string,
        }
      ]
    }

## Atualização de Conta

    Caminho do endpoint: /account

    Método do endpoint: PUT

    Formato da solicitação (formulário):
        primeiro nome: string
        sobrenome: string
        email: string
        username: string

 ##   Resposta: Informações da conta e um token

    Formato da resposta (JSON):

    json

    {
      "contas": [
        {
          "first_name": string,
          "last_name": string,
          "email": string,
          "username": string,
        }
      ]
    }

## Atualização de Senha

    Caminho do endpoint: /password

    Método do endpoint: PUT

    Formato da solicitação (formulário):
        senha: string
        confirmação de senha: string

    Resposta: Sempre verdadeiro

    Formato da resposta (JSON):

    json

    true

## Lista de Favoritos

    Caminho do endpoint: /favoritos

    Método do endpoint: GET

    Parâmetros de consulta:
        «nome»: «finalidade»

    Headers:
        Authorization: Bearer token

    Resposta: Lista de favoritos e informações do favorito

    Formato da resposta (JSON):

    json

    {
      "favoritos": [
        {
          "user_id": string,
          "name": string,
          "date": date,
          "image_url": string,
        }
      ]
    }

## Criar um Novo Favorito

    Caminho do endpoint: /favoritos

    Método do endpoint: POST

    Headers:
        Authorization: Bearer token

    Formato da solicitação (JSON):
        nome
        data

  ##   Resposta: Coletando informações do anime

    Formato da resposta (JSON):

    json

    {
      "favoritos": [
        {
          "user_id": string,
          "name": string,
          "date": date,
          "image_url": string,
        }
      ]
    }

## Watchlist

'''
TBD: Pode mudar para mal_id
'''
Visualização da Lista de Watchlist

    Caminho do endpoint: /watchlists

    Método do endpoint: GET

    Parâmetros de consulta:
        «nome»: «finalidade»

    Headers:
        Authorization: Bearer token

    Formato da solicitação (formulário):
        username: string

    Resposta: Uma lista de Watchlist

    Formato da resposta (JSON):

    json

    {
      "watchlists": [
        {
          "anime_title": string,
          "anime_intro": string,
          "anime_picture_url": string,
        }
      ]
    }

## Criar Watchlist

    Caminho do endpoint: /watchlists

    Método do endpoint: POST

    Headers:
        Authorization: Bearer token

    Formato da solicitação (formulário):

    json

{
  "watchlists": [
    {
      "anime_title": string,
    }
  ]
}

Resposta: Indicação de sucesso ou fracasso

Formato da resposta (JSON):

json

    {
      true
    }

Atualizar Watchlist

    Caminho do endpoint: /watchlists

    Método do endpoint: PUT

    Headers:
        Authorization: Bearer token

    Formato da solicitação (formulário):
        username: string

        json

    {
      "watchlists": [
        {
          "anime_title": string,
          "status_completed": boolean,
        }
      ]
    }

Resposta: Indicação de sucesso ou fracasso

Formato da resposta (JSON):

json

    {
      "watchlists": [
        {
          "anime_title": string,
          "status_completed": boolean,
        }
      ]
    }

DELETE Watchlists

    Caminho do endpoint: /watchlists

    Método do endpoint: DELETE

    Headers:
        Authorization: Bearer token

    Formato da solicitação (formulário):
        username: string

        json

    {
      "watchlists": [
        {
          "anime_title": string,
        }
      ]
    }

Resposta: Indicação de sucesso ou fracasso

Formato da resposta:

json

    {
      true
    }

Lista de Detalhes de Anime

    Caminho do endpoint: /anime

    Método do endpoint: GET

    Headers:
        Authorization: Bearer token

    Resposta: Uma lista de Detalhes de Anime

    Formato da resposta (JSON):

    json

    {
      “anime”: [
        {
          "title": string,
          ”synopsis”: string,
          "image_url": string html,
          “rating”: integer,
          “streaming_platform”: string,
          “status”: boolean
        }
      ]
    }

Lista de Pesquisa

    Caminho do endpoint: /search

    Método do endpoint: GET

    Parâmetros de consulta:

    Headers:
        Authorization: Bearer token

    Resposta: Uma lista de Pesquisas

    Formato da resposta (JSON):

    json

{
  “Searches”: [
    {
      “title”: string,
      "text": string,
      “rating”: integer,
      “length”: integer,
      “released_year”: string,
      “status”: boolean
    }
  ]
}
