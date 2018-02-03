class Debug {

    debugMode = false

    constructor() {
        if (process.env.NODE_ENV !== 'production') {
            this.debugMode = true

            console.warn(`
                Environment is set to: ${process.env.NODE_ENV}.
                If on production server, change environment variable 'NODE_ENV' to 'production'!
            `)
        }
    }

    log(...msgs) {
        if (this.debugMode) console.log(...msgs)
    }

    warn(...msgs) {
        if (this.debugMode) console.warn(...msgs)
    }

    error(...msgs) {
        if (this.debugMode) console.error(...msgs)
    }

    info(...msgs) {
        if (this.debugMode) console.info(...msgs)
    }

}

export const debug = new Debug()
