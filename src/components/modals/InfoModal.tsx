import { MAX_CHALLENGES } from '../../constants/settings'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="JelSzózat útmutató" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Találd ki a jelszót {MAX_CHALLENGES} tippből! Minden tipp után a
        négyzetek színe jelzi, hogy mennyire kerültél közel a megoldáshoz. Például:
      </p>

      {/* <div className="flex justify-center mb-1 mt-4"> */}
      <div className="grid grid-cols-5 gap-1 mb-1 mt-4">
        <Cell value="S" />
        <Cell value="O" />
        <Cell value="R" status="correct"/>
        <Cell value="O" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Az R betű szerepel a szóban és jó helyen van.
      </p>

      <div className="grid grid-cols-5 gap-1 mb-1 mt-4">
        <Cell value="P" />
        <Cell value="E" />
        <Cell value="N" />
        <Cell value="G" status="present" />
        <Cell value="Ő" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A G betű szerepel a szóban, de nem jó helyen van.
      </p>

      <div className="grid grid-cols-5 gap-1 mb-1 mt-4">
        <Cell value="H" />
        <Cell value="A" />
        <Cell value="Z" />
        <Cell value="U" status="absent" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-8">
        Az U betű nem szerepel a szóban.
      </p>

      <p className="italic text-sm text-gray-500 dark:text-gray-300 pb-2">
        Ez egy nyílt forráskódú szójáték, <b>mármint jelszó menedzser</b>, a Wordle magyar változatát véve alapul.
      </p>
      <p className="italic text-sm text-gray-500 dark:text-gray-300 pb-2">
        Az angol verzió klónjának{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          a kódját itt találod.
        </a>
      </p>
      <p className="italic text-sm text-gray-500 dark:text-gray-300 pb-2">
        Az eredeti játékot pedig{' '}
        <a
          href="https://www.nytimes.com/games/wordle/index.html"
          className="underline font-bold"
        >
          itt kipróbálhatod.
        </a>
      </p>
    </BaseModal>
  )
}
