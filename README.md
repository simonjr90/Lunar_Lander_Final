LunarLander
El proyecto se divide en tres directorios, adems del directorio raíz. EL primero es el directorio que contiene la lógica javascript, el segundo contiene los documentos de css y el último contiene las imágenes. Por otro lado todos los archivos html se localizan en el documento raíz facilitando la ruta hacia los dems elementos.

Dentro de root existen dos documentos:

Main o lunar lander
Instructions
Dentro de root/css existen dos documentos:

Main version desktop (720px o superior)
Main version mobile (720px o inferior)

Dentro de root/img se engloban todas las imgenes.

HTML/CSS

Elementos comunes

Opciones En este caso hemos optado por crear un menú rectangular central que se active al pulsar el botón de opciones.

Version Desktop

Puesto que es una pantalla de 16:9 que dispone de mucho ms espacio horizontal, todos los menús y elementos interactuables se han dispuesto en los laterales de la pantalla de manera que no puedan interferir con el desplazamiento de la nave. Para activar la nave se realizará pulsando la tecla de espacio, an sin implementar.

Version Mobile

El cambio a una pantalla vertical nos ha obligado a disponer los elementos interactuables en la zona superior de la pantalla ocupando un 10% del alto de la pantalla. En este caso, para evitar poner ms elementos en una pantalla ya pequeña de por si, la activación de la nave se podrá realizar interactuando con cualquier parte de la pantalla.

Instrucciones

Se trata de una página simple que solo contiene un botn de retorno y el conjunto de instrucciones del juego centradas y en inglés. Para mejorar el rendimiento se ha optado por diseñar el html con un contenido de un tamaño que se pueda distribuir correctamente en pantalla sin necesidad de hacer adaptaciones específicas con css para las distintas pantallas.

Cambios realizados

Algunas de las caractersticas iniciales se han declinado por distintas razones. A continuación listo dichos cambios:

Eliminación del menú de dificultad
Se ha añadido reacción hover a los botones para hacerlos más visuales
Javascript

La lógica de javascript se basa en los siguientes principios:

Usamos el mismo archivo para las distintas pantallas
El control del juego se puede realizar tanto utilizando teclado como ratón como una pantalla táctil, para cualquier dispositivo
Los contadores que se despliegan en pantalla son utilizados para definir todos los comportamientos del juego
Extra

Para mejorar la performance se ha creado una rama (minimifiedVersion) en la cuál todos los documentos html y css han sido minimificados lo que hace que ocupen menos espacio.
