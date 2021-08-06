import Head from 'next/head';
import About from '../components/about';
import Container from '../components/container';
import Header from '../components/header';
import Skills from '../components/skills';
import Projects from '../components/projects';

export default function IndexPage() {
  return (
    <div className="Container">
      <Head>
        <title>Андреев Данила</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Фронтенд-разработчик, mail@neandreev.ru" />
      </Head>
      <main>
        <Container>
          <Header id="header"/>
          <About id="about"/>
          <Projects id="projects"/>
          <Skills id="skills"/>
        </Container>
      </main>
    </div>
  );
}
