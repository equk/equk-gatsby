import React from 'react'
import { Link } from 'gatsby'

interface PaginationProps {
  prevPagePath?: any
  nextPagePath?: any
  hasNextPage?: boolean
  hasPrevPage?: boolean
}

function Pagination({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }: PaginationProps) {
  return (
    <div className="pagination flex justify-center border-t-2 border-slate-200 px-3 py-2 dark:border-slate-700/40">
      <nav className="pagination flex items-center gap-x-8" role="navigation">
        {(hasPrevPage && (
          <Link to={prevPagePath} rel="prev" className="mr-auto py-2 sm:hover:text-accent">
            Previous
          </Link>
        )) || <p>Previous</p>}

        {(hasNextPage && (
          <Link to={nextPagePath} rel="next" className="mr-auto py-2 sm:hover:text-accent">
            Next
          </Link>
        )) || <p>Next</p>}
      </nav>
    </div>
  )
}

export default Pagination
