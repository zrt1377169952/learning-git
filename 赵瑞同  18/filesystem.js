/**
 * Created by QC.L on 2017/4/19.
 */



var fs = require('fs');
//读取文件内容
//参数1:被读取的文件路径
//参数2:options / 编码格式
//参数3:回调函数(error,data)
// var option = {
//     encoding:'utf8'
// };
// console.log('readFile读取前');
// fs.readFile('./1.txt',option,function (error,data) {
//     console.log(data);
// });
// console.log(" readFile读取后");
//写入内容
//参数1:被写入路径
//参数2:写入的内容
//参数3:options / 字符编码
// option默认为覆盖式写入,会清除所有以前写的东西 flag为w
//追加式写入flag为 a;
//参数4:回调函数(error)

// var  wirteOptions = {
//     encoding:'utf8',
//     flag:'a'
// };
// fs.writeFile('./1.txt','aaaaa',wirteOptions,function (error) {
//     if(!error){
//         console.log("成功");
//
//     }else {
//         console.log(error);
//     }
// });
// console.log('读取前');
// //同步读取文件
// var data = fs.readFileSync('./1.txt',option);
// console.log(data);
// console.log("读取后");



//fs创建文件夹
//参数1.要创建的路径
//参数2.权限默认为0777
//参数3.回调函数
// fs.mkdir('./123',0757,function (error) {
//     console.log(error);
// });




//修改文件/文件夹权限
// fs.chmod('./123',0777,function (error) {
//     if(!error){
//         console.log('修改成功');
// }
//
// });


//删除文件夹
//不能删txt之类的只能删文件夹
// fs.rmdir('./1.txt',function (error) {
//     if(!error){
//         console.log("修改成功");
//     }else {
//         console.error(error);
//     }
//
// });


// //删除文件
// fs.unlink('./1.txt',function (error) {
//     if(!error){
//         console.log("修改成功");
//     }else {
//         console.error(error);
//     }
// });
// fs.open 打开文件,不是文件夹,如果要是没有这个文件,会自动创建
// 参数1:''文件路径
// 参数2:我的理解是和权限一样
// 'r' -   以读取模式打开文件。
// 'r+' - 以读写模式打开文件。
// 'rs' - 使用同步模式打开并读取文件。指示操作系统忽略本地文件系统缓存。
// 'rs+' - 以同步的方式打开，读取 并 写入文件。
// 注意：这不是让fs.open变成同步模式的阻塞操作。如果想要同步模式请使用fs.openSync()。
//
// 'w' - 以读取模式打开文件，如果文件不存在则创建
// 'wx' - 和 ' w ' 模式一样，如果文件存在则返回失败
// 'w+' - 以读写模式打开文件，如果文件不存在则创建
// 'wx+' - 和 ' w+ ' 模式一样，如果文件存在则返回失败
//
// 'a' - 以追加模式打开文件，如果文件不存在则创建
// 'ax' - 和 ' a ' 模式一样，如果文件存在则返回失败
// 'a+' - 以读取追加模式打开文件，如果文件不存在则创建
// 'ax+' - 和 ' a+ ' 模式一样，如果文件存在则返回失败
// mode    用于创建文件时给文件制定权限，默认0666
// 参数3:回调函数
// fs.open('./1.txt','a+',function (error,fd) {
//     console.log(fd);//fd返回的是1.txt里面的内容
//
// });
//
//
// 改变指定的路径所指向的文件的文件时间戳
// 参数1:文件路径
// 参数2:访问时间
// 参数3:修改时间
// 参数4.回调函数
// fs.utimes('./1.txt',Date.now(),Date.now(),function (error) {
//     if(!error){
//         console.log("成功");
//     }else {
//         console.error(error);
//     }
// });
//
//
// fs.watchFile(完整路径及文件名, [options]是interval单位haomiao, listener会在文件变化时回调);
// 对文件进行监视，并且在监视到文件被修改时执行处理
//
//
//
//  var watchFile  =  fs.watchFile('./1.txt' ,{
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
//
//
// fs.unwatchFile(文件完整路径那个, 清除的监听器)
// 停止监视 filename 文件的变化。
// 如果指定了 listener则只移除特定的监听器。
//  否则，所有的监听器都会被移除，且已经有效地停止监视 filename。
// fs.unwatchFile('./1.txt', watchFile);
//
//
// fs.link(文件原来的路径, 新改变后的路径,然后恢复至一个同样的文件到这个路径里, 回调函数)
// fs.link('./1.txt', './module/1.txt', function (error) {
//     if(!error){
//          console.log("成功");
//      }else {
//          console.error(error);
//      }
// })

