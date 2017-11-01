var AJAX = function(method, url, flag, upData, callBack){
    var addStateChangeEvent = function(){
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    callBack(xhr.responseText);
                }else{
                    alert('error');
                }
            }
        }
    }
    var xhr = null;
    if(window.XMLHttpRequest){  // 主流浏览器
        xhr = new XMLHttpRequest();
    }else{  //IE
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    method = method.toUpperCase();
    if(method === 'GET'){
        xhr.open(method, url + '?' + upData, flag);
        addStateChangeEvent();
        xhr.send();
    }else if(method === 'POST'){
        xhr.open(method, url, flag);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        addStateChangeEvent();
        xhr.send(upData);
    }
}