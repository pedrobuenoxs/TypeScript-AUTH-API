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

    {"id":1,"name":"joaozinho","email":"joaozinho@email.com","password": "123456" }

## Login

### Request

`GET /thing/`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2
