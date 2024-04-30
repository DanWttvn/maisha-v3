import { FC } from 'react'
import { BaseProps } from 'models'
import { Container, ReactPlayer, Thumbnail } from './styles'

export interface Props extends BaseProps {
  src: string
  poster?: string
}

const Video: FC<Props> = ({ src, poster }) => (
  <Container>
    <ReactPlayer
      url={src}
      light={!!poster && <Thumbnail src={poster} alt="Thumbnail" />}
      width="100%"
      height="100%"
      controls
      mute="true"
      config={{
        vimeo: {
          playerOptions: {
            autoplay: true,
            responsive: true,
          },
        },
      }}
    />
  </Container>
)

Video.displayName = 'Video'

export default Video
