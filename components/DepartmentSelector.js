// @flow

import React from 'react'
import { departments } from '../constants'
import type { MilestoneMap } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  currentDepartment: String,
  setDepartmentFn: (string) => void
}

class DepartmentSelector extends React.Component {
  render() {
    // const titles = eligibleTitles(this.props.milestoneByTrack)
    return <select value={this.props.currentDepartment} onChange={e => this.props.setDepartmentFn(e.target.value)}>
      <style jsx>{`
        select {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 20px;
          min-width: 300px;
        }
      `}</style>
      {departments.map(department => (
        <option key={label}>
          {label}
        </option>
      ))}
    </select>
  }
}

export default DepartmentSelector
