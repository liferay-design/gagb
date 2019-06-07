// @flow

import { milestones, categoryColorScale } from "../../../constants";
import React from "react";
import type { MilestoneMap, TrackId, Milestone } from "../../../constants";
import { trackIds, tracks } from "../../../constants/tracks";

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
};

class Track extends React.Component<Props> {
  render() {
    const track = tracks[this.props.trackId];
    const currentMilestoneId = this.props.milestoneByTrack[this.props.trackId];
    const currentMilestone = track.milestones[currentMilestoneId - 1];
    return (
      <div>
        {track ? (
          <div className="track">
            <style jsx>{`
              div.track {
                margin: 0 0 20px 0;
                padding-bottom: 20px;
              }
              h2 {
                margin: 0 0 10px 0;
              }
              p.track-description {
                margin-top: 0;
                padding-bottom: 20px;
                background-image: linear-gradient(
                  to left,
                  #e8e8e7 60%,
                  #fff 0%
                );
                background-position: bottom;
                background-size: 10px 1px;
                background-repeat: repeat-x;
              }
              table {
                border-spacing: 8px;
              }
              td {
                padding: 8px;
                background: #f7f8f9;
              }
              ul {
                line-height: 1.5em;
                padding-left: 1.5rem;
              }
              li {
                margin-bottom: 0.4rem;
              }
              .level:nth-of-type(1) {
                background: transparent !important;
              }
            `}</style>
            <h2>{track.displayName}</h2>
            <p className="track-description">{track.description}</p>
            <div style={{ display: "flex" }}>
              {currentMilestone ? (
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flex: 0,
                      justifyContent: "space-between"
                    }}
                  >
                    <h3 style={{ display: "inline" }}>
                      {currentMilestone.summary}
                    </h3>
                    <table style={{ flex: 0, alignSelf: "center" }}>
                      <tbody>
                        <tr>
                          {milestones
                            .slice()
                            // .reverse()
                            .map(milestone => {
                              const isMet = milestone <= currentMilestoneId;
                              return (
                                <td
                                  key={milestone}
                                  className="level"
                                  style={{
                                    background: isMet
                                      ? categoryColorScale(track.category)
                                      : undefined
                                  }}
                                />
                              );
                            })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul>
                    {currentMilestone.signals.map((signal, i) => (
                      <li key={i}>{signal}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Track;
