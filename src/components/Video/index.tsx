import { FC, lazy, Suspense } from 'react'
import { BaseProps } from 'models'
import './styles.css'
const VideoPlayer = lazy(() => import('react-video-js-player'))

export interface Props extends BaseProps {
  src: string
  poster?: string
}

const Video: FC<Props>  = ({ src, poster }) => (
  <Suspense fallback={<></>}>
    <VideoPlayer
      src={src}
      poster={poster}
      autoplay={false}
      bigPlayButton={true}
      bigPlayButtonCentered={true}
      className="vjs-fill vjs-fluid video-js vjs-matrix"
    />
  </Suspense>
)

Video.displayName = 'Video'

export default Video
