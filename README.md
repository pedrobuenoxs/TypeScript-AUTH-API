# TypeScript-AUTH-API

## Install

    `npm i`

## Run the app

    `npm run dev`

# Login e Cadastro e Admin User

## 1 - Cadastro

### Request

`POST /user/`

    {
        "user": "joaozinho",
        "email":"joaozinho@email.com",
        "password": "123456"
    }

### Response

    {
    "id": 1657899857587,
    "name": "joaozinho",
    "email": "joaozinho@email.com",
    "password": "$2b$10$Id13HhMBtygoZdH/.tY.NuJ1lLS5/rwNJBfLKuPjozDYXjLEtwsue",
    "role": "USER",
    "_id": "62d18b51a9220e3ab823d7ed",
    "createdAt": "2022-07-15T15:44:17.595Z",
    "updatedAt": "2022-07-15T15:44:17.595Z",
    "__v": 0
    }
    Status: 201 CREATED

## 2 - Cadastro ADMIN USER

### Request

`POST /user/`

    {
        "user": "joaozinho",
        "email":"joaozinho@email.com",
        "password": "123456"
    }

### Response

    {
    "id": 1657899857587,
    "name": "joaozinho",
    "email": "joaozinho@email.com",
    "password": "$2b$10$Id13HhMBtygoZdH/.tY.NuJ1lLS5/rwNJBfLKuPjozDYXjLEtwsue",
    "role": "ADMIN",
    "_id": "62d18b51a9220e3ab823d7ed",
    "createdAt": "2022-07-15T15:44:17.595Z",
    "updatedAt": "2022-07-15T15:44:17.595Z",
    "__v": 0
    }
    Status: 201 CREATED

## 3 - Login

### Request

`GET /user/login`

    {
        "user": "joaozinho",
        "password": "123456"
    }

### Response

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA",
        "id": 1657899857587,
        "name": "joaozinho",
        "email": "joaozinho@email.com",
    }
    Status: 200 OK

# CRUD de Usuários

## 1 - Criando um usuário. É necessário estar logado em um usuário admin.

    {
        "role": admin
    }

### Request

`POST /users`

    {
        "Headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA"
        }
    }

    {
        "body":
        {
            "name": "Pedro Bueno",
            "email": "pedro.bueno@gmail.com",
            "password":"123",
            "role": "ADMIN"
        }
    }

### Response

    {
        "id": 1658088303519,
        "name": "Pedro Bueno",
        "email": "pedro.bueno@gmail.com",
        "password": "$2b$10$R6rs.9L3jKreHfd1T8L8UOa2hjocaKX6jdauvvdblq4oC61nWvdG.",
        "role": "ADMIN",
        "_id": "62d46b6fc108e0e7a02e2e15",
        "createdAt": "2022-07-17T20:05:03.523Z",
        "updatedAt": "2022-07-17T20:05:03.523Z",
        "__v": 0
    }
    Status: 201 OK

## 2 - Editando um usuário. É necessário estar logado em um usuário admin

    {
        "role": admin
    }

### Request

`PUT /users`

    {
        "Headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA"
        }
    }

    {
        "body":
        {
        "id":1658085389736,
        "name": "Pedro Bueno",
        "password":"12345678",
        "email":"email novo"
        }
    }

}

### Response

    {
    "_id": "62d4600d3e32c19ea2799b1e",
    "id": 1658085389736,
    "name": "Pedro Bueno",
    "email": "email novo",
    "password": "$2b$10$ZXHRX1adpQ.x6ypLU2NinOHFthaKr6bKPKw7K7mIIXAxDWM5to44C",
    "role": "USER",
    "createdAt": "2022-07-17T19:16:29.740Z",
    "updatedAt": "2022-07-17T20:10:53.760Z",
    "__v": 0
    }
    Status: 201 OK

## 3 - Listando todos usuários. É necessário estar logado em um usuário admin

    {
        "role": admin
    }

### Request

`GET /users`

    {
        "Headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA"
        }
    }



### Response

    [
        {
            "_id": "62d362052b640ee619fee345",
            "id": 1658020357642,
            "name": "Pedro",
            "email": "pedro1@email.com",
            "password": "$2b$10$RN1kXGxyln/bl1nDzqY7auUyQ2aZvbQVhpQV9eRp/yRjh.4sx02q2",
            "role": "USER",
            "createdAt": "2022-07-17T01:12:37.646Z",
            "updatedAt": "2022-07-17T01:12:37.646Z",
            "__v": 0
        },
        {
            "_id": "62d366e0f1080e359d449700",
            "id": 1658021600927,
            "name": "Pedro",
            "email": "pedro2@email.com",
            "password": "$2b$10$wcrYeazqGdQDxL1DpfOkUu8Klmhr5VS2LfIzs2upzNhu3pYZT510G",
            "role": "USER",
            "createdAt": "2022-07-17T01:33:20.927Z",
            "updatedAt": "2022-07-17T01:33:20.927Z",
            "__v": 0
        },
        {
            "_id": "62d3685c968c39502e52f57e",
            "id": 1658021980943,
            "name": "Pedro",
            "email": "pedro3@email.com",
            "password": "$2b$10$pW.4auB7xmvej13kKNEaaeO5s/G.XXRQm85O.P1Gm0wbyLXx9Kr26",
            "role": "USER",
            "createdAt": "2022-07-17T01:39:40.946Z",
            "updatedAt": "2022-07-17T01:39:40.946Z",
            "__v": 0
        }
    ]
    Status: 200 OK

## 4 - Deletar um usuário. É necessário estar logado em um usuário admin

    {
        "role": admin
    }

### Request

`DELETE /users`

    {
        "Headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA"
        }
    }

    {
        "body":
        {
            "id": 1658087880749"
        }
    }

### Response

    {
	    "message": true
    }
    Status: 200 OK

# CRUD de Playlist

## 1 - Criando uma Playlist. É necessário estar logado.


### Request

`POST /playlist`

    {
        "Headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA"
        }
    }

    {
        "body":
        {
            "name": "FUNKZADA v3.0",
            "genre": "FUNK",
            "musics": ["musica1", "musica2", "musica3", "musica4", "musica5", "musica6", "musica7"]
        }
    }

### Response

    {
        "id": 1658089591404,
        "name": "FUNKZADA v3.0",
        "genre": "FUNK",
        "musics": [
            "musica1",
            "musica2",
            "musica3",
            "musica4",
            "musica5",
            "musica6",
            "musica7"
        ],
        "user_id": 1658088444946,
        "_id": "62d47077ef11e4c0ac333095",
        "createdAt": "2022-07-17T20:26:31.430Z",
        "updatedAt": "2022-07-17T20:26:31.430Z",
        "__v": 0
    }
    Status: 201 OK

## 2 - Editando uma Playlist. É necessário estar logado.


### Request

`PUT /playlist`

    {
        "Headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA"
        }
    }

    {
        "body":
            {
                "id": 1658089591404,
                "name": "FUNKZADA v4.0",
                "genre": "funk",
                "musics": [
                    "musica1",
                    "musica2",
                    "musica3",
                    "musica4",
                    "musica5",
                    "musica6",
                    "musica7",
                    "musica8",
                    "musica9",
                    "musica10"
                ]
            }
    }

### Response

    {
        "_id": "62d47077ef11e4c0ac333095",
        "id": 1658089591404,
        "name": "FUNKZADA v4.0",
        "genre": "funk",
        "musics": [
            "musica1",
            "musica2",
            "musica3",
            "musica4",
            "musica5",
            "musica6",
            "musica7",
            "musica8",
            "musica9",
            "musica10"
        ],
        "user_id": 1658088444946,
        "createdAt": "2022-07-17T20:26:31.430Z",
        "updatedAt": "2022-07-17T20:29:35.135Z",
        "__v": 0
    }
    Status: 201 OK

## 3 - Listando suas Playlists. É necessário estar logado.

### Request

`GET /playlist`

    {
        "Headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA"
        }
    }



### Response

    [
        {
            "_id": "62d47077ef11e4c0ac333095",
            "id": 1658089591404,
            "name": "FUNKZADA v4.0",
            "genre": "funk",
            "musics": [
                "musica1",
                "musica2",
                "musica3",
                "musica4",
                "musica5",
                "musica6",
                "musica7",
                "musica8",
                "musica9",
                "musica10"
            ],
            "user_id": 1658088444946,
            "createdAt": "2022-07-17T20:26:31.430Z",
            "updatedAt": "2022-07-17T20:29:35.135Z",
            "__v": 0
        },
        {
            "_id": "62d4715eef11e4c0ac33309a",
            "id": 1658089822359,
            "name": "Sertanejo as melhores",
            "genre": "Sertanejo",
            "musics": [
                "musica1",
                "musica2"
            ],
            "user_id": 1658088444946,
            "createdAt": "2022-07-17T20:30:22.375Z",
            "updatedAt": "2022-07-17T20:30:22.375Z",
            "__v": 0
        }
    ]
    Status: 200 OK

## 4 - Deletando uma Playlist. É necessário estar logado.

### Request

`DELETE /playlist`

    {
        "Headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA"
        }
    }

    {
        "body":
        {
            "id": 1658089822359"
        }
    }

### Response

    {
	    "message": true
    }
    Status: 200 OK

