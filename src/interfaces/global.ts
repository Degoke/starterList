export type FundRaisingRoundsType =
  | 'pre-seed'
  | 'seed'
  | 'Series A'
  | 'Series B'
  | 'Series C'
  | 'None'

export interface StartupDataInterface {
  id: {
    $oid: string
  }
  name: string
  shortDescription: string
  industry: string
  location: string
  logo: string
  website: string
  images: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  comments: {}[]
  ratings: number
  dateFounded: string
  fundRaisingRound: FundRaisingRoundsType
  existingInvestors: string | string[]
  longDescription: string
  totalFunding: string
  userMetrics: number
  owner: {
    $oid: string
  }
  ownerImage: string
  dateAdded: string
}
