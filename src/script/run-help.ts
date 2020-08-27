import { helpInit } from '../commands/init/help'
import { getShared } from '../utils/shared'
import { helpMain } from './help'

export function runHelp() {
  const { argv } = getShared()
  const key = argv.help ? 'help' : 'h'
  const type: true | Command = argv[key]

  switch (type) {
    case 'init':
      helpInit()
      break

    case true:
    default:
      helpMain()
      break
  }

}
