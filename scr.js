function run(){
    let htmlcode=document.querySelector(".list #code1").value;
    let csscode="<style>"+document.querySelector(".list #code2").value+"</style>";
    let jscode=document.querySelector(".list #code3").value;
    let output=document.querySelector(".list #output1");
    //console.log(htmlcode,csscode,jscode,output);
     output.contentDocument.body.innerHTML=htmlcode+csscode;
     output.contentWindow.eval(jscode);

}
