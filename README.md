# TypeScript-AUTH-API

## Install

    `npm i`

## Run the app

    `npm run dev`

## Cadastro

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
    "password": "123456",
    "role": "USER",
    "_id": "62d18b51a9220e3ab823d7ed",
    "createdAt": "2022-07-15T15:44:17.595Z",
    "updatedAt": "2022-07-15T15:44:17.595Z",
    "__v": 0
    }
    Status: 201 CREATED

## Login

### Request

`GET /user/login`

    {
        "user": "joaozinho",
        "password": "123456"
    }

### Response

    {
        "user": {
            "0": {
                "_id": "62d18b51a9220e3ab823d7ed",
                "id": 1657899857587,
                "name": "joaozinho",
                "email": "joaozinho@email.com",
                "password": "123456",
                "role": "USER",
                "createdAt": "2022-07-15T15:44:17.595Z",
                "updatedAt": "2022-07-15T15:44:17.595Z",
                "__v": 0
            },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA"
        }
    }
    Status: 200 OK

## Criando um usuário
    {
        "role": admin
    }

### Request

`POST /users/login`

    {
        "Headers": {
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA" 
        }
    }

    {
        "body": {
            "user": "joaozinho",
            "email":"joaozinho@email.com",
            "password": "123456"
            "role": "ADMIN" || "USER"

        }
    }

### Response

    {
        "user": {
            "0": {
                "_id": "62d18b51a9220e3ab823d7ed",
                "id": 1657899857587,
                "name": "joaozinho",
                "email": "joaozinho@email.com",
                "password": "123456",
                "role": "ADMIN" || "USER",
                "createdAt": "2022-07-15T15:44:17.595Z",
                "updatedAt": "2022-07-15T15:44:17.595Z",
                "__v": 0
            },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3ODk5ODU3NTg3LCJlbWFpbCI6ImpvYW96aW5ob0BlbWFpbC5jb20iLCJpYXQiOjE2NTc5MDA0MzksImV4cCI6MTY1NzkwNDAzOX0.T6IjfddCOhNqsGORiGZt0inANxd1Jhurti6P0WMUXkA"
        }
    }
    Status: 201 OK
