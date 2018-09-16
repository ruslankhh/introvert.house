import React from 'react'
import PropTypes from 'prop-types'

const Grid = ({ size = 1, full = false, children }) => (
  <div className={`columns is-multiline ${full ? 'columns-full': ''}`}>
    {children.map((child, i) => (
      <div key={`grid-item-${i}`} className={`column is-${12 / size}`}>
        {child}
      </div>
    ))}
  </div>
)

Grid.propTypes = {
  size: PropTypes.number,
  full: PropTypes.boolean
}

export default Grid
