export interface ResultRecord {
  id: string
  metric_value: number
  prefix: string
  suffix: string
  label: string
  order: number
  created: string
  updated: string
}

export interface TestimonialRecord {
  id: string
  name: string
  role: string
  club: string
  quote: string
  highlight_metric: string
  featured: boolean
  order: number
  created: string
  updated: string
}

export interface LeadPayload {
  club_name: string
  contact_name: string
  email: string
  phone: string
  estimated_trips: '1-10' | '11-30' | '31-60' | '60+' | string
  message?: string
}

export interface LeadRecord extends LeadPayload {
  id: string
  created: string
  updated: string
}
