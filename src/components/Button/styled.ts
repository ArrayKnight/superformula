import { lighten, rem } from 'polished'
import styled, { css, ThemeProps } from 'styled-components'

import { minWidthStyles, Theme } from '~/common'

export enum Kind {
    Primary = 'Primary',
    Outline = 'Outline',
    Blank = 'Blank',
}

export interface ButtonTheme extends Theme {
    disabled: boolean
    kind: Kind
}

const styles = {
    [Kind.Primary]: (theme: ButtonTheme) => css`
        border: 1px solid
            ${theme.disabled ? theme.colors['gray-6'] : theme.colors.primary};
        background: ${theme.disabled
            ? theme.colors['gray-6']
            : theme.colors.primary};
        color: ${theme.disabled ? theme.colors['gray-5'] : theme.colors.white};
        transition: background 250ms;

        &:not(:disabled):hover {
            background: ${lighten(0.1, theme.colors.primary)};
        }
    `,
    [Kind.Outline]: (theme: ButtonTheme) => css`
        border: 1px solid
            ${theme.disabled ? theme.colors['gray-6'] : theme.colors.primary};
        background: ${theme.colors.white};
        color: ${theme.disabled
            ? theme.colors['gray-5']
            : theme.colors.primary};
        transition: background 250ms;

        &:not(:disabled):hover {
            background: ${theme.colors['gray-6']};
        }
    `,
    [Kind.Blank]: (theme: ButtonTheme) => css`
        padding: 0;
        border: 0;
        background: none;
        color: ${theme.disabled
            ? theme.colors['gray-5']
            : theme.colors.primary};

        &:not(:disabled):hover {
            color: ${theme.colors.black};
        }
    `,
}

export const Root = styled.button(
    ({ theme }: ThemeProps<ButtonTheme>) => css`
        appearance: none;
        display: inline-flex;
        flex-direction: column;
        cursor: ${theme.disabled ? 'not-allowed' : 'pointer'};
        ${theme.kind !== Kind.Blank &&
        css`
            padding: ${theme.spacing.lg}px;
            border-radius: 2px;
            text-transform: uppercase;
            text-decoration: none;
            text-align: center;
            font-size: ${rem(12)};

            ${minWidthStyles.md} {
                font-size: ${rem(13)};
            }

            ${minWidthStyles.xl} {
                font-size: ${rem(14)};
            }
        `};
        ${styles[theme.kind](theme)};
    `,
)

export const Content = styled.span`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
