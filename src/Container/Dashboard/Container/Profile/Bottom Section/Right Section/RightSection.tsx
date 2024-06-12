import { memo } from 'react'
import Resume from './Resume/Resume'
import Education from './Education/Education'
import Employment from './Employment/Employment'
import Skills from './Skills/Skills'

function RightSection() {
  return (
    <div className="w-[75%] flex flex-col gap-3">
        <Resume />
        <Education />
        <Employment />
        <Skills />

        
    </div>
  )
}

export default memo(RightSection)