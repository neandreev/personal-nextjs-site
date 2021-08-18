import Head from 'next/head';
import About from '../components/about';
import Container from '../components/container';
import Header from '../components/header';
import Skills from '../components/skills';
import Projects from '../components/projects';

const IndexPage = () => (
  <div className="Container">
    <Head>
      <title>Андреев Данила</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Фронтенд-разработчик, mail@neandreev.ru" />
    </Head>
    <main>
      <Container>
        <Header id="header"/>
        <Skills id="skills"/>
        <Projects id="projects"/>
      </Container>
    </main>
  </div>
);

export default IndexPage;
