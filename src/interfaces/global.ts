export interface StartupDataInterface {
  id: {
    $oid: string
  }
  name: string
  'short-description': string
  industry: string
  location: string
  website: string
  logo: string
  images: string
  comments: string
  rating: number
  'founding-date': string
  'fundraising-round': string
  'existing-investors': string
  'total-funding': number
  'user-metrics': number
  owner: { $oid: string }
  'owner-image': string
}
