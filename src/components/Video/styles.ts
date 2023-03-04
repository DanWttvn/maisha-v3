import dynamic from 'next/dynamic'
import styled from 'styled-components'
const DefaultReactPlayer = dynamic(() => import('react-player/vimeo'), {
  ssr: false,
})

export const Container = styled.div`
  cursor: pointer;
  width: 100%;
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  .react-player__shadow {
    border: 2px ${({ theme }) => theme.colors.offOrange} solid;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background: ${({ theme }) => theme.colors.darkRed} !important;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.brightRed} !important;
    }
  }

  .react-player__play-icon {
    transform: scale(0.8);
  }
`

export const ReactPlayer = styled(DefaultReactPlayer)`
  position: absolute;
  inset: 0;
`

export const Thumbnail = styled.img`
  width: 100%;
`
