import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                {/* About image */}

                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} alt="" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>
                {/* About Content */}
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>
                        Proud to be one of the nations best 
                    </h2>
                    <p className='text_para'>
                    MediCare is dedicated to making healthcare accessible for everyone. Founded by health professionals and tech experts, our platform simplifies finding and booking healthcare services. We emphasize user-friendly design and efficient health management, helping patients easily navigate their healthcare needs. 
                    </p>

                    <p className='text_para mt-[30px]'>
                    We are committed to enhancing the healthcare experience by integrating features like telemedicine, personalized health management, and real-time monitoring. MediCare upholds the highest standards of service and security, continually adapting to feedback and technological advances to ensure quality healthcare is just a click away.
                    </p>

                    <Link to='/'>
                        <button className='btn'>
                            Learn More
                        </button>
                    </Link>
                </div>

            </div>
        </div>
  </section>
  );
 
}

export default About