import Head from 'next/head'
import About from '../components/about'
import Footer from '../components/footer'
import Header from '../components/header'
import Skills from '../components/skills'
import Projects from '../components/projects'
import PaddingToChildren from '../components/paddingToChildren'

export default function IndexPage() {
  return (
    <div className="Container">
      <Head>
        <title>Андреев Данила</title>
      </Head>
      <main>
        <div className="flex justify-center pt-0 md:pt-8 mx-4 min-h-screen">
          <div className="flex flex-col justify-between max-w-screen-lg">
            <div className="flex flex-col border border-t-0 md:border rounded-b shadow-2xl w-full md:rounded-t divide-y">
              <PaddingToChildren>
                <Header />
                <About />
                <Projects />
                <Skills />
              </PaddingToChildren>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}
