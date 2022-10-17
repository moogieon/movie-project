import { AttributifyNames } from 'windicss/types/jsx'

type Prefix = 'w-' // change it to your prefix

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface HTMLAttributes<T>
    extends Partial<Record<AttributifyNames<Prefix>, string>> {}
}
