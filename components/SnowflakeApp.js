// @flow

import TrackSelector from "../components/TrackSelector";
import NightingaleChart from "../components/NightingaleChart";
import KeyboardListener from "../components/KeyboardListener";
import Track from "../components/Track";
import Wordmark from "../components/Wordmark";
import LevelThermometer from "../components/LevelThermometer";
import {
  eligibleTitles,
  trackIds,
  milestones,
  milestoneToPoints
} from "../constants";
import PointSummaries from "../components/PointSummaries";
import type { Milestone, MilestoneMap, TrackId } from "../constants";
import React from "react";
import TitleSelector from "../components/TitleSelector";

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  focusedTrackId: TrackId
};

const hashToState = (hash: String): ?SnowflakeAppState => {
  if (!hash) return null;
  const result = defaultState();
  const hashValues = hash.split("#")[1].split(",");
  if (!hashValues) return null;
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]));
  });
  if (hashValues[16]) result.name = decodeURI(hashValues[16]);
  if (hashValues[17]) result.title = decodeURI(hashValues[17]);
  return result;
};

const coerceMilestone = (value: number): Milestone => {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch (value) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    default:
      return 0;
  }
};

const emptyState = (): SnowflakeAppState => {
  return {
    name: "",
    title: "",
    milestoneByTrack: {
      RESEARCH: 0,
      ENGINEERING: 0,
      INTERACTION: 0,
      STRATEGY: 0,
      VISUAL: 0,
      COLLABORATION: 0,
      EXCELLENCE: 0,
      LEADERSHIP: 0,
      GROWTH: 0,
      EVANGELISM: 0
    },
    focusedTrackId: "RESEARCH"
  };
};

const defaultState = (): SnowflakeAppState => {
  return {
    name: "Cersei Lannister",
    title: "Staff Engineer",
    milestoneByTrack: {
      RESEARCH: 1,
      ENGINEERING: 2,
      INTERACTION: 3,
      STRATEGY: 2,
      VISUAL: 4,
      COLLABORATION: 1,
      EXCELLENCE: 1,
      LEADERSHIP: 4,
      GROWTH: 3,
      EVANGELISM: 2
    },
    focusedTrackId: "RESEARCH"
  };
};

const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null;
  const values = trackIds
    .map(trackId => state.milestoneByTrack[trackId])
    .concat(encodeURI(state.name), encodeURI(state.title));
  return values.join(",");
};

type Props = {};

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props);
    this.state = emptyState();
  }

  componentDidUpdate() {
    const hash = stateToHash(this.state);
    if (hash) window.location.replace(`#${hash}`);
  }

  componentDidMount() {
    const state = hashToState(window.location.hash);
    if (state) {
      this.setState(state);
    } else {
      this.setState(defaultState());
    }
  }

  render() {
    return (
      <main>
        <style jsx global>{`
          body,
          input,
          textarea,
          select,
          button {
            font-family: "Source Sans Pro";
          }
          main {
            width: 960px;
            margin: 0 auto;
          }
          .name-input {
            border: none;
            display: block;
            border-bottom: 2px solid #fff;
            font-size: 30px;
            line-height: 40px;
            font-weight: bold;
            width: 380px;
            margin-bottom: 10px;
          }
          .name-input:hover,
          .name-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
          }
          a {
            color: #888;
            text-decoration: none;
          }
        `}</style>
        <div style={{ margin: "19px auto 0", width: 142 }}>
          <a href="https://liferay.design/" target="_blank">
            <Wordmark />
          </a>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <form>
              <input
                type="text"
                className="name-input"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                placeholder="Name"
              />
              <TitleSelector
                milestoneByTrack={this.state.milestoneByTrack}
                currentTitle={this.state.title}
                setTitleFn={title => this.setTitle(title)}
              />
            </form>
            <NightingaleChart
              milestoneByTrack={this.state.milestoneByTrack}
              focusedTrackId={this.state.focusedTrackId}
              handleTrackMilestoneChangeFn={(track, milestone) =>
                this.handleTrackMilestoneChange(track, milestone)
              }
            />
            <TrackSelector
              milestoneByTrack={this.state.milestoneByTrack}
              focusedTrackId={this.state.focusedTrackId}
              setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)}
            />
            <KeyboardListener
              selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
              selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
              increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(
                this,
                1
              )}
              decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(
                this,
                -1
              )}
            />
          </div>
          <div style={{ flex: 0 }}>
            <PointSummaries milestoneByTrack={this.state.milestoneByTrack} />
            <LevelThermometer milestoneByTrack={this.state.milestoneByTrack} />
            <Track
              milestoneByTrack={this.state.milestoneByTrack}
              trackId={this.state.focusedTrackId}
              handleTrackMilestoneChangeFn={(track, milestone) =>
                this.handleTrackMilestoneChange(track, milestone)
              }
            />
          </div>
        </div>
        <div style={{ display: "flex", paddingBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            Made with ❤️ by{" "}
            <a href="https://medium.engineering" target="_blank">
              Medium Eng
            </a>
            . Learn about the{" "}
            <a
              href="https://medium.com/s/engineering-growth-framework"
              target="_blank"
            >
              growth framework
            </a>
            . Get the{" "}
            <a href="https://github.com/Medium/snowflake" target="_blank">
              source code
            </a>
            . Read the{" "}
            <a href="https://medium.com/p/85e078bc15b7" target="_blank">
              terms of service
            </a>
            .
          </div>
        </div>
      </main>
    );
  }

  handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {
    const milestoneByTrack = this.state.milestoneByTrack;
    milestoneByTrack[trackId] = milestone;

    const titles = eligibleTitles(milestoneByTrack);
    const title =
      titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title;

    this.setState({ milestoneByTrack, focusedTrackId: trackId, title });
  }

  shiftFocusedTrack(delta: number) {
    let index = trackIds.indexOf(this.state.focusedTrackId);
    index = (index + delta + trackIds.length) % trackIds.length;
    const focusedTrackId = trackIds[index];
    this.setState({ focusedTrackId });
  }

  setFocusedTrackId(trackId: TrackId) {
    let index = trackIds.indexOf(trackId);
    const focusedTrackId = trackIds[index];
    this.setState({ focusedTrackId });
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId];
    let milestone = prevMilestone + delta;
    if (milestone < 0) milestone = 0;
    if (milestone > 5) milestone = 5;
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone);
  }

  setTitle(title: string) {
    let titles = eligibleTitles(this.state.milestoneByTrack);
    title = titles.indexOf(title) == -1 ? titles[0] : title;
    this.setState({ title });
  }
}

export default SnowflakeApp;
