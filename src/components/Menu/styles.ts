import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`
export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    height: 2.4rem;
    width: 2.4rem;
    cursor: pointer;
  `}
`