ServerEvents.loaded(event => {
  event.server.runCommandSilent('gamerule reducedDebugInfo true')
  event.server.runCommandSilent('gamerule playersSleepingPercentage 101')
  event.server.runCommandSilent('gamerule doInsomnia false')
})