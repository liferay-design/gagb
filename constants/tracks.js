import type { TrackId, Track, Milestone, MilestoneMap } from '../constants'
import { tracks } from './generated-tracks'

console.log(JSON.stringify(tracks, null, 2))

exports.tracks = tracks

type Tracks = {|
  RESEARCH: Track,
  ENGINEERING: Track,
  INTERACTION: Track,
  STRATEGY: Track,
  VISUAL: Track,
  ADVOCACY: Track,
  IMPACT: Track,
  COLLABORATION: Track,
  INFLUENCE: Track,
  EXCELLENCE: Track,
|}

export const trackIds: TrackId[] = Object.keys(tracks)
