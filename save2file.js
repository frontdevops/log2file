(function(console){
    console.save = console.save || function(data, filename){
        
        if(!data) return console.log('No data to save');
        if(!filename) filename = 'chrome.log.txt';
        if(typeof data === "object") data = JSON.stringify(data, undefined, 4);
        
        let blob = new Blob([data], {type: 'text/plain'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a');
        
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl =  ['text/plain', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    };

    console.save(console.getLogData());
    console.clearLogData();
})(console);
