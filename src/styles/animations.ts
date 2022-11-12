import { keyframes } from 'styled-components';

export const headerAnimation = keyframes`
    from {
      transform: scale(1);
      opacity: 0;
    }
    to {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`;

export const sizeAnimation = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.05); }
`;

export const circularDash = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

export const circularRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const scrollIconAnimation = keyframes`
  from { bottom: 38px; }
  to { bottom: 34px; }
`;

export const colorFadeInAnimation = keyframes`
  from { bottom: rgba(0,0,0,0) }
  to { background: rgba(0,0,0,.7); }
`;
