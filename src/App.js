import "./App.css";
import Header from "./components/banner/Header";
import Biography from "./components/biography/Biography";
import Credentials from "./components/credentials/Credentials";
import Description from "./components/description/Description";
import LinkButton from "./components/link_button/LinkButton";
import Name from "./components/name/Name";
import Photo from "./components/photo/Photo";

function App() {
  return (
    <>
    <Header />
    <Credentials>
      <Biography>
        <Photo url="assets/images/irvin-quiroz.png" title="Irving Quiroz" />
        <Name name="Irving Quiroz" />
        <Description>
          <p>Chef repostero mexicano, aprendiz eterno de la pastelería. Ha mostrado su pastelería en diversos festivales en México y en el extranjero.</p>
          <p>Su carrera profesional abarca más de 15 años: Gerente del Instituto Tecnológico de Panificación Unilever, Chef instructor de varias instituciones, entre ellas: Centro Culinario Ambrosía, Instituto Culinario de México, Escuela de Pastelería del Gremio de Barcelona.</p>
          <p>Obtuvo su formación como profesional en el Instituto Culinario de México y su especialización en panadería en la École Ferrandi de París, ha sido asesor panadero en el Centro Culinario Caterplan de Rio de Janeiro.</p>
          <p>Ha sido representante de México en las Olimpiadas Culinarias de Alemania en 2008 y 2012.</p>
          <p>Colaborador del programa La Pastelería que se transmite por Fox Life.</p>
          <p>Participante en Top Chef México primera temporada y es autor del Larousse de Panes Mexicanos, donde se rinde un homenaje a la panadería mexicana y su segundo libro, Pan Artesanal en Casa, también con editorial Larousse; con este libro obtuvo el premio como mejor libro de panadería del mundo en 2019 en los Gourmand Cookbook Awards.</p>
          <p>En 2020 regresa a los hogares de Latinoamérica en el prestigioso canal de cocina El Gourmet con su programa Como Pan Caliente, en donde presenta un repertorio de panes mexicanos a más de 16 países.</p>
        </Description>
      </Biography>
      <Biography>
        <Photo url="assets/images/amparo-espinoza.png" title="Amparo Espinoza" />
        <Name name="Amparo Espinoza" />
        <Description>
          <p>Nutrióloga, conductora, líder y emprendedora; disfruta compartir su conocimiento en salud y nutrición en diversos foros tanto en México como en Estados Unidos.</p>
          <p>Se graduó en la máxima casa de estudios del Estado de México y obtuvo su título profesional por medio de la excelencia académica. Actualmente cursa la maestría en Nutrición Clínica en una de las instituciones más reconocidas del país, la Escuela de Dietética y Nutrición.</p>
          <p>La carrera profesional de Amparo consta de más de 10 años de experiencia, brindando consulta de nutrición presencial y en línea a pacientes en México, Alemania, Francia, Barcelona, Canadá y Estados Unidos.</p>
          <p>Se caracteriza por transformar el estilo de vida de sus pacientes, enseñándoles a comer de manera saludable.</p>
          <p>Conductora estelar en uno de los programas de más rating en Mexiquense Televisión, Salud en Casa, transmitido todos los jueves y sábados por esta televisora.</p>
          <p>Colaboradora en distintos programas, como Noticias Canal 19 Sacramento California de Univisión (2021- Actualidad), Revista MQX (2022), Emociónate de Mexiquense TV (2022), Maribel Guardia Live (2021), Porque Soy mujer de Mexiquense TV (2014- 2020), Vive Ligero de Uniradio (2017-2019) y Telediario Canal 6 (2015).</p>
        </Description>
      </Biography>
    </Credentials>
    <LinkButton
      text="Conoce más"
      url="https://www.youtube.com/watch?v=r7gRMfq00Os&list=PL9EzohqwHbVGRkTsxynoQ88tvE0kBFgQ8"
      title="Conoce más"
    />
    </>
    
  );
}

export default App;
