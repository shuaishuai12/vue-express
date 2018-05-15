


//时间过滤器 毫秒转化时间 value 需要数字
const formatDuring= function (value) {


  if (!value) {
    return '无';
  } else {
    Date.prototype.toLocaleString = function(){
      let months = this.getMonth()+1;
      if(months < 10){
        months = '0' + months;
      }
      let dates = this.getDate();
      if(dates < 10){
        dates = '0' + dates;
      }
      let hours = this.getHours();
      if(hours < 10){
        hours = '0' + hours;
      }
      let minutes = this.getMinutes();
      if(minutes < 10){
        minutes = '0' + minutes;
      }
      return this.getFullYear() +'年'+months+'月'+dates+'日'
    }
    return new Date(value).toLocaleString();
  }
};
const formatDurings=function (value) {

  Date.prototype.toLocaleString = function(){
    let minutes = this.getMinutes();
    if(minutes < 10){
      minutes = '0' + minutes;
    }
    return this.getFullYear() +'.'+ (this.getMonth()+1)+'.'+this.getDate();
  }
  return new Date(value).toLocaleString();


}
//标准时间转化毫秒
const dataTransform =function (value) {
  var d = new Date(value);
  var data1=d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  var Time = (new Date(data1)).getTime();
  return Time;
}


export {formatDuring,formatDurings,dataTransform}
