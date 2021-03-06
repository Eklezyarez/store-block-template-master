import React, { useState } from 'react'
import { useCssHandles} from "vtex.css-handles"
/* import { FormattedMessage } from 'react-intl' */
import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'

const DEFAULT_TARGET_DATE = getTwoDaysFromNow()


interface CountdownProps {
/*   title: string */
  targetDate: string
}
/* 
const CSS_HANDLES = ['container', 'countdown', 'title'] as const */

const CSS_HANDLES = ['countdown'] as const

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
 /*  title, */
  targetDate = DEFAULT_TARGET_DATE,
}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  /* const titleText = title || <FormattedMessage id="countdown.title" /> */
  const handles = useCssHandles(CSS_HANDLES)

  tick(targetDate, setTime)

  return (
  /*   <div className={`${handles.container} t-heading-2 fw3 w-100 c-muted-1`}>
      <div className={`${handles.title} db tc`}>{titleText}</div>
      
    </div> */
    <div className={`${handles.countdown} db tc`}>
        {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
      </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
   /*  title: {
           title: 'Sou um título',
           type: 'string',
           default: null,
         }, */
    targetDate: {
         title: 'Data final',
         description: 'Data final utilizada no contador',
         type: 'string',
         default: null,
      },
  },
}

export default Countdown
