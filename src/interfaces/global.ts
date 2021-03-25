export type FundRaisingRoundsType =
  | 'pre-seed'
  | 'seed'
  | 'series-a'
  | 'series-b'
  | 'series-c'
  | 'none'

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
  comments: number
  ratings: number
  dateFounded: string
  fundRaisingRound: FundRaisingRoundsType
  existingInvestors: string | string[]
  longDescription: string
  totalFunding: string
  userMetrics: string
  owner: string
  ownerImage: string
  dateAdded: string
}
