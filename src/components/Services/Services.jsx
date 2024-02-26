import './Services.css'
import { Service } from "./Service/Service"

export const Services = () => {
  return (
    <div className="Page">
      <h1 className="SectionHeader">Services</h1>

      <section className="Services">
        <Service
          title='Software Development'
          description='I can develop solutions for any of your problems'
        />

        <Service
          title='Database Design'
          description='I can design and optimize your databases'
        />

        <Service
          title='SEO'
          description='I can optimize your SEO to improve your web positioning'
        />
      </section>
    </div>
  )
}
