### 21.1.1XHR用法

在使用XHR对象时，调用的第一个方式是open(),它接受3个参数：要发送的请求的类型("get","post"等），请求的URL 和 表示是否异步发送请求的布尔值。

    xhr.open("get", "example.php", false);

这行代码会启动一个针对example.php的GET请求。
有关这行代码，需要说明两点：
1. URL相对于执行代码的当前页面（当然也可以使用绝对路径）；
2. 调用open（）方法并不会真正发送骑牛，只是启动一个请求以备发送。

要发送特定的请求，必须像下面这样调用send()方法：
    
    xhr.open("get", "example.php", false);
    xhr.send(null)

这里的send()方法接收一个参数，既要作为请求主题发送的数据。如果不需要通过请求主题发送数据，则必须传入null，因为这个参数对有些浏览器来说是必须的。调用send()之后，请求就会被分派到服务器。

由于这次请求是同步，JavaScript代码会等到服务器响应之后再继续执行。在收到响应后，响应的数据会自动填充XHR对象的属性，相关属性的简介如下。
	
- responseText:作为响应主体被返回的文本。
- responseXML：作为响应的内容类型是”text/xml"或"application/xml",这个属性中将保存包含着响应数据的XML DOM文档。
- status：响应的HTTP状态
- statusText：HTTP状态的说明

在接收到响应后，第一步是检查status属性，以确定响应已经成功返回。一般来说，可以将HTTP状态码为200作为成功的标志。此时，responseText属性的内容已经就绪，而且在内容类型正确的情况下，responseXML也应该能够访问了。
此外，代码状态304表示请求的资源并没有被修改，可以直接使用浏览器中缓存的版本；当然，也意味着响应时有效的。为了确保接收到适当的响应，应该像下面这样坚持上述两种状态代码

    xhr.open("get", "example.txt", false);
    xhr.send(null);
    
    if((xhr.status >= 200 && xhr.statur<300)|| xhr.status == 304){
      alert(xhr.responseText)
    }else {
      alert('Request was unsuccessful: ' + xhr.status)
    }
    

根据返回的状态代码，这个例子可能会显示由服务器返回的内容，也可能会显示一条错误消息。我们建议要通过检测status来决定下一步的操作，不要依赖statusText，因为后者在跨浏览器使用时不太可靠。另外，无论内容类型是什么，相应主体的内容都会保存到responseText属性中；而对于非XML数据而言，responseXML属性的值将为null。  

像前面这样发送同步请求当然没有问题，但是多数情况下，我们还是要发送异步请求，才能让JavaScript继续执行而不必等待响应。此时，可以检测XHR对象的readyState属性，该属性表示请求/响应过程的当前活动阶段。这个属性可取的值如下。

- 0：未初始化。尚未调用open（）方法。
- 1：启动。已经调用open（）方法，但尚未调用send（）方法。
- 2：发送。已经调用send（）方法，但尚未接收到响应。
- 3：接受。已经接收到部分响应数据。
- 4：完成。已经接收到全部响应数据。而且已经可以在客户端使用了。

只要readyState属性的值由一个值变成另一个值，都会触发一次readystatechange事件。可以利用这个事件来检测每次状态变化后readyState的值。通常，我们只对readyState值为4的阶段感兴趣，因为这时候所有数据都已经就绪。不过必须在调用open()之前指定onreadystatechange事件处理程序才能确保跨浏览器兼容性。下面来看一个例子。

另外，在接收到响应之前还可以调用abort（）方法来取消异步请求，如下所示：
    xhr.abort();


### 21.1.2 HTTP头部信息

每个HTTP请求和响应都会带有相应的头部信息，其中有的对开发人员有用，有的也没有什么用。XHR对象也提供了操作这两种头部（既请求头部和响应头部）信息的方法：
默认情况下，在发送XHR请求的同时，还会发送下列头部信息。

- Accept：浏览器能够处理的内容类型
- Accept-Charset：浏览器能够显示的字符集。
- Accept-Encoding：浏览器能够处理的压缩编码。
- Accept-Language：浏览器当前设置的语言
- Connection: 浏览器与服务器之前连接的类型。
- Cookie：当前页面设置id任何Cookie
- Host：发出请求的页面所在的域
- Referer：发出请求的页面的URL。注意，HTTP规范将这个头部字段拼写错了，而为保证与规范一致，也只能将错就错了。（这个英文单词的正确拼法应该是referrer）
- User-Agent：浏览器的用户代理字符串

虽然不同浏览器实际发送的头部信息会有所不同，但以上列出的基本上是所有浏览器都会发送的。使用setRequestHeader()方法可以设置自定义的请求头部信息。这个方法接受**两个参数**：头部字段的名称 和 头部字段的值。只要成功发送请求头部信息，必须在调用open（）方法只后且调用send（）方法之前调用setRequestHeader()，如下面的例子所示。

    xhr.open("get", "example.php", true);
    xhr.setRequestHeader("MyHeader", "MyValue");
    xhr.send(null);

服务器在接收到这种自定义的头部信息之后，可以执行响应的后续操作。我们建议读者使用自定义的头部字段名称，不要使用浏览器正常发送的字段名称，否则有可能会影响服务器的响应。有的浏览器允许开发人员重写默认的头部信息，有的不允许。

调用XHR对象的getResponseHeader()方法并传入头部字段名称，可以取得响应的响应头部信息。而调用getAllResponseHeaders()方法则客户取得一个包含所有头部信息的昌字符串。来看下面的例子。

var myHeader = xhr.getResponseHeader("MyHeader");
var allHeaders = xhr.getAllResponseHeaders();

在服务器端，也可以利用头部信息向浏览器发送额外的，结构化的数据。在没有自定义信息的情况下，getAllResponseHeaders()方法通常会返回如下所示的多行文本内容：


> Date: Sun, 14 Nov 2004 18:04:03 GMT
> 
> Server: Apache/1.3.29 (Unix)
> 
> Vary: Accept
> 
> X-Powered-By: PHP/4.3.8 
> 
> Connection: close 
> 
> Content-Type: text/html; charset=iso-8859-1 

这种格式化的输出可以方便我们检查响应中所有头部字段的名称，而不必一个一个地检查某个字段是否存在。


###　21.1.3 GET请求

GET是最常见的请求类型，最常用于向服务器查询某些信息。必要时，可以将查询字符串参数追加到URL的末尾，以便将信息发送给服务器。对XHR而言，位于传入open()方法的URL末尾的查询字符串必须经过正确的编码才行。

使用GET请求经常会发生的一个错误，就是查询字符串的格式有问题。查询字符串中每个参数的名称和值都必须使用encodeURIComponent()进行编码，然后才能放到URL的末尾；而且所有名-值对都必须由 & 分隔，如下面的例子所示。

    xhr.open("get", "example.php?name1=value1&name2=value2", true);

下面这个函数可以辅助向现有URL的末尾添加查询字符串参数：


    function addURLParam(url, name, value) {
      url += (url.indexOf("?") == -1 ? "?" : "&");
      url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
      return url;
    }
    
这个addURLParam（）函数接受三个参数：要添加参数的URL、参数的名称和参数的值。这个函数首先检查URL是否包含问号（以确定是否已经有参数存在）。如果没有，就添加一个问号；否则，就添加一个和号。然后，将参数名称和值进行编码，再添加到URL的末尾。最后返回添加参数之后的URL。

下面是使用这个函数来构建请求URL的示例。

    var url = "example.php";
    //添加参数
    url = addURLParam(url, "name", "Nicholas");
    url = addURLParam(url, "book", "Professional JavaScript");
    //初始化请求
    xhr.open("get", url, false);

