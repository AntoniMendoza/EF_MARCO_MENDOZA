const {error}= require ('console');
const newman = require('newman');
const {collections}= require('postman-collection');

newman.run({
    collection: require('collections/test.json'),
    interacionCount: 1,
    reporters: ['cli', 'htmlextra'],
    reporter:{ 
        htmlextra:
        {
            export:'Report/reporters.html',
            logs:true,
            skipSensitiveData: false,
            title: 'report of web services TEST',
            darktheme:true,
            showOnlyFails: false,
            browserTitle: 'Reports Test',
        }
    }
   
}).on('start', function (err, args){
    console.log ('[NEWMAN] Running collection...');
}).on('done', function (err, summary){
    if(err||summary.error){
        console.error('[NEWMAN] Collection run encoutered an error.');
    }else{
        console.log('[NEWMAN]  collection run completed');
    }
});