/**
 * Created by dllo on 17/7/31.
 */
//'r' - 以读取模式打开文件。如果文件不存在则发生异常
var fs = require('fs');
// var path = require('path');
//
// fs.open('./01.txt','r+',function (err,fd) {
//     if(err) return;
//     console.log(fd)
// });


// var a = Date.now();
// var b = Date.now();
// fs.utimes('./01.txt',a,b,function (err) {
//     if(!err){
//         console.log("成功")
//     }else {
//         console.log(err)
//     }
// });

// var watchFile  =  fs.watchFile('./1.txt' ,{
//     interval: 20
// }, function(curr, prev) {
//     if (Date.parse(prev.ctime) == 0) {
//         console.log('文件被创建');
//     } else if (Date.parse(curr.ctime) == 0) {
//         console.log('文件被删除');
//     } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
//         console.log('文件有修改');
//     }
// });




// fs.link('./01.txt', './1.txt', function (err) {
//     if(!err){
//          console.log("成功");
//      }else {
//          console.error(err);
//      }
// });




