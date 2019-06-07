// @flow

import React from "react";
import * as d3 from "d3";
import { milestones, categoryColorScale } from "../../../constants";
import { trackIds as unfilteredTrackIds, tracks } from "../../../constants/tracks";
import type { TrackId, Milestone, MilestoneMap } from "../../../constants";
import { filter, forEach } from 'lodash'
import { colors } from '../../theme'

function filterTracksByDepartment(department) 
    {
      for (const key in tracks) {
      const value = tracks[key]

      if (value.department !== department && value.department !== 'TR') {
        delete tracks[key];
      }
    }
  }
  
function filterTrackIds()
{
  return   unfilteredTrackIds.filter((id) => {
      let tracksHasDisplayName = false
    
      forEach(tracks, function(value, key) {
          if (value.displayName === id) {
            tracksHasDisplayName = true
          }
      })
    
      return tracksHasDisplayName
    })}

const width = 540;
const arcMilestones = milestones.slice(1); // we'll draw the '0' milestone with a circle, not an arc.

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void,
}

class NightingaleChart extends React.Component<Props> {
  colorScale: any;
  radiusScale: any;
  arcFn: any;

  constructor(props: *) {
    super(props);

    filterTracksByDepartment(this.props.department)
    this.trackIds = filterTrackIds()

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
      .startAngle(-Math.PI / this.trackIds.length)
      .endAngle(Math.PI / this.trackIds.length)
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
  //     .startAngle(-Math.PI / this.trackIds.length)
  //     .endAngle(Math.PI / this.trackIds.length)
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
            position: relative;
          }
          #chart {
            width: ${width}px;
            height: ${width}px;
            margin-left: ${`${width}` / -12}px;
          }

          #overlay {
            width: ${`${width}` * 1.3}px;
            height: ${`${width}` * 1.3}px;
            top: -81px;
            left: -126px;
            position: absolute;
            z-index: -1;
          }
          .track-milestone {
            fill: ${colors['neutral9']};
            cursor: pointer;
            overflow: visible;
          }
          .track-milestone-current {
            filter: url(#shadow);
            stroke: rgba(0, 0, 0, 0.16);
            stroke-width: 0;
          }
          .track-milestone:hover {
            fill: ${colors['neutral7']};
          }
          .label {
            transform: translate(0, -264), rotate(180);
          }
        `}</style>
        <svg viewBox="-13 -13 126 126" id="overlay">
          <g id="labels">
            <path
              id="skillPath"
              fill="none"
              d="M50,0c29.12,0,50,19.59,50,50s-21.07,50-50,50S0,79.21,0,50,20.74,0,50,0"
            />
            <text
              style={{
                fontWeight: '900',
                textTransform: 'uppercase',
                fontSize: '12px',
                opacity: '0.08',
              }}
            >
              <textPath
                startOffset="60.5%"
                style={{ fill: `${colors['neutral5']}` }}
                xlinkHref="#skillPath"
              >
                Core Skills
              </textPath>
              <textPath
                startOffset="10.5%"
                style={{ fill: `${colors['[primary]']}` }}
                xlinkHref="#skillPath"
              >
                Product Design
              </textPath>
            </text>
          </g>
          {/* <g id="scale">
            <path id="line" stroke="none" d="M274 270 l171 -234" />
            <text
              x="56"
              style={{
                fontWeight: "400",
                fill: "#7d8b94",
                opacity: ".5",
                letterSpacing: "9"
              }}
            >
              <textPath xlinkHref="#line">0 1 2 3 4 5</textPath>
            </text>
          </g> */}
        </svg>
        <svg id="chart">
          <defs>
            <filter
              id="shadow"
              x="-40%"
              width="180%"
              y="-40%"
              height="180%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                floodColor={colors['primary']}
                floodOpacity="1"
                stdDeviation="4"
              />
            </filter>
          </defs>
          <circle r="270" cx="270" cy="270" fill="black" opacity="0" />
          <g
            transform={`translate(${width / 2},${width / 2}) rotate(-126)`}
          >
            {this.trackIds.map((trackId, i) => {
              const isCurrentTrack = trackId == this.props.focusedTrackId
              return (
                <g
                  key={trackId}
                  transform={`rotate(${(i * 360) / this.trackIds.length})`}
                >
                  <path
                    d="M-66.3-260.9l2.8,8.6c39.4-9.8,87.7-9.8,127.1,0l2.8-8.6C22.3-272.2-22.3-272.2-66.3-260.9z"
                    id="catLabelCurve"
                    fill="none"
                  />
                  <text
                    transform="translate(-2,4)"
                    className={'label'}
                    style={{
                      fill: categoryColorScale(tracks[trackId].department),
                      fontWeight: '900',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                      fontSize: '12px',
                      opacity: '0.8',
                    }}
                    textAnchor="middle"
                    // for 1, 8, 9, 10 (bottom row) x="214", else x="75"
                    // this is so the labels are easier to read
                    x={i > 1 && i < 7 ? '75' : '214'}
                  >
                    <textPath xlinkHref="#catLabelCurve">
                      {tracks[trackId].displayName}
                    </textPath>
                  </text>
                  {arcMilestones.map(milestone => {
                    const isCurrentMilestone =
                      isCurrentTrack && milestone == currentMilestoneId
                    const isMet =
                      this.props.milestoneByTrack[trackId] >= milestone ||
                      milestone == 0
                    return (
                      <path
                        key={milestone}
                        className={
                          'track-milestone ' +
                          (isMet ? 'is-met ' : ' ') +
                          (isCurrentMilestone
                            ? 'track-milestone-current'
                            : '')
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
                            ? categoryColorScale(tracks[trackId].department)
                            : undefined,
                        }}
                      />
                    )
                  })}
                  <circle
                    r="8"
                    cx="0"
                    cy="-68"
                    style={{
                      // strokeWidth: 2,
                      fill: categoryColorScale(tracks[trackId].department),
                    }}
                    className={
                      'track-milestone ' +
                      (isCurrentTrack && !currentMilestoneId
                        ? 'track-milestone-current'
                        : '')
                    }
                    onClick={() =>
                      this.props.handleTrackMilestoneChangeFn(trackId, 0)
                    }
                  />
                </g>
              )
            })}
          </g>
        </svg>
      </figure>
    )
  }
}

export default NightingaleChart;
