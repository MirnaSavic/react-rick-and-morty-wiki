import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss'


function Cards({results, page}) {
  
  let display;
  console.log(results)

  if (results){
    display = results.map(x => {
      let {id, name, image, location, status} = x;

      return (
      <Link 
      style={{textDecoration:"none"}}
      to={`${page}${id}`} 
      key={id} 
      className='col-lg-4 col-md-6 col-sm-12 mb-4 position-relative text-dark'
      >
        <div className={`${styles.cards} d-flex justify-content-center flex-column`}>
          <img src={image} className='img-fluid'></img>

          {(() => {
            if (status === "Alive"){
              return  (
              <div className={`${styles.badge} badge bg-success`}>
                {status}
              </div>
              )
            } else if (status === "Dead"){
              return  (
              <div className={`${styles.badge} badge bg-danger`}>
                {status}
              </div>
              )
            } else {
              return  (
              <div className={`${styles.badge} badge bg-secondary`}>
                {status}
              </div>
              )
            }
          })()}

         
          <div className= {`${styles.content} content`}>
            <div className='fs-4 fw-bold mb-4'>{name}</div>
            <div className=''>
              <div className='fs-6'>Last Location</div>
              <div className='fs-5'>{location.name}</div>
            </div>
          </div>
        </div>
       
      </Link>
      )
    })
  }
  else {
   display = "No Character Found";
  }

  
  return <>{display}</>
  
}

export default Cards
