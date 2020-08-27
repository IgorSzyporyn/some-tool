import { allowedCommands } from '.'
import { CONFIG_FILE_NAME } from '../constants'
import { getPckJson } from '../utils/get-pck-json'
import { print } from '../utils/print'

export function helpMain() {
  const { name } = getPckJson()

  print.help({
    type: 'main',
    message: ['Add a description about your program here'],
    commands: [
      {
        name: 'init',
        description: `Initialize a ${CONFIG_FILE_NAME} config file in your folder`,
      },
    ],
    args: [
      {
        name: '--help, -h',
        description: `Show the help for ${name} or for a command`,
        optionsName: 'command',
        options: allowedCommands,
      },
      {
        name: '--version, -v',
        description: 'Show the current version',
      },
    ],
  })
}

