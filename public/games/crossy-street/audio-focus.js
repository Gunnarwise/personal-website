(() => {
  const canvas = document.getElementById('unity-canvas')
  const outputs = new Map()
  let muted = false

  function canPlaySound() {
    return !muted && !document.hidden && document.hasFocus() && document.activeElement === canvas
  }

  function updateAudio() {
    const volume = canPlaySound() ? 1 : 0
    for (const output of outputs.values()) output.gain.value = volume
  }

  // This Unity export connects each audio channel straight to the destination.
  // Route those connections through one volume control per audio context.
  const connect = AudioNode.prototype.connect
  AudioNode.prototype.connect = function (destination, ...ports) {
    const context = this.context
    if (destination !== context.destination) return connect.call(this, destination, ...ports)

    let output = outputs.get(context)
    if (!output) {
      output = context.createGain()
      output.gain.value = canPlaySound() ? 1 : 0
      connect.call(output, destination)
      outputs.set(context, output)
    }
    connect.call(this, output, ...ports)
    return destination
  }

  canvas.addEventListener('focus', updateAudio)
  canvas.addEventListener('blur', () => {
    for (const output of outputs.values()) output.gain.value = 0
  })
  window.addEventListener('focus', updateAudio)
  window.addEventListener('blur', () => {
    for (const output of outputs.values()) output.gain.value = 0
  })
  document.addEventListener('visibilitychange', updateAudio)
  window.addEventListener('message', (event) => {
    if (event.source !== window.parent || event.origin !== window.location.origin) return
    if (event.data?.type !== 'crossy-street-mute' || typeof event.data.muted !== 'boolean') return
    muted = event.data.muted
    updateAudio()
  })
})()
