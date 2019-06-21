## Principio Responsabilidad Única
Consiste básicamente en que cada clase y modulo tenga responsabilidad solo en una parte del código y todo el sistema. Por ejemplo,la clase producto tenga la responsabilidad de registrar el encabezado. La clase detalle de producto tenga la responsabilidad de solo asociar detalles a los productos. Donde la responsabilidad debe estar encapsulada en su totalidad.

## Código Limpio
Que no tenga comentarios demasiado largos o código basura y adicional que no se realicen consultas innecesarias que se pueda realizar una sola vez para todo el ámbito de la función modulo, etc. El código debe estar bien identado, para hacer su lectura correcta por parte de otros programadores. Además debe ser lo más fácil y simplificado posible porque debemos pensar en el peso del archivo en el servidor y der ser conscientes de distribuir las cosas y responsabilidades entre los diferentes componentes.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Responsabilidad de cada componente
App: encargado de inicializar la app principal donde se definen llas rutas
Card: encargado de mostrar una tarjeta por pelicula o serie en pantalla, con la información que llega mediante propiedades al componente.
CardDetail: encargado de mostrar una tarjeta para el detalle de información de una película en especifico, con la información que llega proveniente de hacer click en una tarjeta especifica de la pelicula y/o serie.
Header: encargado de mostrar el campo de busqueda que es un selector de categorias de peliculas a mostrar
Nav: encargado de mostrar una barra de navegación (links) con las diferentes categorias: latest, now_playing, popular, top_rated,
upcoming
Pagination: encargado de mostrar una paginación de acuerdo al total de peliculas y total de paginas a mostrar

## Responsabilidad de cada página
Category: encargada de hacer el llamado a la api de categorias de acuerdo a las propiedades que mediante url se envia y que es ejecutada atraves del componente Nav o el componente Header que busca por categoria. Llama al componente card para renderizar cada pelicula y/o serie en una tarjeta.
Home: encargad de hacer el llamado a la api de la lista defecto = 1 de peliculas y series y que a su vez hace el llamado a cada Card por pelicula devuelta en el api.

## Responsabilidad utils
api: encargo de declarar las diferentes peticiones que se realizan al api de [movies](https://api.themoviedb.org/)
constants: encargado de declarar las constantes que se utilizaran en los diferentes componentes de la app como por ejemplo:
URL_IMG, URL_VIDEO, categoriesId

## API Resources
## list
Api version 3 o 4

## ruta de las imagenes
[URL images](https://image.tmdb.org/t/p/w500/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg)

## API de busqueda:
[search movie](https://api.themoviedb.org/4/search/movie?api_key=09fe5654e2ff995e1e6a79c9603c8e37&query=Spider-Man&page=1&include_adult=false)

## API ver los details de la movie:
[detail movie](https://api.themoviedb.org/3/movie/550?api_key=09fe5654e2ff995e1e6a79c9603c8e37&language=en-US)

## API List de peliculas y series
[movies list](https://api.themoviedb.org/4/list/1?api_key=09fe5654e2ff995e1e6a79c9603c8e37)

## Nombres categorias api movies:

[latest Category](https://api.themoviedb.org/3/movie/latest?api_key=09fe5654e2ff995e1e6a79c9603c8e37&language=en-US)

[nowPlaying Category](https://api.themoviedb.org/3/movie/now_playing?api_key=09fe5654e2ff995e1e6a79c9603c8e37&language=en-US&page=1)

[popular Category](https://api.themoviedb.org/3/movie/popular?api_key=09fe5654e2ff995e1e6a79c9603c8e37&language=en-US&page=1)

[topRated Category](https://api.themoviedb.org/3/movie/top_rated?api_key=09fe5654e2ff995e1e6a79c9603c8e37&language=en-US&page=1)

[Upcoming Category](https://api.themoviedb.org/3/movie/upcoming?api_key=09fe5654e2ff995e1e6a79c9603c8e37&language=en-US&page=1)

[Videos Movie](https://api.themoviedb.org/3/movie/550/videos?api_key=09fe5654e2ff995e1e6a79c9603c8e37&language=en-US)

## Visualización de los videos
[Videos Movie](https://api.themoviedb.org/3/movie/60308/videos?api_key=09fe5654e2ff995e1e6a79c9603c8e37&language=en-US)

## Execute Project
npm install
npm start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
