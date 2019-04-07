// @flow
import * as d3 from 'd3'
import { tracks } from './tracks'

exports.tracks = tracks

export type TrackId =
  | 'RESEARCH'
  | 'ENGINEERING'
  | 'INTERACTION'
  | 'STRATEGY'
  | 'VISUAL'
  | 'ADVOCACY'
  | 'IMPACT'
  | 'COLLABORATION'
  | 'INFLUENCE'
  | 'EXCELLENCE'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  RESEARCH: Milestone,
  ENGINEERING: Milestone,
  INTERACTION: Milestone,
  STRATEGY: Milestone,
  VISUAL: Milestone,
  ADVOCACY: Milestone,
  IMPACT: Milestone,
  COLLABORATION: Milestone,
  INFLUENCE: Milestone,
  EXCELLENCE: Milestone,
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0:
      return 0
    case 1:
      return 1
    case 2:
      return 3
    case 3:
      return 6
    case 4:
      return 12
    case 5:
      return 20
    default:
      return 0
  }
}

export const pointsToLevels = {
  '0': '0',
  '8': '1',
  '24': '2',
  '40': '3',
  '80': '4',
  '108': '5',
}

export const maxLevel = 135

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

const tracks_old: Tracks = {
  RESEARCH: {
    displayName: 'Research',
    category: 'A',
    description:
      'User research focuses on understanding user behaviors, needs, and motivations through observation techniques, task analysis, and other feedback methodologies',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Maintains the participant pool and other organizational data resources in order to familiarize themselves with the organizational deliverables and structure. ',
          'Engage team members in a collaborative effort to build personas, customer journey maps, service blueprints, etc.',
          'Shadow M2 and M3 researchers and assist during qualitative research activities.Share their analysis of the data to design and product teams.',
          'Maintaining Participant Pool, communicating with participants',
          'Develop and scope clear research proposals and projects',
          'Basic research tasks like user testing, recruiting, simple reporting, and interview note-taking',
          'Quantitative data collection and analysis, contributing to research database',
          'Synthesizing findings in various artifacts such as personas, journey maps, mental models, usability reports',
          'Starts with prepackaged questions or predefined methods and executes on defined units of work.',
        ],
      },
      {
        summary: 'Level 2: Build',
        signals: [
          'Work with other designers/PMs/Stakeholders to test proposals and recommend features, functionality, and specific interactions based on analysis of business goals and user needs. ',
          'Lead Interview debrief',
          'Observation',
          'Quantitative data collection and analysis(use of mathematical models)',
          'Executing the prescribed research methods to grasp the outcomes each method yields with minimal supervision.Objectively report and share their evidence based recommendations.',
          'Workshop facilitation',
          'Sell to internal stakeholders',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Mastered the execution and yields of the methods outlined above.Develop, execute, and adjust research plans based on the acute needs of their project. ',
          'Work with product managers(and other stakeholders) and take ownership of product direction.What do we need to know? Why is this important to us? When should we execute?',
          'Report findings and actionable insights.Drive the direction of the product based on evidence.',
          'Data collection(Quantitative, Qualitative)',
          'Complex reporting',
          'Workshop facilitation to align understanding of customer data',
          'Synthesizing findings in various artifacts such as personas, journey maps, mental models, usability reports',
          'Present research insights in a digestible story at different levels of depth depending on the audience',
          'Framing research findings in greater context, leverage storytelling to create buy-in',
          'Foster adoption of research db ',
        ],
      },
      {
        summary: 'Level 4: Strategize',
        signals: [
          'Foster broad alignment of research with the organization’s strategic priorities.Understanding the ‘whys’ of what should be known with actions to match. ',
          'As an M4 researcher, you want to be able to make use of your research on a program level.It is your responsibility to make sure data is useful and enable usage for those who need it.If the research data does not meet those requirements, you work improve the quality of the data and accessibility in the organization.There is a heavy emphasis on COLLABORATION and mentorship to think on the program level. ',
          'Disseminating knowledge and alignment are your top priorities.',
          'Coordinate centralizing user research in to a database',
          'Wide audience communication',
          'Foster adoption of research db',
          'Product roadmap planning',
          'Program Design',
          'Industry comparison: Laura Kalbag',
        ],
      },
      {
        summary: 'Level 5: Architect',
        signals: [
          'You are a recognized, industry expert in user research.You will be responsible for program design to satisfy the needs of the entire organization and our users.As an M5 user researcher you have a strong understanding of how research impacts the bottom line and will be able to translate research programs directly in to strategic direction of the company’s vision. ',
          'Organizational roadmap planning',
          'Contribute to the strategic planning of the company',
          'Industry comparisons: Bill Buxton, Erika Hall',
        ],
      },
    ],
  },
  ENGINEERING: {
    displayName: 'Engineering',
    category: 'A',
    description:
      "Engineering in the context of design is the ability to understand technology, contribute to the engineering team's methods for problems and create tools to improve the design lifecycle.",
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Understands and experiences the engineering lifecycle of a product from ideation to market launch.',
          'Basic language / framework',
          'Knows design tokens',
          'Understands accessibility related things to implementation',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Builds html prototype, webpage',
          'Able to optimize his own code, helps others review',
          'Uses components and APIs',
          'Develops with accessibility in mind',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Create components',
          'Code review(not only structure but accessibility)',
          'Develops standalone site',
          'Understands react / angular / php / python',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Proven track record',
          'Create APIs',
          'Platform & technologist',
          'Create design systems',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Ideate Successful API',
          'Have successful, robust design systems used in the market',
          'Industry leader at the intersection of Design and Technology',
          'Industry comparisons: Colm Tuite, Brent Jackson, Jon Gold',
        ],
      },
    ],
  },
  INTERACTION: {
    displayName: 'Interaction',
    category: 'A',
    description:
      'Interaction Design combines Usability, Information Architecture and other disciplines to deliver easy to use products.',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'A supporting - level player who is honing their craft and working to understand organizational context.',
          'Familiar with processes and theory of interaction design:',
          'Apply heuristics',
          'Deal with basic requirement with review from an higher level designer',
          'Apply theory to improve existing interfaces',
          'Know and use of Design System',
          'Able to differentiate web from mobile and the different requirements for each, including the review of platform guidelines.',
          'Knows what accessibility is about but hasn’t yet started to care about it.',
          'Explore best practices for common design problems; solutions are solid, though not novel',
          "Solve specific function- level problems (e.g., 'add to shopping cart')",
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'An established performer with strong communication skills who proactively builds relationships',
          'Able to contribute on shipped projects',
          'Able to contribute to Design System',
          'Ability to analyse and solve accessibility problems.',
          "Emerging recognition that it's not all about design, but how design contributes to a broader goal; recognizes business goals and technical constraints",
          'Strong and capable engagement in standard design processes',
          'Confident in applying best practices to common design problems; solutions are solid, not novel',
          'Given specific product capabilities that need to be solved(e.g., Checkout process)',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'A high - level performer with strong relationships and the ability to lead projects',
          'Expertise, process, explain rationale, cross-functional',
          'Contributed to multiple shipped products',
          'Develops the process / approach for tackling a design problem, using known methods; anticipates problems',
          'Begins going beyond best practices',
          'Clarifies success metrics and ties efforts toward delivering business value',
          'Leads the solution of a product area; connects that to broader product vision(e.g, product page and purchase experience)',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'An organized leader and performer who pushes convention and drives change',
          'Leads the delivery of shipped products; Delivered successful work at the scope of product areas',
          'Develops the process / approach for tackling a design problem, using known methods; anticipates problems; develops facilitation skills to engage cross - functional teams',
          'Begins to realize the power of problem - framing, establishing new starting points that lead to new kinds of solutions',
          'Leading the solution of undefined problem spaces(e.g.“How do people complete a transaction?”)',
          "Uses understanding of impact and success metrics to focus and re-prioritize their and their team's efforts; Emerging understanding of broader organizational context and goals; ",
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Frames and solves hard problems; has driven innovative efforts that uncovered new value with new kinds of experiences; presents company as an industry leader in design',
          'Working with partners and stakeholders, begins making real change in how the company approaches its business; Articulates vision for the team that excites and inspires leaders and partners',
          "Reframes company - wide 'problems' to suggest new approaches for solving them.",
          "The Big Picture of an entire company's offerings, and how they integrate and coordinate",
          'Luke Wroeblewski, Jared Spool',
        ],
      },
    ],
  },
  Strategy: {
    displayName: 'Strategy',
    category: 'A',
    description:
      'Business strategy in the context of design is the ability to understand the market, contribute to business goals to solve problems and create tools to improve the design lifecycle. ',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Familiar with the market and company strategy. ',
          'Reading and sharing analyst and industry reports',
          'Can support the design strategy for one project/product',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Define metrics that correspond to business goals.',
          'Can build the design strategy for one project/product',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Relevant industry experience',
          'Can coordinate the design strategy for all products in the company',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Can envision the design strategy for all products in the company',
          'Discover new markets',
          'Proto-persona: Alen Fjalic, Bobby Ghoshal',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Demonstrated success in the market.',
          'Generating significant business value for the company in terms of new verticals, new sources of revenue, etc.',
          'Designer-founders: Tom Kelly, Clark Vandenberg, Des Traynor, Brian Chesky',
        ],
      },
    ],
  },
  Visual: {
    displayName: 'Visual',
    category: 'A',
    description:
      'Visual design shapes the product experience through visual artifacts like illustrations, photography, typography, color and more to improve the usability of products.',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Strong graphic design foundation: grid, typo, color definition',
          'Have a strong visual background in print or digital media, advertising, illustration, fine arts, architecture, motion, film, etc',
          'Becoming familiar with the limitations and requirements of designing in products and digital scenarios, knowledge and familiarity of designing within systems',
          'Creating visual components(motion, icons, illustration, etc) within an established system',
          'Applying the visual layer for products or projects',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Creating libraries of visual components for new and established systems',
          'Designing the complete visual layer at an individual project or product level',
          'Strong understanding of interaction principles(accessibility, usability) and able to thrive within those constraints',
          'Deep understanding of brand and applying in a product',
          'Able to synthesize business strategy with a visual direction',
          'Creating and defining new brands for products or projects',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Coordinating visual strategy for all products',
          'Leading the visual direction for products across multiple teams',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: ['Leading visuals at an organizational level'],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Well-known in the industry with successful products in the market, creating and leading the visual standard, creating trends',
          'Industry comparisons: Tobias Van Schneider, Mike(Creative Mints)',
        ],
      },
    ],
  },
  ADVOCACY: {
    displayName: 'ADVOCACY',
    category: 'B',
    description:
      'Shares the right amount of information with the right people, at the right time, and listens effectively',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Communicates project status clearly and effectively',
          'Collaborates with others with empathy',
          'Asks for help at the appropriate juncture',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Practises active listening and suspension of attention',
          'Ensures stakeholders are aware of current blockers',
          'Chooses the appropriate tools for accurate and timely communication',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Resolves communication difficulties between others',
          'Anticipates and shares schedule deviations in plenty of time',
          'Manages project stakeholder expectations effectively',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Communicates project risk and tradeoffs skillfully and with nuance',
          'Contextualizes and clarifies ambiguous direction and strategy for others',
          'Negotiates resourcing compromises with other teams',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Defines processes for clear communication for the entire team',
          'Shares the right amount of information with the right people, at the right time',
          'Develops and delivers plans to execs, the board, and outside investors',
        ],
      },
    ],
  },
  IMPACT: {
    displayName: 'IMPACT',
    category: 'B',
    description:
      'Embodies and promotes practices to ensure excellent quality products and services',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Tests new code thoroughly, both locally, and in production once shipped',
          'Writes tests for every new feature and bug fix',
          'Writes clear comments and documentation',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Refactors existing code to make it more testable',
          'Adds tests for uncovered areas',
          'Deletes unnecessary code and deprecates proactively when safe to do so',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Implements systems that enable better testing',
          'Gives thoughtful code reviews as a domain expert',
          'Adds tooling to improve code quality',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Builds systems so as to eliminate entire classes of programmer error',
          'Focuses the team on quality with regular reminders',
          'Coordinates Watch priorities and projects',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Defines policies for the engineering org that encourage quality work',
          'Identifies and eliminates single points of failure throughout the organization',
          'Secures time and resources from execs to support great quality',
        ],
      },
    ],
  },
  COLLABORATION: {
    displayName: 'COLLABORATION',
    category: 'B',
    description:
      'Collaboration and communication involve being able to read the vast number of verbal and nonverbal cues that we all use to communicate our ideas and emotions.  People need to learn to build shared understanding, negotiate outcomes, and cultivate trust to work together to solve the problems that no one can solve alone',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Employee is expected to Communicates and collaborate effectively with the team, colleagues, and stakeholders.',
          'Helping others as they can, giving and receiving feedback effectively(time & manner).',
          'Attending and helping to conduct Design Critiques Session',
          'Helping with the application of methods to increase the C & C effectively in the team.',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Proposing, and moving methods to increase the C & C effectively in the team.',
          'Proactively providing  feedback to others.',
          'Consistently providing high quality work and feedback',
          'Help M1 to grow in Communication & Collaboration',
          'Has excellent ideas to grow the C & C in the Product Team.',
          'Sharing Knowledge(blog entries, new methods, workshops, new process or techniques, etc)',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Coming up with new techniques or ways to increase the C & C effectively of  teams.',
          'Is able to overcome frustration with organizational or C & C limitations to drive their ideas to implementation',
          'Proven by execution',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Is spreading his / her knowledge(Continuously & Consistently) to the outside world(conferences, workshops, meetups). ',
          'Proven track record of defining and executing new techniques across organizations.',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Person that influences the industry, recognized as a “thought leader” in C & C.',
          'Architecting Community / Industries initiatives.',
          'Aaron Walter',
        ],
      },
    ],
  },
  INFLUENCE: {
    displayName: 'INFLUENCE',
    category: 'B',
    description: '[TODO:description for influence]',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Someone with little or no professional experience in the track.',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Employee with mature knowledge to build and create, starting to help others to grow. ',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Employee who can lead teams or projects, driving culture and processes at Liferay.',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Employee who has proven success internally and, starting to become noticed in the industry.',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Helping to shape the industry. We try to take the best designer in the market doing it. With this we set the bar for expectations.',
        ],
      },
    ],
  },
  EXCELLENCE: {
    displayName: 'EXCELLENCE',
    category: 'B',
    description:
      'Producing excellence starts with paying attention to details, both in what you do and in what others do. This track measures your consistent ability to produce high quality outcomes in your daily work consistently.',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Employee is expected to apply best practices towards excellence for Liferay products',
          'Work with established standards(coding / design foundations for the company)',
          'Helping others as they can, giving and receiving feedback effectively',
          'Consistently following guidelines, increasing in autonomy',
          'Pair work',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Employee with mature knowledge to build and create, starting to help others to grow',
          'Person is able to build excellence in the company using technical skills and following the stated standards',
          'Consistently providing high quality work and feedback',
          'Help others grow in excellence',
          'Provides suggestions and carries out improvements that increase the level of excellence in a product, project, or team.',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Employee who can Influence people, encouraging them to deliver excellence, driving culture and processes at Liferay.',
          'Coming up with new techniques or ways to improve the excellence of the products and contributes to applying them',
          'This is demonstrated through conscious proposal, comfortable role in actions, continuous delivery and improvement and consistent deployment of the technique',
          'Is able to overcome frustration with organizational or technical limitations to drive their ideas to implementation',
          'Proven by execution over time',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Employee who has achieved or generated significant business value for the company in terms of Products, etc.',
          'Shipped excellent and successful projects within the company',
          'Is spreading his/her knowledge (Continuously & Consistently) to the outside world (conferences, workshops, meetups). ',
          'Proven track record of defining and executing new techniques across organizations.',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Person that influences the industry, recognized as a “thought leader” in their field.',
          'Ferrán Adrià, Jiro Ono',
        ],
      },
    ],
  },
}

// console.log(JSON.stringify(tracks, null, 2))

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

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
  .range(['#0b5fff', '#7d8b94'])

export const titles = [
  { label: 'Add points to see titles', minPoints: 0, maxPoints: 0 },
  { label: 'Associate Product Designer', minPoints: 9, maxPoints: 16 },
  { label: 'Intern', minPoints: 1, maxPoints: 8 },
  { label: 'Product Designer', minPoints: 17, maxPoints: 35 },
  { label: 'Senior Product Designer', minPoints: 36, maxPoints: 57 },
  { label: 'Senior Product Designer, Manager', minPoints: 36, maxPoints: 57 },
  {
    label: 'Senior Product Designer, Manager [Region]',
    minPoints: 36,
    maxPoints: 57,
  },
  { label: 'Staff Product Designer', minPoints: 58, maxPoints: 89 },
  { label: 'Staff Product Designer, Manager', minPoints: 58, maxPoints: 89 },
  {
    label: 'Staff Product Designer, Manager [Region]',
    minPoints: 58,
    maxPoints: 89,
  },
  { label: 'Principal Product Designer', minPoints: 90 },
]

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
