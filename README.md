
### Deploying a local version for development
In order to run a local copy of the project, after downloading the git repository run the following commands
```bash

npm install

instal nodemon 
npm install --save-dev nodemon

Para iniciar el proyecto
npm start

```

### Organisation of repository
Breakdown for what each directory/file is used for
* src: Todas las carpetas de React.
* src/components: Los archivos de los componentes desarrollado para la aplicacion.
* src/models: Esquema del envio de los datos hacia el endpoint.
* src/route: Es la ruta configurada para la cominucacion con el endpoint.
* src/controllers: Peticion y comunicacion con el Web Server
* src/back: En el archivo app se crea y conecte un pequeño servidor local, utilizando express
* src/back/database.js: se realiza la conneccio a una base de datos creada en mongodb utilizando Mongoose y atlas Mongodb.

* package.json: Fichero que se refiera a toda las librerias usadas en el proyecto. Mediante npm
