import { start } from './infraestructure/server'

start().catch(_ => process.exit(1))
