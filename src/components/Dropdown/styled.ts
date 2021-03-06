import { transparentize } from 'polished'
import styled, { css, ThemeProps } from 'styled-components'

import { Theme } from '~/common'
import { StyledButton } from '../Button'

export const Root = styled.div`
    display: inline-block;
    position: relative;

    & > ${StyledButton.Root} ${StyledButton.Content} {
        justify-content: space-between;

        svg {
            width: 0.5em;
            margin-left: ${({ theme }: ThemeProps<Theme>) =>
                theme.spacing.sm}px;
        }
    }
`

export const Drop = styled.div(
    ({ theme }: ThemeProps<Theme>) => css`
        min-width: 100%;
        max-height: 300px;
        border: 1px solid ${theme.colors['gray-5']};
        box-shadow: 0 6px 5px 0 ${transparentize(0.9, theme.colors.black)};
        background: ${theme.colors.white};
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1;
        overflow: auto;
        white-space: nowrap;
    `,
)
