import React from 'react'
import { useSelector } from 'react-redux'
import SLiderCom from '../../../common/carousel/SLiderCom';

const Fantasy = () => {
  const {data}=useSelector((state)=>state.reducer);
  const fantasy=data.fantasy
  return (
   <>
 <SLiderCom gameData={fantasy} textHeading={"Fantasy Games"}/>
   </>
  )
}

export default Fantasy