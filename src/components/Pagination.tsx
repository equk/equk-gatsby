import React from 'react'
import { Link } from 'gatsby'

interface PaginationProps {
  prevPagePath?: any
  nextPagePath?: any
  hasNextPage?: boolean
  hasPrevPage?: boolean
}

const Pagination = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }: PaginationProps) => (
  <nav className="pagination" role="navigation">
    <div>
      {hasPrevPage && (
        <Link to={prevPagePath} rel="prev">
          Previous
        </Link>
      )}
    </div>
    <div>
      {hasNextPage && (
        <Link to={nextPagePath} rel="next">
          Next Page
        </Link>
      )}
    </div>
  </nav>
)

export default Pagination
