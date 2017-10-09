# fiap-te-lembra

Fiap te lembra é um projeto que usa [TotalVoice](http://www.totalvoice.com.br) para lembrar os usuários sobre um comunicado/agendamento

## framework e template

- https://vuejs.org/
- https://vuetifyjs.com

## projeto server api

https://github.com/dsaouda/fiap-telembra

## build setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## build on docker

```bash
docker run --rm -p 3000:3000 -v `pwd`:/root -w /root node bash -c 'npm install && npm run dev'
```
