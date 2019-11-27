// @flow

import {
  KeyboardListener,
  NightingaleChart,
  PointSummaries,
  TitleSelector
} from '../../molecules'
import { Track } from '../../atoms'
import { colors } from '../../theme'
import {
  eligibleTitles,
  trackIds,
  milestones,
  milestoneToPoints
} from "../../../constants";
import type { Milestone, MilestoneMap, TrackId } from "../../../constants";
import React from "react";

type PathToolAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  focusedTrackId: TrackId
};

const hashToState = (hash: String): ?PathToolAppState => {
  // DEPTFILTERTODO we'd need to add some sort of department designation to the hash
  if (!hash) return null;
  const result = defaultState();
  const hashValues = hash.split("#")[1].split(",");
  if (!hashValues) return null;
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]));
  });
  if (hashValues[10]) result.name = decodeURI(hashValues[10]);
  if (hashValues[11]) result.title = decodeURI(hashValues[11]);
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

const emptyState = (): PathToolAppState => {
  return {
    name: "",
    title: "",
    milestoneByTrack: {
      COLLABORATION: 0,
      EXCELLENCE: 0,
      LEADERSHIP: 0,
      GROWTH: 0,
      EVANGELISM: 0
    },
    focusedTrackId: "EXCELLENCE"
  };
};

const defaultState = (): PathToolAppState => {
  // DEPTFILTERTODO need to add a default department?
  return {
    name: "[Enter Name]",
    title: "Product Designer",
    milestoneByTrack: {
      COLLABORATION: 1,
      EXCELLENCE: 2,
      ADVOCACY: 3,
      INFLUENCE: 4,
      IMPACT: 5
    },
    focusedTrackId: "EXCELLENCE"
  };
};

const stateToHash = (state: PathToolAppState) => {
  // DEPTFILTERTODO add filter here?
  if (!state || !state.milestoneByTrack) return null;
  const values = trackIds
    .map(trackId => state.milestoneByTrack[trackId])
    .concat(encodeURI(state.name), encodeURI(state.title));
  return values.join(",");
};

type Props = {};

class PathTool extends React.Component<Props, PathToolAppState> {
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
          body {
            margin: 0;
          }
          body,
          input,
          textarea,
          select,
          button {
            font-family: 'Source Sans Pro', Tahoma, 'Trebuchet MS', sans-serif;
          }
          main {
            width: 100%;
            margin: 0 auto;
          }
          .name-input {
            border: none;
            background: #f7f8f9;
            display: block;
            border-bottom: 2px solid #f7f8f9;
            font-size: 3rem;
            line-height: 40px;
            font-weight: bold;
            width: 22ch;
            margin-bottom: 10px;
          }
          .url-input {
            margin: 2rem;
            width: 80%;
          }
          .name-input:hover,
          .name-input:focus {
            border-bottom: 2px solid #e8e8e7;
            outline: 0;
          }
          a {
            color: #888;
            text-decoration: none;
          }
        `}</style>
        <header
          style={{
            background: `${colors['neutral9']}`,
            padding: '7rem 0 1rem',
            width: '100%',
          }}
        >
          <div
            style={{
              justifyContent: 'space-between',
              display: 'flex',
              maxWidth: '64rem',
              margin: '0 auto 2rem',
            }}
          >
            <form>
              <input
                type="text"
                className="name-input"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                placeholder="Name"
                onFocus={e => e.target.select()}
              />
              {/* onClick={e => e.target.select()} */}
              <TitleSelector
                milestoneByTrack={this.state.milestoneByTrack}
                currentTitle={this.state.title}
                setTitleFn={title => this.setTitle(title)}
              />
            </form>
            <PointSummaries milestoneByTrack={this.state.milestoneByTrack} />
          </div>
          <div
            style={{
              background: `${colors['neutral8']}`,
              width: '100%',
              margin: '0 auto',
            }}
          />
        </header>
        <div style={{ display: 'flex', width: '64rem', margin: '0 auto 30vh' }}>
          <div style={{ display: 'table', position: 'sticky', top: '1rem' }}>
            <NightingaleChart
              department="CO"
              milestoneByTrack={this.state.milestoneByTrack}
              focusedTrackId={this.state.focusedTrackId}
              handleTrackMilestoneChangeFn={(track, milestone) =>
                this.handleTrackMilestoneChange(track, milestone)
              }
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
            <div
              style={{
                display: 'flex',
                marginLeft: '-45px',
                textAlign: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ flex: 1, color: `${colors['neutral5']}` }}>
                Learn how to use this tool:{' '}
                <a
                  href="https://liferay.design/handbook/grow/career-paths/individual-contributor/"
                  target="_blank"
                  style={{ color: `${colors['primary']}`, fontWeight: 'bold' }}
                >
                  Grow at Liferay
                </a>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, margin: '6rem 0 0 4rem' }}>
            <Track
              milestoneByTrack={this.state.milestoneByTrack}
              trackId={this.state.focusedTrackId}
              handleTrackMilestoneChangeFn={(track, milestone) =>
                this.handleTrackMilestoneChange(track, milestone)
              }
            />
          </div>
        </div>
      </main>
    )
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

export default PathTool;
