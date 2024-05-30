export interface StringID {
  id: string
}

export interface TimeStamp {
  created_at: Date
  updated_at: Date
}

export interface Group extends StringID, TimeStamp {
  title: string
  place: string
}
