export interface StationResponse {
    network: Network
}

export interface Network {
    id: string
    name: string
    location: Location
    href: string
    company: string[]
    system: string
    stations: Station[]
}

export interface Location {
    latitude: number
    longitude: number
    city: string
    country: string
}

export interface Station {
    id: string
    name: string
    latitude: number
    longitude: number
    timestamp: string
    free_bikes: number
    empty_slots: number
    extra: Extra
}

export interface Extra {
    uid: number
    name: string
    terminalName: string
    locked: boolean
    installed: boolean
    temporary: boolean
    installDate: string
    removalDate: string
}
