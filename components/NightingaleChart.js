// @flow

import React from "react";
import * as d3 from "d3";
import { trackIds, milestones, tracks, categoryColorScale } from "../constants";
import type { TrackId, Milestone, MilestoneMap } from "../constants";

const width = 540;
const arcMilestones = milestones.slice(1); // we'll draw the '0' milestone with a circle, not an arc.

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
};

class NightingaleChart extends React.Component<Props> {
  colorScale: any;
  radiusScale: any;
  arcFn: any;

  constructor(props: *) {
    super(props);

    this.colorScale = d3.scaleSequential(d3.interpolateWarm).domain([0, 5]);

    this.radiusScale = d3
      .scaleBand()
      .domain(arcMilestones)
      .range([0.16 * width, 0.45 * width])
      .paddingInner(0.4);

    this.arcFn = d3
      .arc()
      .innerRadius(milestone => this.radiusScale(milestone))
      .outerRadius(
        milestone => this.radiusScale(milestone) + this.radiusScale.bandwidth()
      )
      .startAngle(-Math.PI / trackIds.length)
      .endAngle(Math.PI / trackIds.length)
      .padAngle(Math.PI / 20)
      .padRadius(200)
      .cornerRadius(0);
  }
  // Original Math for Reference
  // constructor(props: *) {
  //   super(props);

  //   this.colorScale = d3.scaleSequential(d3.interpolateWarm).domain([0, 5]);

  //   this.radiusScale = d3
  //     .scaleBand()
  //     .domain(arcMilestones)
  //     .range([0.15 * width, 0.45 * width])
  //     .paddingInner(0.1);

  //   this.arcFn = d3
  //     .arc()
  //     .innerRadius(milestone => this.radiusScale(milestone))
  //     .outerRadius(
  //       milestone => this.radiusScale(milestone) + this.radiusScale.bandwidth()
  //     )
  //     .startAngle(-Math.PI / trackIds.length)
  //     .endAngle(Math.PI / trackIds.length)
  //     .padAngle(Math.PI / 200)
  //     .padRadius(0.45 * width)
  //     .cornerRadius(0);
  // }

  render() {
    const currentMilestoneId = this.props.milestoneByTrack[
      this.props.focusedTrackId
    ];
    return (
      <figure>
        <style jsx>{`
          figure {
            margin: 4rem 0;
          }
          svg {
            width: ${width}px;
            height: ${width}px;
            margin-left: ${`${width}` / -12}px;
          }
          .track-milestone {
            fill: #f7f8f9;
            cursor: pointer;
            overflow: visible;
          }
          .track-milestone-current {
            filter: url(#shadow);
            stroke: rgba(0, 0, 0, 0.16);
            stroke-width: 0;
          }
          .track-milestone:hover {
            fill: #c4cacb;
          }
          .label {
            transform: translate(0, -264), rotate(180);
          }
        `}</style>
        <svg>
          <defs>
            <filter id="shadow" x="-40%" width="180%" y="-40%" height="180%">
              <feDropShadow
                dx="0"
                dy="0"
                floodColor="#0b5fff"
                floodOpacity="1"
                stdDeviation="4"
              />
            </filter>
          </defs>
          <g transform={`translate(${width / 2},${width / 2}) rotate(-126)`}>
            {trackIds.map((trackId, i) => {
              const isCurrentTrack = trackId == this.props.focusedTrackId;
              return (
                <g
                  key={trackId}
                  transform={`rotate(${(i * 360) / trackIds.length})`}
                >
                  <text
                    className={"label"}
                    transform={`translate(0,-260)`}
                    style={{
                      fill: categoryColorScale(tracks[trackId].category),
                      fontWeight: "900",
                      textTransform: "uppercase",
                      letterSpacing: "1.2px",
                      fontSize: "12px",
                      opacity: "0.8"
                    }}
                    textAnchor="middle"
                  >
                    {tracks[trackId].displayName}
                  </text>
                  {arcMilestones.map(milestone => {
                    const isCurrentMilestone =
                      isCurrentTrack && milestone == currentMilestoneId;
                    const isMet =
                      this.props.milestoneByTrack[trackId] >= milestone ||
                      milestone == 0;
                    return (
                      <path
                        key={milestone}
                        className={
                          "track-milestone " +
                          (isMet ? "is-met " : " ") +
                          (isCurrentMilestone ? "track-milestone-current" : "")
                        }
                        onClick={() =>
                          this.props.handleTrackMilestoneChangeFn(
                            trackId,
                            milestone
                          )
                        }
                        d={this.arcFn(milestone)}
                        style={{
                          fill: isMet
                            ? categoryColorScale(tracks[trackId].category)
                            : undefined
                        }}
                      />
                    );
                  })}
                  <circle
                    r="8"
                    cx="0"
                    cy="-68"
                    style={{
                      fill: categoryColorScale(tracks[trackId].category)
                    }}
                    className={
                      "track-milestone " +
                      (isCurrentTrack && !currentMilestoneId
                        ? "track-milestone-current"
                        : "")
                    }
                    onClick={() =>
                      this.props.handleTrackMilestoneChangeFn(trackId, 0)
                    }
                  />
                </g>
              );
            })}
          </g>
        </svg>
      </figure>
    );
  }
}

export default NightingaleChart;
