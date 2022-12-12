import ExternalLink from "components/ExternalLink";
import styled from "styled-components";

export const ExternalLinkRound = styled(ExternalLink)`
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.elevation2}
`