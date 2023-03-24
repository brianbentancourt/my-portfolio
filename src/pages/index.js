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

const style = {
  section: {
    marginTop: 100
  }
}

export default function Home() {
  const theme = useTheme();
  const isBiggerThanMd = useMediaQuery(theme.breakpoints.up('md'));


  return (
    <div>
      <Head>
        <title>Brian Bentancourt</title>
        <meta name="description" content="Porfolio" />
      </Head>
      <Grid container spacing={7}>
        <Grid item xs={12} id="home" >
          <section >
            <About isBiggerThanMd={isBiggerThanMd} />
          </section>
        </Grid>
        <Grid item xs={12} id="portfolio" style={style.section}  >
          <section >
            <Projects isBiggerThanMd={isBiggerThanMd} />
          </section>
        </Grid>
        <Grid item xs={12} id="experience" style={style.section}  >
          <section >
            <Experience isBiggerThanMd={isBiggerThanMd} />
          </section>
        </Grid>
        <Grid item xs={12} id="studies" style={style.section} >
          <section >
            ESTUDIOS
          </section>
        </Grid>
        <Grid item xs={12} id="clients" style={style.section}  >
          <section>
            CLIENTES
          </section>
        </Grid>
        <Grid item xs={12} id="contact" style={style.section} >
          <section>
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
