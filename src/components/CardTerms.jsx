import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <span className="title">Términos y condiciones</span>
        <div className="card__tags">
          <p>PORTAL CAUTIVO CIBERPAZ, Al acceder a nuestro sitio web aceptas los TÉRMINOS Y CONDICIONES DE USO. 
          Estos términos regulan tu acceso y uso de los servicios que ofrecemos a través de nuestra plataforma, 
          estos términos regulan  tu acceso y uso de los servicios que  ofrecemos a través de nuestra plataforma, 
          incluyendo, recopilación, almacenamiento y tratamiento de datos personales. 
 <br/>
Al navegar por este sitio web, consideramos que está de acuerdo con las condiciones de uso que 
figuran a continuación:<br/>
- Si no está de acuerdo con los términos de este acuerdo, le pedimos que no haga ningún otro uso de 
este sitio web, mucho menos que se registre o envíe sus datos personales.<br/>
- Si cambiamos nuestras condiciones de uso, publicaremos el nuevo texto en este sitio web, con una 
fecha de revisión actualizada. Podemos modificar este documento en cualquier momento. Si hay un 
cambio significativo en los términos de este acuerdo, podemos informarle utilizando la información 
de contacto que tenemos en nuestra base de datos o mediante una notificación.<br/>
- El uso de este sitio web después de los cambios significa que usted acepta las condiciones de uso 
revisadas. Si, después de leer la versión revisada, no está de acuerdo con sus términos, por favor, 
termine su acceso.<br/>
- El uso de este sitio web le otorga automáticamente la condición de Usuario e implica su plena 
aceptación de todas las directrices y condiciones incluidas en estas Condiciones. <br/>
- El uso de este sitio web implica la adhesión a estas Condiciones de Uso y a la versión más actualizada 
de la Política de Privacidad de portal.<br/><br/>
En general, el acceso al sitio web de portal es gratuito y no requiere registro previo. Sin embargo, 
para hacer uso de algunas funcionalidades, el usuario puede necesitar registrarse, creando una 
cuenta de usuario con un nombre de usuario y una contraseña de acceso.<br/><br/>
Es responsabilidad del usuario proporcionar únicamente información correcta, auténtica, válida, 
completa y actualizada, así como no revelar su nombre de usuario y contraseña a terceros.
Algunas partes de este sitio web ofrecen al usuario la opción de publicar comentarios en 
determinadas áreas. portal no consiente la publicación de contenidos de carácter discriminatorio, 
ofensivo o ilícito, o que infrinjan los derechos de autor o cualquier otro derecho de terceros.
La publicación de cualquier contenido por parte del usuario de este sitio web, incluidos los mensajes 
y comentarios, implica una licencia no exclusiva, irrevocable e irreversible para su uso, reproducción 
y publicación por parte de portal en su sitio web, plataformas de internet y aplicaciones, o incluso 
en otras plataformas, sin ninguna restricción o limitación.<br/><br/>
La información sobre el uso que usted hace de este sitio web puede recogerse a través de las 
cookies. Las cookies son piezas de información que se almacenan directamente en el equipo que 
está utilizando. Las cookies permiten recoger información como el tipo de navegador, el tiempo de 
permanencia en el sitio web, las páginas visitadas, las preferencias de idioma y otros datos de tráfico 
anónimos. Nosotros y nuestros proveedores de servicios utilizamos la información para la 
protección de la seguridad, para facilitar la navegación, mostrar la información de manera más 
eficiente y personalizar su experiencia al utilizar este sitio web, así como para el seguimiento en 
línea. También recopilamos información estadística sobre el uso del sitio web para mejorar 
continuamente nuestro diseño y funcionalidad, para entender cómo se utiliza el sitio web y para 
ayudarle a resolver problemas relevantes.<br/><br/>
Si no desea que se recoja su información a través de las cookies, existe un procedimiento sencillo 
en la mayoría de los navegadores que permite rechazar automáticamente las cookies, o le da la 
opción de aceptar o rechazar la transferencia de una cookie específica (o varias) de un sitio web 
concreto a su ordenador. Sin embargo, esto puede crear inconvenientes en su uso del sitio web.
La configuración que elija puede afectar a su experiencia de navegación y al funcionamiento que 
requiere el uso de cookies. En este sentido, rechazamos cualquier responsabilidad por las 
consecuencias derivadas del funcionamiento limitado de este sitio web causado por la desactivación 
de las cookies en su dispositivo (incapacidad para establecer o leer una cookie).
Todos los elementos de portal son propiedad intelectual de la misma o de sus licenciantes. Estos 
términos o el uso del sitio web no le otorgan ninguna licencia o derecho de uso de los derechos de 
propiedad intelectual de portal o de cualquier tercero.<br/><br/>
Este sitio web puede contener, de vez en cuando, enlaces de hipertexto que le redirigirán a sitios 
web de nuestros socios, anunciantes, proveedores, etc. Si hace clic en uno de estos enlaces a 
cualquiera de estos sitios, recuerde que cada sitio tiene sus propias prácticas de privacidad y que 
nosotros no somos responsables de estas políticas. Por favor, consulte esas políticas antes de enviar 
cualquier dato personal a esos sitios.<br/><br/>
No somos responsables de las políticas y prácticas de recopilación, uso y divulgación (incluidas las 
prácticas de protección de datos) de otras organizaciones, como Facebook, Apple, Google, 
Microsoft, o cualquier otro desarrollador de software o proveedor de aplicaciones, tienda de medios 
sociales, sistema operativo, proveedor de servicios de internet o fabricante de dispositivos, incluidos 
los Datos Personales que usted divulgue a otras organizaciones a través de las aplicaciones, en 
relación con dichas aplicaciones, o publicados en nuestras redes sociales. Le recomendamos que se 
informe sobre la política de privacidad y las condiciones de uso de cada sitio web visitado o 
proveedor de servicios utilizado. <br/><br/>
El funcionamiento de este sitio web es por tiempo indefinido.
La totalidad del sitio web o cada una de sus secciones podrá ser cerrada, suspendida o interrumpida 
unilateralmente por portal, en cualquier momento y sin previo aviso.
Durante el uso de este sitio web, ciertos datos personales serán recogidos y procesados por portal 
y/o los Socios. Las normas relativas al tratamiento de los datos personales según Ley 1581 de 2012 relativas a la protección de datos 
estipuladas en la Política de Privacidad.</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 300px;
    margin: 30px;
    background: #7EE081;
    padding: 30px;
    display: flex;
    font-family: "Titillium Web", sans-serif;
    font-weight: 400;
    font-style: normal;
    flex-wrap: wrap;
    font-size: 1.3vw;
    color: #313B72;
    border-radius: 15px;
    box-shadow: -20px 20px 0px -5px #62A87C;
    z-index: 1;
    opacity: 0.93;
  }
  .card__tags {
    overflow: auto;
    height: 80%;
  }
  .title {
    font-family: "Titillium Web", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.6vw;
  }`;

export default Card;
