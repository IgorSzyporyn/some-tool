#!/usr/bin/env node

import Liftoff from 'liftoff'
import v8flags from 'v8flags'
import { CONFIG_FILE_NAME } from '../constants'
import { jsVariants } from 'interpret'
import { run } from '../script'

const SomeTool = new Liftoff({
name: 'some-tool',
extensions: jsVariants,
v8flags,
})

SomeTool.launch({ configPath: CONFIG_FILE_NAME }, run)
