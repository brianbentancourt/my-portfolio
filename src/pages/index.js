import Head from 'next/head'
import {
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material"
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Footer from '@/components/Footer'
import Studies from '@/components/sections/Studies'
import Clients from '@/components/sections/Clients'
import Contact from '@/components/sections/Contact'
import WhatsappFloatingButton from '@/components/WhatsappFloatingButton'

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
      <WhatsappFloatingButton phoneNumber={59897313415} />
      <Head>
        <title>Brian Bentancourt</title>
        <meta name="description" content="Porfolio" />
      </Head>
      <Grid container spacing={5} >
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
            <Studies isBiggerThanMd={isBiggerThanMd} />
          </section>
        </Grid>
        <Grid item xs={12} id="clients" style={style.section}  >
          <section>
            <Clients isBiggerThanMd={isBiggerThanMd} />
          </section>
        </Grid>
        <Grid item xs={12} id="contact" style={style.section} >
          <section>
            <Contact isBiggerThanMd={isBiggerThanMd} />
          </section>
        </Grid>
      </Grid>
      <Footer />

    </div>
  )
}
