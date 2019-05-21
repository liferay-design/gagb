import type { TrackId, Track, Milestone, MilestoneMap } from '../constants'
import { tracks } from './generated-tracks'

// console.log(JSON.stringify(tracks, null, 2))

exports.tracks = tracks

export const trackIds: TrackId[] = Object.keys(tracks)
