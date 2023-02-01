import aboutImg from '../images/frshblk.png'
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="the" subTitle="culture" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the culture</h3>
          <p>
            Follow me inside a culture often exploited for profit and take a
            journey alongside the people creating style, music, art, and
            innovation who are not credited for their contributions.
          </p>
          <p>
            The Culture may be loved by mainstream media, but the people who
            live it everyday have yet to recieve a payment for their
            intellectual property. Let's explore the normalization of culture appropriation for profit.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}
export default About
