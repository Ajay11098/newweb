var fileupload = require('formidable');
var http = require('http')
var fs = require('fs');


http.createServer(function(req,res){
    
    if(req.url=='/fileupload'){
        var form = new fileupload.IncomingForm();
        form.parse(req, function(err,fields,files){
            var oldpath = files.filetoupload.fileupload;
            var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
            res.write('File Uploaded');
            res.end();
        });
    }
    else{
        res.writeHead(200 , {'Content-Type':'text/html' });
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"> <br>');
        res.write('<input type="submit" >');
        res.write('</form>');
        return res.end();

    }
}).listen(8080);
