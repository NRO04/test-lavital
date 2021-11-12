# test-lavital


## Implementaciones

- React + TS
- Redux React
- Redux tooltik
- Docker


# Instalación 

Hay dos maneras de ejecutar el proyecto, la primera es usando un contenedor de docker, se recomienda el contenedor, evita conflictos con las dependencias que esten incluidas en el proyecto.
La segunda, usar node e instalar todas las dependencias en la maquina del usuario.


# Forma Nº1 - Docker 

Ya que Docker facilita muchas cosas en cuanto al desarrollo del proyecto, vamos a facilitarlas aun mas, y ¿Como es posible? 
Pues bien, la imagen de lavital, ya se encuentra en Docker Hub.
[Dockerhub](https://hub.docker.com/r/nro04/la-vital)

```
docker pull nro04/la-vital

```
# Configuración 

```
docker run -dp 3001:3000 nro04/la-vital 

```
Asegurese que en el puerto 3001 no se este ejecutando ningun servicio, de lo contrario cambie el puerto 3001 -> 3005

Abrir http://localhost:3000/ para ver el resultado del proyecto-

# Forma Nº 2

## Requisitos

- Node 16.13.0
- Typescript 4.4.4
- Redux React
- Redux tooltik


Instalar dependencias
```
npm install

```

Iniciar proyecto
```
npm start

```




