import "./App.css";
import Header from "./components/banner/Header";
import Biography from "./components/biography/Biography";
import Credentials from "./components/credentials/Credentials";
import Description from "./components/description/Description";
import Features from "./components/features/Features";
import Information from "./components/information/Information";
import LinkButton from "./components/link_button/LinkButton";
import Main from "./components/main/Main";
import Name from "./components/name/Name";
import Photo from "./components/photo/Photo";

function App() {
  return (
    <Main>
      <Header />
      <Features>
        <Description>
          <div className="info wow animate__fadeIn" data-wow-duration=".5s">
              <p>La masa madre está intrínsecamente ligada al nacimiento del pan tal y como lo conocemos. Su descubrimiento permitió por primera vez leudar el pan, mediante una fermentación natural, haciéndolo no sólo comestible sino también sabroso.</p>
              <p>Gracias a su larga historia, su sabor y al hecho de que se mantiene fresco durante más tiempo, el pan de masa madre sigue siendo una parte central de la tradición panadera de muchas culturas.</p>
              <p>La masa madre es un ingrediente natural, que se obtiene mediante la fermentación de los cereales, a través de las bacterias y levaduras presentes en ellos y en el medio ambiente. Su fermentación natural permite a nuestro cuerpo absorber más fácilmente sus nutrientes, lo que convierte al pan de masa madre en una opción muy nutritiva. Además, es tan ligero que no inflama tu intestino, es fácil de digerir gracias a la degradación de azúcares, almidones y gluten. También es famoso por tener una corteza crujiente, una textura gruesa y un aroma intenso.</p>
              <p>Si buscas una opción nutritiva para tu familia, ¡el pan de masa madre es una excelente alternativa!</p>
          </div>
        </Description>
      </Features>
      <Credentials>
        <Biography direction="reverse">
          <Photo url="assets/images/irvin-quiroz.png" title="Irving Quiroz" rotate="8deg" />
          <Information position="right">
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
          </Information>
        </Biography>
        <Biography>
          <Photo url="assets/images/amparo-espinoza.png" title="Amparo Espinoza" rotate="-8deg" />
          <Information>
            <Name name="Amparo Espinoza" />
            <Description position="left">
              <p>Nutrióloga, conductora, líder y emprendedora; disfruta compartir su conocimiento en salud y nutrición en diversos foros tanto en México como en Estados Unidos.</p>
              <p>Se graduó en la máxima casa de estudios del Estado de México y obtuvo su título profesional por medio de la excelencia académica. Actualmente cursa la maestría en Nutrición Clínica en una de las instituciones más reconocidas del país, la Escuela de Dietética y Nutrición.</p>
              <p>La carrera profesional de Amparo consta de más de 10 años de experiencia, brindando consulta de nutrición presencial y en línea a pacientes en México, Alemania, Francia, Barcelona, Canadá y Estados Unidos.</p>
              <p>Se caracteriza por transformar el estilo de vida de sus pacientes, enseñándoles a comer de manera saludable.</p>
              <p>Conductora estelar en uno de los programas de más rating en Mexiquense Televisión, Salud en Casa, transmitido todos los jueves y sábados por esta televisora.</p>
              <p>Colaboradora en distintos programas, como Noticias Canal 19 Sacramento California de Univisión (2021- Actualidad), Revista MQX (2022), Emociónate de Mexiquense TV (2022), Maribel Guardia Live (2021), Porque Soy mujer de Mexiquense TV (2014- 2020), Vive Ligero de Uniradio (2017-2019) y Telediario Canal 6 (2015).</p>
            </Description>
          </Information>
        </Biography>
      </Credentials>
      <LinkButton
        text="Conoce más"
        url="https://www.youtube.com/watch?v=r7gRMfq00Os&list=PL9EzohqwHbVGRkTsxynoQ88tvE0kBFgQ8"
        title="Conoce más"
      />
    </Main>
    
  );
}

export default App;
