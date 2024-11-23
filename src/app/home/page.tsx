import AboutComponent from '@/components/about-component/AboutComponent'
import ContactComponent from '@/components/contact-component/ContactComponent'
import Navbar from '@/components/navbar'
import NavigationLinks from '@/components/navigation-link/NavigationLink'
import BlurIn from '@/components/ui/blur-in'
import DotPattern from '@/components/ui/dot-pattern'
import Marquee from '@/components/ui/marquee'
import { ABOUT } from '@/data/resume'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <div className='h-screen'>
        <div className='flex justify-between items-center'>
          <div className='flex py-5'>
            <Image
              alt='logo'
              src='/img/Logo.png'
              width={24}
              height={24}
            />
            <span className='mx-3 font-semibold text-xl'>Dot Dager</span>
          </div>
          <NavigationLinks />
        </div>

        <div className='flex h-full '>
          <div className='flex flex-col w-1/2 justify-center'>
            <div className='flex flex-col  justify-center max-w-[600px] pb-[68px]'>
              <BlurIn
                word="Bienvenido a"
                className="text-4xl font-bold text-black dark:text-white text-left"
              />
              <BlurIn
                word="Dot Dager 👋"
                className="text-4xl font-bold text-black dark:text-white text-left"
              />
              <div className='py-6'>
                <BlurIn
                  word="I'm Dot Dager, a passionate about programming, philosophy and little squirks of life (cats,guitars, even pickes)"
                  className="text-lg font-medium md:text-base text-muted-foreground leading-relaxed text-left "
                />
              </div>

            </div>
          </div>
          <div className='flex flex-col w-1/2 justify-center '>
            <Marquee pauseOnHover className='-translate-y-20'>
              {ABOUT.hobbies.map((hobby) => (
                <AboutComponent key={hobby.img} url={hobby.img} />
              ))}
            </Marquee>
          </div>

        </div>


      </div>

      <div className='h-[400px]'>
        <ContactComponent />
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] ",
        )}
      />
      <Navbar />
    </div>
  )
}

export default HomePage