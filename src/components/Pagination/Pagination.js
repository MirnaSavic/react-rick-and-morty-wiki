import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

  let [width, setWidth] = useState(window.innerWidth)

  let updateDimension = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimension)
    return () => window.removeEventListener("resize", updateDimension)
  }, [])
    /**
     * * console.log(info.pages)
      */

    /**
     * ! let next = () => {
      *!setPageNumber((x) => x + 1)
      *! };
      *! let prev = () => {
      *!   if (pageNumber === 1) return
      *!     setPageNumber((x) => x - 1)
      *! };
     */

  
     
  return (
  <> 
  <style jsx>
    {`
    @media(max-width:760px){
      .Next, .Prev {
        display:none
      }
      .pagination {
        font-size:14px;
      }
    }
    `}
  </style>
  <ReactPaginate
    className="pagination justify-content-center gap-4 my-4"
    previousLabel="Prev"
    nextLabel="Next"
    // nextclassNameName = "btn btn-primary"
    // previousclassNameName = "btn btn-primary"
    pageclassNameName="page-item"
    pageLinkclassNameName="page-link"
    marginPagesDisplayed={5}
    activeclassNameName="active"
    onPageChange={(data) => {
      // console.log(data.selected)
      setPageNumber(data.selected + 1)
    }}
    pageCount={info?.pages}
  />
  </>
  )

  /**
   * ?  <div className='container d-flex justify-content-center gap-5 my-5'>
  //  ?<button onClick={prev} className='btn btn-primary'>Previous</button>
  * ?<button onClick={next} className='btn btn-primary'>Next</button>
  *?</div>
   */
 
  
}

export default Pagination
