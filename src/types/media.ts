type FrameId = 'desktop' | 'mobile'

type FrameEntry = {
  id: FrameId
  src: string
  width: number
  height: number
  alt: string
  screenTop: number
  screenWidth: number
  screenHeight: number
}

type VideoMediaEntry = {
  type: 'video'
  src: string
  width: number | `${number}`
  height: number | `${number}`
  alt: string
  mime?: string
  track?: string
  lang?: string
  frameId?: FrameId
  caption?: string
}

type ImageMediaEntry = {
  type: 'image'
  src: string
  width: number | `${number}`
  height: number | `${number}`
  alt: string
  frameId?: FrameId
  caption?: string
}

type MediaEntry = VideoMediaEntry | ImageMediaEntry

export type { FrameId, FrameEntry, VideoMediaEntry, ImageMediaEntry, MediaEntry }
