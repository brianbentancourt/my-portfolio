import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Grid } from "@mui/material"
import About from '@/components/sections/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>

      <Head>
        <title>Brian Bentancourt</title>
        <meta name="description" content="Porfolio" />
      </Head>
      <Grid container>
        <Grid item xs={12} id="home"   >
          <section >
            <About />
          </section>
        </Grid>
        <Grid item xs={12} id="portfolio" style={{ height: '100vh', margin: 10 }}  >
          <section >
            PROYECTOS
          </section>
        </Grid>
        <Grid item xs={12} id="experience" style={{ height: '100vh', margin: 10 }} >
          <section >
            EXPERIENCIA
          </section>
        </Grid>
        <Grid item xs={12} id="studies" style={{ height: '100vh', margin: 10 }} >
          <section >
            ESTUDIOS
          </section>
        </Grid>
        <Grid item xs={12} id="clients" style={{ height: '100vh', margin: 10 }} >
          <section >
            CLIENTES
          </section>
        </Grid>
        <Grid item xs={12} id="contact" style={{ height: '100vh', margin: 10 }}>
          <section >
            CONTACTO
          </section>
        </Grid>
      </Grid>

      <footer>
        <span>Placeholder for footer</span>
      </footer>
    </div>
  )
}
