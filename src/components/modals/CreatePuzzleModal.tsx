import { useCallback, useState } from 'react'
import { createCustomGameUrl } from '../../lib/hashUtils'
import { getWordLetters } from '../../lib/hungarianWordUtils'
import { Word } from '../../lib/statuses'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const CreatePuzzleModal = ({ isOpen, handleClose }: Props) => {
  const [word, setWord] = useState<string>('')
  const [creator, setCreator] = useState<string>('')
  const [wordLetters, setWordLetters] = useState<Word | undefined>()

  const handleWordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWord(e.target.value)
      const newWordLetters = getWordLetters(e.target.value) as Word
      setWordLetters(newWordLetters.length === 0 ? undefined : newWordLetters)
    },
    []
  )

  const handleCreatorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCreator(e.target.value)
    },
    []
  )

  const gameLink =
    wordLetters?.length === 5 && creator.length > 0
      ? createCustomGameUrl(word, creator)
      : undefined

  return (
    <BaseModal
      title="Saját jelszó"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-gray-500 dark:text-slate-200 pb-2">
        Saját jelszó emlékeztetőt is készíthetsz.
      </p>

      <p className="text-gray-500 dark:text-slate-200 pb-2 pt-5">
        Válassz egy ötbetűs jelszót:
      </p>
      <div className="pb-2">
        <input
          type="text"
          name="word"
          value={word}
          onChange={handleWordChange}
        />
      </div>
      {wordLetters?.length !== 5 && (
        <p className="text-sm text-red-500 dark:text-red-500 pb-2">
          A jelszónak ötbetűsnek kell lennie.
        </p>
      )}
      {wordLetters !== undefined && word.length >= 5 && (
        <div className="flex justify-between">
          {wordLetters.map((wordLetter, index) => (
            <Cell key={index} value={wordLetter} status="correct" />
          ))}
        </div>
      )}

      <p className="text-gray-500 dark:text-slate-200 pb-2 pt-5">
        Válassz egy jeligét (hogy beazonosíthasd az applikációt - de vigyázz, ne
        utalj a jelszóra!):
      </p>
      <div className="pb-2">
        <input
          type="text"
          name="creator"
          value={creator}
          onChange={handleCreatorChange}
        />
      </div>
      {creator.length === 0 && (
        <p className="text-sm text-red-500 dark:text-red-500 pb-2">
          Még hiányzik a jelige.
        </p>
      )}

      {gameLink && (
        <>
          <p className="text-gray-500 dark:text-slate-200 pb-2 pt-5">
            Íme a link a rejtvényhez:
          </p>
          <p className="text-lg text-blue-500 dark:text-blue-500 pb-2 break-all">
            <a href={gameLink} target="_blank" rel="noreferrer">
              {gameLink}
            </a>
          </p>
        </>
      )}
    </BaseModal>
  )
}
