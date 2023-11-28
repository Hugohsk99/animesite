# Modelos de Dados

## Microserviço de Favoritos

---

### Favoritos

| nome          | tipo   | único | opcional |
| ------------- | ------ | ----- | -------- |
| user_id       | string | sim   | não      |
| anime_title   | string | não   | não      |
| data          | date   | não   | não      |
| img_url       | string | não   | não      |

O serviço de favoritos contém dados sobre a lista de séries de anime favoritas dos usuários e permite que eles criem um novo favorito para seu anime favorito.

## Microserviço de Watchlist

---

### Watchlist

| nome          | tipo   | único | opcional |
| ------------- | ------ | ----- | -------- |
| user_id       | string | sim   | não      |
| anime_title   | string | não   | não      |
| data          | date   | não   | não      |
| img_url       | string | não   | não      |

O serviço de watchlist contém dados sobre a watchlist dos usuários, séries que podem ser salvas e que permitem aos usuários assistir a uma série mais tarde. Os usuários também podem adicionar uma série à sua watchlist.

## Microserviço de Conta

---

### Conta

| nome          | tipo   | único | opcional |
| ------------- | ------ | ----- | -------- |
| first_name    | string | não   | não      |
| last_name     | string | não   | não      |
| email         | string | sim   | não      |
| username      | string | sim   | não      |
| password      | string | não   | não      |

O serviço de contas permite que os usuários se cadastrem, façam login e acessem seus dados de favoritos e watchlist.
