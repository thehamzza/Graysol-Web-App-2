import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { StarFill } from 'react-bootstrap-icons';
import styles from '../styles';

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1400, min: 1000 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 1000, min: 350 },
      items: 1
    }
  };

  return (
    <section className='w-screen testimonial bg-dark-900 py-12' id='skills'>
      <div className='container w-[95%] sm:w-[85%] mx-auto lg:mx-0'>
        <div className='row lg:w-screen'>
          <div className='col-12 lg:w-[calc(100%-3rem)] lg:mx-auto'>
            <div className='testimonial-bx lg:rounded-none lg:py-24'>
              <h1 className={`${styles.h1}`}>Testimonials.</h1>
              <h4 className={`${styles.h4} my-8 xl:mb-12`}>Some of our proud customers</h4>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='testimonial-slider mt-5 xl:max-w-[70%] xl:max-w-[60rem] xl:mx-auto'
                autoPlay={false}
                autoPlaySpeed={3000}
                renderButtonGroupOutside={true}
                customButtonGroup={<CustomButtonGroup />}
                arrows={false}
              >
                {/* Original Testimonials */}
                <TestimonialCard
                  image='/src/assets/img/lior_image.jpg'
                  name='Lior'
                  title='CEO Testamind Ecommerce'
                  review='I am a very old client of Hamza, long before this company even exists, he showcased his technical expertise and strong communication skills, which were essential to the successful delivery of our ecommerce tool.'
                />
                <TestimonialCard
                  image='/src/assets/img/yaruq_nadeem.jpeg'
                  name='Leonardo Turchi'
                  title='Software Developer, Italy'
                  review='I am impressed by the results, very responsive communication, delivered a challenging project within a short span of time, with feasibility and technical analysis reports. Totally recommended and I would come again.'
                />
                <TestimonialCard
                  image='/src/assets/img/ionut_panait_image.jpg'
                  name='Ionut John Panait'
                  title='Businessman, Romania'
                  review='I am glad I hired them, they were able to showcase their technical expertise and strong communication skills, which were essential to the successful delivery of our MVP. We are working on another project now.'
                />

                {/* New Testimonials */}
                <TestimonialCard
                  image='https://randomuser.me/api/portraits/men/12.jpg'
                  name='Sam Tejada'
                  title='Founder & CEO, Liquivida'
                  review='We approached this project with a big vision—to make wellness accessible through tech. From sleek scheduling systems to a real-time analytics dashboard, the output was clean, precise, and scalable. The team didn’t just build a solution—they built our digital backbone. We’re scaling faster than ever.'
                />
                <TestimonialCard
                  image='https://randomuser.me/api/portraits/men/21.jpg'
                  name='Jarek Tadla'
                  title='Realtor, USA'
                  review='As a Realtor, I need tools that are reliable and efficient. Working with the Graysol team, we launched a custom client portal that integrates directly with my CRM and property listings—no lag, no fluff. Now I can finalize deals while on the move. Their execution is sharp, and the results speak for themselves.'
                />
                <TestimonialCard
                  image='https://randomuser.me/api/portraits/women/45.jpg'
                  name='Lauren Cobello'
                  title='CEO, Leverage with Media PR'
                  review='Media is all about timing and optics. Our new dashboard now gives us both—pulling metrics from dozens of platforms into one slick interface. The UX is clean, the logic is spot on, and we’ve already saved countless hours. A huge thank-you to the devs who made it all work behind the scenes.'
                />
                <TestimonialCard
                  image='https://randomuser.me/api/portraits/men/33.jpg'
                  name='Dr. Steve Rallis'
                  title='Chief Medical Officer, Wellness Brand'
                  review='Security, speed, and simplicity. We needed all three—and got them. The team implemented HIPAA-ready patient scheduling for our IV therapy business with zero hassle. They even added patient reminders we didn’t know we needed. Extremely satisfied.'
                />
                <TestimonialCard
                  image='https://randomuser.me/api/portraits/men/41.jpg'
                  name='Corey Jacobs'
                  title='Founder, Winerrgy'
                  review='We’re all about peak performance. Our mobile app now tracks biometric data, syncs in real-time, and even gives energy output insights with predictive analytics. Wild, right? These guys made it real.'
                />
                <TestimonialCard
                  image='https://randomuser.me/api/portraits/women/68.jpg'
                  name='Olivia Harper'
                  title='Product Manager, AI SaaS Startup'
                  review='They nailed our LLM chatbot integration. The fallback logic, prompt chaining, and user experience was built with clarity and depth. Special shoutout to Bushra and Haris—they understood nuance and nailed implementation.'
                />
                <TestimonialCard
                  image='https://randomuser.me/api/portraits/men/45.jpg'
                  name='Sanjay Patel'
                  title='Founder, VisionEdge AI'
                  review='We built a smart retail surveillance MVP using OpenCV. It wasn’t easy—tight deadlines, custom vision tasks. Still, it was delivered on time with accuracy. Data pipelines, alerting logic, UI—rock solid.'
                />
                <TestimonialCard
                  image='https://randomuser.me/api/portraits/men/62.jpg'
                  name='Daniel Briggs'
                  title='CTO, WorkflowGenix'
                  review='LangChain, vector DBs, custom workflows—we threw everything at them and they didn’t blink. The automation agents they deployed now handle hours of manual work daily. Wish we’d done this a year earlier.'
                />
                <TestimonialCard
                  image='https://randomuser.me/api/portraits/men/73.jpg'
                  name='Dr. Ahmed Raza'
                  title='Director, HealthAI Diagnostics'
                  review='We collaborated on a PyTorch-based model for radiology image classification. Accuracy, latency, deployment—everything was dialed in. Communication was proactive and timelines were respected. It’s rare to find that.'
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ image, name, title, review }) => (
  <div className='w-11/12 testimonial-slider-item xl:flex xl:justify-center'>
    <div className='card p-4 xl:p-8 xl:w-[383px] xl:h-[436px] text-center px-6 bg-light-900 rounded-lg'>
      <div className='user-content'>
        <img src={image} className='w-16 h-16 xl:w-20 xl:h-20 m-auto rounded-full' alt={name} />
        <h6 className={`mb-1 mt-2 ${styles.h6DarkHeavy}`}>{name}</h6>
        <p className={`${styles.p4Dark} opacity-60`}>{title}</p>
        <div className='flex flex-wrap justify-center mt-2'>
          <StarFill /><StarFill /><StarFill /><StarFill />
        </div>
        <p className={`mt-2 xl:mt-8 ${styles.p3Dark}`} align="justify">
          {review}
        </p>
      </div>
    </div>
  </div>
);

const CustomButtonGroup = ({ next, previous }) => (
  <div className='custom-button-group testimonial-buttons'>
    <button className='prev text-black' onClick={previous}>&lt;</button>
    <button className='next' onClick={next}>&gt;</button>
  </div>
);

export { Testimonials };