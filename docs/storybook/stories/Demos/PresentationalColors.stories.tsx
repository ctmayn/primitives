/* eslint @typescript-eslint/consistent-type-imports: 0 */
import {AlertIcon, CheckIcon, LinkIcon, ZapIcon} from '@primer/octicons-react'
import {
  ActionList,
  Avatar,
  Box,
  Button,
  CircleBadge,
  CircleOcticon,
  Flash,
  Heading,
  Label,
  Pagehead,
  ProgressBar,
  Text,
  Token,
} from '@primer/react'
import React from 'react'

const variants = [
  'coral',
  'red',
  'pink',
  'plum',
  'purple',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'pine',
  'oldgreen',
  'green',
  'lime',
  'olive',
  'lemon',
  'yellow',
  'amber',
  'orange',
  'brown',
  'aubern',
  'gray',
] as const

export default {
  title: 'Demos/Presentational Colors',
  args: {
    variant: 'blue',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: variants,
    },
  },
}

export const PresentationalColors = ({variant}) => {
  return (
    <Box>
      <Pagehead>
        <Heading sx={{fontSize: 3}}>Kitchen sink for presentational color</Heading>
      </Pagehead>
      <Flash
        sx={{
          backgroundColor: `var(--presentational-ui-${variant}-background-muted)`,
          border: `1px solid var(--presentational-ui-${variant}-border-muted)`,
          color: `var(--presentational-ui-${variant}-text)`,
        }}
      >
        <CheckIcon fill={`var(--presentational-ui-${variant}-text)`} />A flash alert
      </Flash>
      <Box sx={{marginTop: 3, display: 'flex', gap: 2, alignItems: 'center'}}>
        <Button
          variant="primary"
          sx={{
            backgroundColor: `var(--presentational-ui-${variant}-background-solid)`,
            '&:hover': {
              backgroundColor: `var(--presentational-ui-${variant}-background-solidHover)`,
            },
            '&:active': {
              backgroundColor: `var(--presentational-ui-${variant}-background-solidPressed)`,
            },
          }}
        >
          Button
        </Button>
        <Token
          text="Default Token"
          sx={{
            backgroundColor: `var(--presentational-ui-${variant}-background-muted)`,
            border: `0px solid var(--presentational-ui-${variant}-border-muted)`,
            color: `var(--presentational-ui-${variant}-text)`,
            '&:hover': {
              backgroundColor: `var(--presentational-ui-${variant}-background-mutedHover)`,
            },
            '&:active': {
              backgroundColor: `var(--presentational-ui-${variant}-background-mutedPressed)`,
            },
          }}
        />
        <Label
          sx={{
            border: `1px solid var(--presentational-ui-${variant}-background-solid)`,
            color: `var(--presentational-ui-${variant}-background-solid)`,
          }}
        >
          System label
        </Label>
        <CircleOcticon
          icon={CheckIcon}
          size={24}
          sx={{bg: `var(--presentational-ui-${variant}-background-solid)`, color: 'fg.onEmphasis', padding: 1}}
        />
        <CircleBadge sx={{color: `var(--presentational-ui-${variant}-text)`}}>
          <CircleBadge.Icon icon={ZapIcon} />
        </CircleBadge>
      </Box>
      <Box sx={{marginTop: 3, display: 'flex', gap: 2, alignItems: 'center'}}>
        <Text mr={3}>5 of 10</Text>
        <ProgressBar
          progress={50}
          inline
          sx={{width: '200px'}}
          bg={`var(--presentational-ui-${variant}-background-solid)`}
        />
      </Box>
      <ActionList>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <LinkIcon />
          </ActionList.LeadingVisual>
          github.com/primer
        </ActionList.Item>
        <ActionList.Item
          sx={{
            color: `var(--presentational-ui-${variant}-text)`,
            '&:hover:not([aria-disabled])': {
              color: `var(--presentational-ui-${variant}-text)`,
              backgroundColor: `var(--presentational-ui-${variant}-background-mutedHover)`,
            },
          }}
        >
          <ActionList.LeadingVisual>
            <AlertIcon fill={`var(--presentational-ui-${variant}-text)`} />
          </ActionList.LeadingVisual>
          4 vulnerabilities
        </ActionList.Item>
        <ActionList.Item>
          <ActionList.LeadingVisual>
            <Avatar src="https://github.com/mona.png" />
          </ActionList.LeadingVisual>
          mona
        </ActionList.Item>
      </ActionList>
    </Box>
  )
}
