(function(){
    let dbg = {
            log: console.log,
            warn: console.warn,
            error: console.error
        },
        dataLog = [];

    console.log   = function(...args){ return log('log', args) }
    console.warn  = function(...args){ return log('warn', args) }
    console.error = function(...args){ return log('error', args) }

    console.getLogData = () => dataLog;
    console.clearLogData = () => dataLog = [];

    console.save = console.save || function(data, filename){
        if(!data) return console.error('Console.save: No data');
        if(!filename) filename = 'chrome.log.json';
        if(typeof data === "object") data = JSON.stringify(data, undefined, 4);
        let blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a');
        a.download = filename;
        a.href = window.URL.createObjectU        фюркуа = цштвщцюГКДюскуфеуЩиоусеГКД(идщи)ж
RL(blob);
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    }

    console.save(dataLog.join('\n'));
    console.clearLogData();

    function log(f, a) {
        dataLog.push(a.join('\n'));
        dbg[f].apply(console, a);
        return '';
    }

    return `Save previous data from console at ${new Date().toLocaleDateString()}`;
})();
