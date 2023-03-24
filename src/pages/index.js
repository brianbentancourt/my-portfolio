import Head from 'next/head'
import { Inter } from 'next/font/google'
import {
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme();
  const isBiggerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div>

      <Head>
        <title>Brian Bentancourt</title>
        <meta name="description" content="Porfolio" />
      </Head>
      <Grid container>
        <Grid item xs={12} id="home" >
          <section >
            <About isBiggerThanMd={isBiggerThanMd} />
          </section>
        </Grid>
        <Grid item xs={12} id="portfolio" style={{ height: '100vh', margin: 10 }}  >
          <section >
            <Projects isBiggerThanMd={isBiggerThanMd} />
          </section>
        </Grid>
        <Grid item xs={12} id="experience" style={{ height: '100%', margin: 10 }} >
          <section >
            <Experience isBiggerThanMd={isBiggerThanMd} />
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
