function writeCode(preCode,code,fn) {
    console.log('设置闹钟')
    let domCode = document.querySelector('#code')

    let n = 0
    let id = setInterval(() => {
        n += 1
        console.log('写代码')
        domCode.innerHTML = Prism.highlight(preCode + code.substring(0, n), Prism.languages.css, 'css')
        style.innerHTML = preCode + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 1)
}

function writeMarkdown(markdown){
    let domPaper = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
        }
    }, 1)
}

var result = `/*面试官你好，我是zzj
我将以动画的形式来介绍我自己
只用文字介绍太单调了
我就用代码来介绍吧
首先准备一些样式*/
*{
    transition:all 1s;
}
body{
    background:rgb(222,222,222);
    font-size:16px;
}
#code{
    padding:16px;
}
/*我需要一点代码高亮*/
.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}
/* 加点3D效果 */
#code{
    transform:rotate(360deg)
}
/* 不玩了，我来介绍一下我自己
我需要一张白纸 */
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #dddS;
    padding:16px;
    display:flex;
    justify-content:center;
    align-items:center;
}
#paper > .content{
    background:white;
    width:100%;
    height:100%;
    text-align:center;
}
`
var result2 = `/*接下来把Markdown 变成HTML-marked.js
给HTML加样式*/
`
var md = `#自我介绍

我叫zzj
1994年8月出生
自学前端半年
希望应聘前端开发岗位

#技能介绍
熟悉Javascript CSS

#项目介绍
1.letter导航
2.canvas画板
3.个人在线简历

#联系方式
邮箱：zhangzdejun3@xdf.cn
`
writeCode('',result,()=>{
    createPaper()
    writeCode(result,result2,()=>{
        writeMarkdown(md)
    })
})
// var n = 0
// var id = setInterval(()=>{
//     n = n + 1
//     code.innerHTML = result.substring(0,n)
//     code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
//     style.innerHTML = result.substring(0,n)
//     if(n >= result.length){
//         window.clearInterval(id)
//         fn2()
//         fn3(result)
//     }
// },5)
function createPaper(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
}