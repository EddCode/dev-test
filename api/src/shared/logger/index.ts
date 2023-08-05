import  winston  from 'winston'
import { config } from '../../infraestructure/config'

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ]
})

if (config.server.logger) {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}

export { logger }
