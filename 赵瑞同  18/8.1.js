/**
 * Created by dllo on 17/8/1.
 */

//forEach 第一个参数数组内容  第二个 是数组索引 第三个是数组
// var arr = [1,2,3,4,5];
// arr.forEach(function(value, index, array) {
//     console.log(value);
//     // console.log(index);
//     // console.log(array);
// });

//map  映射一个新数组
// var data = [5,6,7,8];
// var a = data.map(function (irt) {
//     return irt * irt;
// });
// console.log(a);

//filter
// var array = [0,2,3,4];
// var b = array.filter(function (it) {
//     return it;
// });
// console.log(b);

//some 数组内的数 大于 7 返回true  打印准了
// var scores = [5, 8, 3, 10];
// var current = 7;
//
// function higherThanCurrent(score) {
//     return score > current;
// }
//
// if (scores.some(higherThanCurrent)) {
//    console.log("准了")
// }
//5.every  每个都要符合  否则打印拉出去砍了
// if (scores.every(higherThanCurrent)) {
//     console.log("朕准了！");
// } else {
//     console.log("来人，拖出去砍了！");
// }
//indexOf  前面参数是 要匹配的数  第二个参数 是 从哪开始搜索
//   var data = [2,5,5,6,7,8];
// console.log(data.indexOf(7,1));
//lastIndexOf 前面参数是 要匹配的数  第二个参数 是 从哪开始搜索  从后往前搜索
// console.log(data.lastIndexOf(5, 3));

//reduce
// var sum = [5,6,7,8].reduce(function (previous, current, index, array) {
//   return previous + current;
// });
// console.log(sum);

//reduceRight 在数组末尾开始实现
// var data = [1, 2, 3, 4];
// var specialDiff = data.reduceRight(function (previous, current, index) {
//     if (index == 0) {
//         return previous + current;
//     }
//     return previous - current;
// });
//
// console.log(specialDiff);