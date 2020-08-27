import { CONFIG_FILE_NAME } from '../../constants'
import { getPckJson } from '../../utils/get-pck-json'
import { print } from '../../utils/print'

export function helpInit() {
  const { name } = getPckJson()

  print.help({
    name: 'init',
    type: 'command',
    message: [
      `Attempt to create a ${CONFIG_FILE_NAME} in your folder`,
    ],
  })

  print.newline()
}
