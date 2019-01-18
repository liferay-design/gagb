// @flow

import {
  pointsToLevels,
  milestoneToPoints,
  trackIds,
  totalPointsFromMilestoneMap
} from "../constants";
import type { MilestoneMap } from "../constants";
import React from "react";

type Props = {
  milestoneByTrack: MilestoneMap
};

class PointSummaries extends React.Component<Props> {
  render() {
    const totalPoints = totalPointsFromMilestoneMap(
      this.props.milestoneByTrack
    );

    let currentLevel, nextLevel;

    let pointsForCurrentLevel = totalPoints;
    while (!(currentLevel = pointsToLevels[pointsForCurrentLevel])) {
      pointsForCurrentLevel--;
    }

    let pointsToNextLevel = 1;
    while (!(nextLevel = pointsToLevels[totalPoints + pointsToNextLevel])) {
      pointsToNextLevel++;
      if (pointsToNextLevel > 135) {
        pointsToNextLevel = "N/A";
        break;
      }
    }

    const blocks = [
      {
        label: "Points",
        value: totalPoints
      },
      {
        label: "Level",
        value: currentLevel
      },
      {
        label: "To Level Up",
        value: pointsToNextLevel
      }
    ];

    return (
      <div>
        <style jsx>{`
          .point-summary {
            border-radius: 50%;
            width: 6rem;
            height: 6rem;
            background: #fff;
          }
          .point-summary-label {
            font-size: 12px;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            opacity: 0.5;
            transform: translate(-4rem, 2.4rem) rotate(-90deg);
          }
          .point-summary-value {
            font-size: 3rem;
            font-weight: bold;
            line-height: 60px;
            text-align: center;
          }
        `}</style>
        <div
          style={{
            display: "flex",
            marginTop: "-12px",
            width: "400px",
            justifyContent: "space-between"
          }}
        >
          {blocks.map(({ label, value }, i) => (
            <div key={i} className="point-summary">
              <div className="point-summary-label">{label}</div>
              <div key={i} className="point-summary-value">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PointSummaries;
