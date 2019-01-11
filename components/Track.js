// @flow

import { tracks, milestones, categoryColorScale } from "../constants";
import React from "react";
import type { MilestoneMap, TrackId, Milestone } from "../constants";

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
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          table {
            border-spacing: 8px;
          }
          td {
            padding: 8px;
            background: #f7f8f9;
            cursor: pointer;
          }
          ul {
            line-height: 1.5em;
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
                              onClick={() =>
                                this.props.handleTrackMilestoneChangeFn(
                                  this.props.trackId,
                                  milestone
                                )
                              }
                              style={{
                                border: `4px solid ${
                                  milestone === currentMilestoneId
                                    ? "#004AD7"
                                    : isMet
                                    ? categoryColorScale(track.category)
                                    : "#f7f8f9"
                                }`,
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
              {/* <h4>Example behaviors:</h4> */}
              <ul>
                {currentMilestone.signals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
              {/* <h4>Example tasks:</h4>
              <ul>
                {currentMilestone.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul> */}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Track;
