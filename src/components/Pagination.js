import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Pagination = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }) => (
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

Pagination.propTypes = {
  prevPagePath: PropTypes.string,
  nextPagePath: PropTypes.string,
  hasNextPage: PropTypes.bool,
  hasPrevPage: PropTypes.bool,
}

export default Pagination
