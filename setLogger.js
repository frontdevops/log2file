(function(console){
    let dbg = {
            log: console.log,
            warn: console.warn,
            error: console.error
        },
        dataLog = [];

    console.log   = function(...args){ return log('log', args) };
    console.warn  = function(...args){ return log('warn', args) };
    console.error = function(...args){ return log('error', args) };
    
    console.getLogData = () => dataLog.join('\n');
    console.clearLogData = () => dataLog = [];

    function log(f, a) {
        dataLog.push(a.join('\n'));
        dbg[f].apply(console, a);
        return '';
    }

})(console);
