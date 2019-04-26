import React from 'react'
import PropTypes from 'prop-types'
import { getCurrentTime } from '../../utils/formatDate'
import createClasses from '../../utils/classes'

const buildDataAttributes = (attributes = {}) => {
  const value = {}
  Object.keys(attributes).forEach((name) => {
    value[`data-${name}`] = attributes[name]
  })
  return value
}

const Basic = ({
  title, start, end, style, classes, dataSet, tooltip, icon
}) => (
  <div
    className={createClasses('rt-element', classes)}
    style={style}
    {...buildDataAttributes(dataSet)}
  >
    <div className="rt-element__content" aria-hidden="true">
      <span className="rt-element__title">{ title }</span>
      { icon }
    </div>
    <div className="rt-element__tooltip">
      {
        tooltip
        // eslint-disable-next-line react/no-danger
        ? tooltip : (
          <div>
            <div>{title}</div>
            <div><strong>开始时间</strong> {getCurrentTime(start)}</div>
            <div><strong>结束时间</strong> {getCurrentTime(end)}</div>
          </div>
        )
      }
    </div>
  </div>
)

Basic.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  style: PropTypes.shape({}),
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  dataSet: PropTypes.shape({}),
  tooltip: PropTypes.element
}

export default Basic
