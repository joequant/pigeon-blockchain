#!/usr/bin/env node

const { FlockCli } = require('../src/pigeon-sdk/js/flock-cli')
const { FlockManager } = require('../src/manager/flock-manager')

const app = new FlockManager({ conport: 'tcp://127.0.0.1:3000' })
const cli = new FlockCli()
app.run()
app.runBeacon()

async function main () {
  await cli.portConnect('default', 'tcp://127.0.0.1:3000')
  const beacon = await cli.send('run localhost/pigeon-beacon')
  const portConnectString = await cli.send(`port-connect-string ${beacon}`)
  await cli.portConnect('beacon', portConnectString[0])
  cli.readline()
}

main()
