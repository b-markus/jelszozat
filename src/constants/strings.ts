import { Word } from '../lib/statuses'

export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Ez igen!', 'Szép munka!', 'Megcsináltad!']
export const GAME_COPIED_MESSAGE = 'A játékot kimásoltuk a vágólapra'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nincs elég betű'
export const WORD_NOT_FOUND_MESSAGE = 'Nem találtunk ilyen szót'
export const HARD_MODE_ALERT_MESSAGE =
  'A nehezített módot csak a játék elején lehet bekapcsolni'
export const CORRECT_WORD_MESSAGE = (solution: Word) => `Töltsd újra az oldalt, hogy újra próbálkozhass!`
//  `Vesztettél, a megoldás ez volt: ${solution.join('')}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `A(z) ${guess} betűnek a(z) ${position}. helyen kell lennie.`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `A(z) ${letter} betűnek is szerepelnie kell a szóban.`
export const ENTER_TEXT = 'Beküld'
export const DELETE_TEXT = 'Töröl'
export const STATISTICS_TITLE = 'Statisztika'
export const GUESS_DISTRIBUTION_TEXT = 'A megoldások eloszlása'
export const NEW_WORD_TEXT = 'Következő feladvány:'
export const SHARE_TEXT = 'Megosztás'
export const TOTAL_TRIES_TEXT = 'Összes játék'
export const SUCCESS_RATE_TEXT = 'Sikerráta'
export const CURRENT_STREAK_TEXT = 'Jelenlegi folyamatos siker'
export const BEST_STREAK_TEXT = 'Leghosszabb folyamatos siker'
