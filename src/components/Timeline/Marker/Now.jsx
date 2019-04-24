import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Marker from './'
import { getCurrentTime } from '../../../utils/formatDate'

class NowMarker extends PureComponent {
  render() {
    const { now, time, visible } = this.props
    return (
      <Marker modifier="now" x={time.toX(now)} visible={visible}>
        <div>
          <div>当前时间</div>
          <strong>{getCurrentTime(now)}</strong>
        </div>
      </Marker>
    )
  }
}

NowMarker.propTypes = {
  time: PropTypes.shape({}).isRequired,
  visible: PropTypes.bool.isRequired,
  now: PropTypes.instanceOf(Date).isRequired
}

export default NowMarker
