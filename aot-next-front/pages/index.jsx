import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inspiration&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300&display=swap" rel="stylesheet"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={ styles.banner }>
        <header className={ styles.header }>
          <h1>
            <span>aot</span>
            services
          </h1>
          <div className={ styles.mcbuttonContainer }>
            <div className={ styles.mcbutton}>
              <b className={ styles.mcbuttonTop }></b>
              <b className={ styles.mcbuttonMiddle }></b>
              <b className={ styles.mcbuttonBottom }></b>
            </div>
          </div>
        </header>

        <section className={ styles.hero }>
          <div className={ styles.imageContainer }>
            <img className={ styles.image } src="../images/banner-Image-purple.png" alt=""/>
          </div>

          <div className={ styles.menuCard }>
            <h3>Occupational Therapy Services</h3>
            <ul className="menu">
              <li>
                <img className={ styles.image } src="../images/leaf-purple.png" alt=""/>
                Concussion Management
              </li>
              <li>
                <img className={ styles.image } src="../images/leaf-purple.png" alt=""/>
                Cogitive Rehabilitation
              </li>
              <li>
                <img className={ styles.image } src="../images/leaf-purple.png" alt=""/>
                Return to Work Planning
              </li>
              <li>
                <img className={ styles.image } src="../images/leaf-purple.png" alt=""/>
                Anxiety Focus Treatments
              </li>
              <li>
                <img className={ styles.image } src="../images/leaf-purple.png" alt=""/>
                Ergonomic Assessments
              </li>
              <li>
                <img className={ styles.image } src="../images/leaf-purple.png" alt=""/>
                Functional Evaluations
              </li>
            </ul>
          </div>
        </section>
      </div>

      <main className={ styles.main }>
        <section className={ styles.highlights }>

          <article className={[styles.highlightCard, styles.cogRehab].join(' ')}>
            <div className={ styles.highlightImage }>
              <img src="../images/cognitive-rehab.jpg" alt=""/>
            </div>

            <div className={ [styles.highlightImage, styles.shading].join(' ') }></div>

            <div className={ [styles.info, styles.positive].join(' ') }>
              <h3>Cogitive Rehabilitation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mi tellus. Aliquam ultrices, risus ac egestas ultrices, arcu sapien varius erat, vitae finibus libero odio ut erat.</p>
            </div>
            <div className={ [styles.info, styles.negative].join(' ') }>
              <h3>Cogitive Rehabilitation</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mi tellus. Aliquam ultrices, risus ac egestas ultrices, arcu sapien varius erat, vitae finibus libero odio ut erat.</p>
            </div>
          </article>

          
          <article className={[styles.highlightCard, styles.ergonomics].join(' ')}>
            <div className={ [styles.highlightImage, styles.positive].join(' ') }>
              <img src="../images/ergonomics-positive.jpg" alt=""/>
            </div>
            <div className={ [styles.highlightImage, styles.negative].join(' ') }>
              <img src="../images/ergonomics-negative.jpg" alt=""/>
            </div>

            <div className={ [styles.highlightImage, styles.shading].join(' ') }></div>

            <div className={ [styles.info, styles.positive].join(' ') }>
              <h3>Ergonomic Assessments</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mi tellus. Aliquam ultrices, risus ac egestas ultrices, arcu sapien varius erat, vitae finibus libero odio ut erat.</p>
            </div>
            <div className={ [styles.info, styles.negative].join(' ') }>
              <h3>Ergonomic Assessments</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mi tellus. Aliquam ultrices, risus ac egestas ultrices, arcu sapien varius erat, vitae finibus libero odio ut erat.</p>
            </div>
          </article>

        </section>
      </main>

      <footer className={ styles.footer }>

      </footer>
    </>
  )
}
