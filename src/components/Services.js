import { services } from '../data'
import Title from './Title'
import Service from './Service'
const Services = () => {
  return (
    <section className='section services gallery' id='services'>
      <Title className='gallery-title' title='our' subTitle='gallery' />

      {/* <div className='section-center services-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div> */}
    </section>
  )
}
export default Services
