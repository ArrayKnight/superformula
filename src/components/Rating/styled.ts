import styled, { ThemeProps } from 'styled-components'

import { Star } from '~/assets'
import { Theme } from '~/common'

export interface StarTheme extends Theme {
    fill: boolean
}

export const StarIcon = styled(Star)`
    fill: ${({ theme }: ThemeProps<StarTheme>) =>
        theme.fill ? theme.colors.primary : theme.colors.white};
    stroke: ${({ theme }: ThemeProps<StarTheme>) => theme.colors.primary};
`

export const StarButton = styled.button`
    appearance: none;
    padding: 0;
    border: 0;
    background: none;
`

export const Root = styled.div`
    display: inline-flex;
    flex-direction: row;

    &:hover,
    &:focus-within {
        ${StarButton} {
            ${StarIcon} {
                fill: ${({ theme }: ThemeProps<StarTheme>) =>
                    theme.colors.success};
            }

            &:focus,
            &:hover {
                & ~ ${StarButton} ${StarIcon} {
                    fill: ${({ theme }: ThemeProps<StarTheme>) =>
                        theme.colors.white};
                }
            }
        }
    }
`