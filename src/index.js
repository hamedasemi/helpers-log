import { xterm, black, red, green, yellow, blue, magenta, cyan, white, gray } from 'cli-color'
import { DEBUG } from 'webrew-helpers-debug'


export const ENV = typeof process.env.ENV !== `undefined` ? false : process.env.ENV

export function debug() {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = Array.prototype.slice.call(arguments)
    args.unshift(xterm(220)(`[${date}][DEBUG]`))
    DEBUG && console.log.apply(console, args)
}

export function info() {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = Array.prototype.slice.call(arguments)
    args.unshift(xterm(44)(`[${date}][INFO]`))
    console.log.apply(console, args)
}

export function warn() {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = Array.prototype.slice.call(arguments)
    args.unshift(xterm(202)(`[${date}][WARN]`))
    console.log.apply(console, args)
}

export function error() {
    let date = new Date().toTimeString(`HH:mm:ss`).replace(/\ .+/, ``)
    let args = Array.prototype.slice.call(arguments)
    args.unshift(xterm(160)(`[${date}][ERROR]`))
    console.log.apply(console, args)
}