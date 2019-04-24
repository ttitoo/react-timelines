import React from 'react'
import PropTypes from 'prop-types'

import { getCurrentTime } from '../../../utils/formatDate'
import Marker from './'

const PointerMarker = ({
  time, date, visible, highlighted
}) => (
  <Marker
    modifier="pointer"
    x={time.toX(date)}
    visible={visible}
    highlighted={highlighted}
  >
    <div>
      <div><strong>{getCurrentTime(date)}</strong></div>
    </div>
  </Marker>
)

PointerMarker.propTypes = {
  time: PropTypes.shape({}).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  visible: PropTypes.bool,
  highlighted: PropTypes.bool
}

export default PointerMarker
