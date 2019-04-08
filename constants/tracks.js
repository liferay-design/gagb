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

const old_tracks: Tracks = {
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
  INFLUENCE: {
    displayName: 'INFLUENCE',
    category: 'B',
    description:
      'Leadership skills are required to guide individuals, teams, or an entire organization to reach a shared goal. As the company grows and the number of people and teams increases, it’s important that some individuals assume additional responsibilities serving people and teams effectively.',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Embodies self-mastery and personal responsibility, takes initiative to serve the team.',
          'Starts delegating tasks',
          'Informally mentors individuals in an ad-hoc way',
          'Supports new hires',
          'Conveys knowledge of the right way to do things.',
          'Supporting  Design OKRs',
          'Executing  and leading other individual  to follow/pursue (roadmap, backlog, and Design direction).',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Is an example to many, mentors a few. Has some explicit responsibilities which requires ensuring other’s well-being, while delivering expected results.',
          'Leads a small team or project.',
          'Mentors people proactively, and guides people to realizations rather than providing the answer.',
          'Definition of the OKR´s for the designers',
          'Does one-to-ones with direct reports.',
          'Proactively building better processes for the team',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Assumes responsibility for the success of others.',
          'Is the primary manager of several people and proactively guides them to help them do a good job while being happy. Make them part of a team and help them grow. Always lead in a servant-mindedness way.',
          'Designer who can lead teams or projects, driving culture and processes at Liferay., being the primary manager of some of its members. Communicates with the manager of the rest to provide useful feedback. Mentors the whole team to deliver the best results. Helps the team grow.',
          'Define goals aligned with larger goals and effectively and collaboratively execute them.',
          'Focus on success of their people.',
          'Knows how to keep people engaged, empowered and letting them develop their skills',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Provides vision at an Organizational level. Assumes more complex responsibilities, such as leading a large or distributed team. ',
          'Caring for people at an organization level, helping shape the systems and influencing other departments',
          'Leader  who has proven success internally and, starting to become noticed in the industry.',
          'No longer directly in charge of the team, your plans affect how the team ultimately performs and develops',
          'Have bigger picture goals to manage from a strategic point of view.',
          'Mentor the direct leader',
          'Work with executive leadership to understand the long term goals and how your piece of the pie fits into the big picture',
          'Mentored by executive leadership to understand the expanse of the organization',
          'Ensures that all team members are delivering and feel part of the team.',
          'Leads a guild effectively.',
          'Organizes cost-effective trips that help strengthen relationships, resulting in better communication and collaboration.',
          'Does one-to-ones with direct reports and checks on the effectiveness of the one-to-ones they are having with theirs.',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Provides vision at an industry level, impacting all levels for many years, helping to shape the industry',
          'Mentor the Strategic leader',
          'Not only is able to manage people directly, but is able to guide some of them to be excellent managers as well.',
          'Decisions impact all levels, internally and externally',
          'Focus is far-reaching and long-reaching.  It’s not just about tomorrow; it’s about years in the future',
          'Successful career as proven Leader, managing multi-teams (products, countries, etc) in a diverse range of Companies.',
        ],
      },
    ],
  },
  ADVOCACY: {
    displayName: 'ADVOCACY',
    category: 'B',
    description:
      'The passionate education and coordination of people/principles/practices while respecting people’s needs and organizational goals.',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Represents Liferay well externally, interacting with customers, etc.',
          'Increase the interest of possible candidates to join Liferay',
          'Support activity or events where promote UX or Liferay specifically',
          'Occasional publication of blog entries, answers questions, etc',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Builds industry relationships and supports others’ initiatives',
          'Attends community, customer and/or industry events.',
          'Take an active part on 3rd party events, obtaining feedback actively and helping Liferay staff in promotion and recruiting tasks',
          'Help M1 to grow in Advocacy',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Leading advocacy initiatives internally and externally',
          'Coming up with new strategies or ways to lead Design Advocacy in teams.',
          'Able to overcome frustration with organizational or limitations to drive their ideas to implementation',
          'Regularly speaks at internal events',
          'Organizes events',
          'Regular publication of blog entries, answers in forums, articles in social networks and other media',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Achieved significant internal goals for the company and has started to become noticed in the industry.',
          'Shares knowledge with the outside world at conferences, workshops, meetups and the like.',
          'Proven track record of defining and executing new techniques across organizations.',
          'Attracts and recruits excellent candidates.',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: ['Influences the industry, i.e. John Maeda, Daniel Burka'],
      },
    ],
  },
  IMPACT: {
    displayName: 'IMPACT',
    category: 'B',
    description:
      'Combining initiative with accountability — impact is seeing opportunities and taking effective action to achieve positive results that contribute to the long-term success of the organization.',
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'An effective team player who finds ways to serve others.',
          'Doing more than is required, and always thinking ahead',
          'Working together towards a common goal for the Team',
          'Suggests well-thought out ideas for improving processes, tools, etc',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Make a tangible impact in their immediate context  ',
          'Helps their teammates provide more of an impact in their respective roles..',
          'Proactively providing and encourage new ideas',
          'Help the Team/Product/Project to be prepared, to be Self-Promotional, and always think ahead.',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'Designer who can Influence people/Teams/Products/Projects',
          'Coming up with new techniques or ways to effectively increase the impact of teams.',
          'Overcomes frustration with organizational limitations to drive their ideas to implementation',
          'Has a track record of positively impacting teams.',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Designer who has achieved (internally and starting in the industry) significant goals for the company in terms of Products, etc.',
          'Spreading his/her knowledge (Continuously & Consistently) to the outside world (conferences, workshops, meetups). ',
          'Proven track record of defining and executing new techniques across organizations.',
          'Participate in Community/Industries initiatives.',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: ['Influences the industry, i.e. Cal Newport, Steve Covey'],
      },
    ],
  },
  COLLABORATION: {
    displayName: 'COLLABORATION',
    category: 'B',
    description:
      "Collaboration is more than just working with others. It's about sharing skills, methods, and perspectives with colleagues. It requires effectively listening and thoughtfully receiving feedback from others.  Cultivate trust and build a shared understanding to solve problems together.",
    milestones: [
      {
        summary: 'Level 1: Support',
        signals: [
          'Help others as you can, giving and receiving feedback effectively and efficiently',
          'Attend and help conduct design critiques session',
          'Help apply methods in order to increase the collaboration effectively in the team.',
        ],
      },
      {
        summary: 'Level 2: Support',
        signals: [
          'Use your mature knowledge to build and create, starting to help others to grow: ',
          'Propose and help execute methods.',
          'Proactively provide feedback to others.',
          'Consistently provide high-quality work and feedback',
          'Help M1 grow in communication and collaboration',
          'Suggest viable ideas to grow the communication and collaboration on your team.',
          'Share your knowledge (host workshops or blog about new techniques or processes you’ve employed)',
        ],
      },
      {
        summary: 'Level 3: Lead',
        signals: [
          'How can I lead communication and collaboration across teams/products/projects?',
          'Influence people/teams/products/projects by encouraging them to communicate and collaborate better through processes at Liferay.',
          'Come up with new techniques or ways to increase the communication and collaboration effectively on teams.',
          'Overcome frustration with organizational or technical obstacles by pushing your ideas through to implementation',
        ],
      },
      {
        summary: 'Level 4: Strategize ',
        signals: [
          'Achieve, internally and starting in the industry, significant communication and collaboration goals for the company.',
          'Share your knowledge (continuously and consistently) to the outside world (conferences, workshops, meetups, etc.). ',
          'Track record of  successfully defining and executing improvements across organizations.',
        ],
      },
      {
        summary: 'Level 5: Architect ',
        signals: [
          'Architecting Community / Industriy initiatives.',
          'Aaron Walter',
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

export const trackIds: TrackId[] = Object.keys(tracks)
