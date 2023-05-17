import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CardSkeleton = () => {
  return (
    <div className='card-skeleton-container-main'>
        <div className="main-skeleton">
            <Skeleton width={'100%'} />
        </div>
    </div>
  )
}

export default CardSkeleton