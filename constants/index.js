// @flow
import * as d3 from 'd3'
import { titles } from './titles'
import { trackIds, tracks } from './tracks'

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[],
  }[],
}

export const milestones = [0, 1, 2, 3, 4, 5]

// each milestone level is worth this many points
export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0:
      return 0
    case 1:
      return 1
    case 2:
      return 4
    case 3:
      return 8
    case 4:
      return 16
    case 5:
      return 32
    default:
      return 0
  }
}

// how many points it takes to reach a new level
export const pointsToLevels = {
  '0': '0',
  '8': '1',
  '16': '2',
  '32': '3',
  '56': '4',
  '96': '5',
}

export const maxLevel = 135


export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].department)
  return set
}, new Set())

// console.log(categoryIds)

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach(trackId => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(
      categoryId,
      currentPoints + milestoneToPoints(milestone)
    )
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (
  milestoneMap: MilestoneMap
): number =>
  trackIds
    .map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => sum + addend, 0)

export const categoryColorScale = d3
         .scaleOrdinal()
         .domain(categoryIds)
         .range(['#7d8b94', '#0b5fff', '#7d8b94'])


export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles
    .filter(
      title =>
        (title.minPoints === undefined || totalPoints >= title.minPoints) &&
        (title.maxPoints === undefined || totalPoints <= title.maxPoints)
    )
    .map(title => title.label)
}

export { tracks, trackIds, titles }
export type { Track, Trackid }
