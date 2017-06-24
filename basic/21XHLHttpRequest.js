//js高级程序设计
//21.1XMLHttpRequest对象
//适用于IE7之前的版本
function createXHR() {
  if(typeof arguments.callee.activeXString != "string"){
    var version  = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
                  i, len;
    for(i=0, len=version.length; i<len; i++) {
      try{
        new ActiveXObject(versons[i]);
        arguments.callee.activeXString = version[i];
        break;
      } catch(ex) {
        //跳过
      }
    }
  }
  return new ActiveXObject(arguments.callee.activeXString);
}
//这函数会尽力根据IE中可用的MSXML库的情况创建最新版本的XHR对象


//IE7+、 Firefox、 Opera、 Chrome 和 Safari 都支持原生的 XHR 对象,这些浏览器中创建XHR对象要像下面这样使用XMLHttpRequest构造函数
var xhr = new XMLHttpRequest();



//如果你必须要支持IE的早期版本，那么则可以在这个createXHR()函数中加入对原生XHR对象的支持。
function createXHR() {
  if(typeof XMLHttpRequest != "undefined"){
    return new XMLHttpRequest();
  }else if( typeof ActiveXObject != "undefined" ){
    if(typeof arguments.callee.activeXString != "string"){
    var version  = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
                  i, len;
    for(i=0, len=version.length; i<len; i++) {
      try{
        new ActiveXObject(versons[i]);
        arguments.callee.activeXString = version[i];
        break;
      } catch(ex) {
        //跳过
      }
    }
  }
  return new ActiveXObject(arguments.callee.activeXString);
  } else {
    thorw new Error("No XHR object available.")
  }
}

//21.1.1检查返回的状态代码
xhr.open("get", "example.txt", false);
xhr.send(null);

if((xhr.status >= 200 && xhr.statur<300)|| xhr.status == 304){
  alert(xhr.responseText)
}else {
  alert('Request was unsuccessful: ' + xhr.status)
}

//调用open()之前
//指定onreadystatechange事件处理程序才能确保跨浏览器兼容性
var xhr = createXHR();
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
    if((xhr.status >= 200 && xhr.statur<300)|| xhr.status == 304){
      alert(xhr.responseText)
    }else {
      alert('Request was unsuccessful: ' + xhr.status)
    }
  }
};
xhr.open("get", "example.txt", false);
xhr.send(null);
//以上代码利用DOM0级方法为XHR对象添加了事件处理程序，原因是并非所有浏览器都支持DOM2级方法
//另外，在接收到响应之前还可以调用abort（）方法来取消异步请求，如下所示：
xhr.abort();


//下面这个函数可以辅助向现有URL的末尾添加查询字符串参数：

function addURLParam(url, name, value) {
  url += (url.indexOf("?") == -1 ? "?" : "&");
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return url;
}

