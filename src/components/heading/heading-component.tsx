import React from 'react';
import BlurFade from '../ui/BlurFade';
import { Separator } from '../ui/separator';

function HeadingComponent({children}:{children: React.ReactNode}) {
  return (
    <BlurFade delay={0.25 * 0.05} inView>
    <div className="flex flex-col md:flex-row items-center">
      <div className="border rounded-full p-2">
        <h2 className="text-2xl font-bold text-center md:text-5xl lg:text-6xl mx-4 md:mx-1 m-1">
         {children}
        </h2>
      </div>
      <Separator className="hidden md:flex flex-grow max-w-full w-1/3 md:w-auto mb-4 md:mb-0" />
    </div>
  </BlurFade>
  )
}

export default HeadingComponent;