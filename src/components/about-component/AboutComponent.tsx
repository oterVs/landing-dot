import clsx from 'clsx'
import { Share2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AboutComponent = ({ img, title, description, icon }: { img: string, title: string, description: string, icon: React.ComponentType<{ className?: string }> }) => {
  return (

      <div className='group cursor-pointer  relative'>
        <Image
          className='rounded-lg'
          src={img}
          alt="About"
          width={750}
          height={700}
        />
        <div className='absolute top-0 left-0 flex-col justify-end p-5 w-full h-full hidden group-hover:flex  bg-gradient-to-b from-white/0 dark:from-black/0 to-slate-50 dark:to-black'>
           <FeatureCard title={title} description={description} icon={icon} />

        </div>
      </div>
  )
}

interface FeatureCardProps {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description: string
  className?: string
  }

function FeatureCard({
  icon: Icon = Share2,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={clsx("space-y-2", className)}>
      <div className="h-10 w-10">
        <Icon className="h-full w-full" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}


export default AboutComponent