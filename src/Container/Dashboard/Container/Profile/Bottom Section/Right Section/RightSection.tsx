import { memo } from 'react'
import Resume from './Resume/Resume'

function RightSection() {
  return (
    <div className="w-[75%] flex flex-col gap-3">
        <Resume />
        
    </div>
  )
}

export default memo(RightSection)