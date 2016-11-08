onload = function(){
    setInterval(function(){
        $.get('/student/sap.asp', function(data){
            console.warn('active');
        }).fail(function(){
            console.error('error in keeping connection alive');
        });
    },60000)
}
