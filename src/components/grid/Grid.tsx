import { Word } from '../../lib/statuses'
import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: Word[]
  currentGuess: Word
  size: { width: number; height: number }
  isRevealing?: boolean
  currentRowClassName: string
}

export const Grid = ({
  guesses,
  currentGuess,
  size,
  isRevealing,
  currentRowClassName,
}: Props) => {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : []

  return (
    <div
      className={`grid grid-rows-${MAX_CHALLENGES} gap-1 mx-auto p-2`}
      style={{ width: `${size.width}px`, height: `${size.height}px` }}
    >
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && (
        <CurrentRow guess={currentGuess} className={currentRowClassName} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}
