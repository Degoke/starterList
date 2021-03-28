export type FundRaisingRoundsType =
  | 'pre-seed'
  | 'seed'
  | 'series-a'
  | 'series-b'
  | 'series-c'
  | 'none'

export interface CommentInterface {
  author?: string
  startup?: string
  comment: string
}

export interface UserStartups {
  _id: string
  name: string
  shortDescription?: string
}

export interface StartupDataInterface {
  _id: string
  name: string
  shortDescription: string
  industry: string
  location: string
  logo: string
  website: string
  images: string
  comments: CommentInterface[]
  ratings: number
  dateFounded: Date
  fundRaisingRound: FundRaisingRoundsType
  existingInvestors: string | string[]
  longDescription: string
  totalFunding: string
  userMetrics: string
  owner: string
  ownerImage: string
  createdAt?: Date
}

export interface UserInterface {
  _id: string
  name: string
  email: string
  startups: UserStartups[]
  phone: string
  profileImage: string
  twitter: string
  github: string
  occupation: string
  comments: CommentInterface[]
}
