import { validStyles } from '@tamagui/helpers'

import { stackDefaultStyles } from '../constants/constants'
import { createComponent } from '../createComponent'
import type { StackProps, StackPropsBase, TamaguiElement } from '../types'

export const Stack = createComponent<StackProps, TamaguiElement, StackPropsBase>({
  acceptsClassName: true,
  defaultProps: {
    ...stackDefaultStyles,
    flexDirection: 'column',
  },
  validStyles,
})

// test types
// export const YStack = styled(Stack, {
//   flexDirection: 'column',
// })
// // test types
// const x00 = <Stack missing={0} /> // should err
// const x0 = <YStack missing={0} /> // should err
// const x1 = (props: StackProps) => <YStack {...props} />
// type ys = typeof YStack
// type ysv = ys extends StaticComponent<any, infer V> ? V : unknown
