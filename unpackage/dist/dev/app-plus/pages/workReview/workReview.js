
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"my-tabs { font-size: ",[0,28],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-sizing: border-box; box-sizing: border-box; border-top: ",[0,2]," solid #dddddd; border-bottom: ",[0,2]," solid #dddddd; min-width: 100%; overflow-x: auto; }\n.",[1],"my-tabs .",[1],"tab-item{ line-height: ",[0,48],"; padding: ",[0,20],"; min-width: ",[0,100],"; text-align: center; }\n.",[1],"my-tabs .",[1],"tab-item.",[1],"active{ position: relative; color: #3682FF; }\n.",[1],"my-tabs .",[1],"tab-item.",[1],"active::after{ content: \x22\x22; position: absolute; bottom: 0; left:50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); width: 100%; border-bottom: ",[0,4]," solid #3682FF; -webkit-animation: test ease 1 1.5s; animation: test ease 1 1.5s; }\n.",[1],"my-tabs.",[1],"space-between{ -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n@-webkit-keyframes test{ 0%{width: 100%}\n50%{width: 150%}\n100%{width: 100%}\n}@keyframes test{ 0%{width: 100%}\n50%{width: 150%}\n100%{width: 100%}\n}body { background-color: #f7f7f7; }\n.",[1],"content { text-align: center; height: ",[0,400],"; }\n.",[1],"item-box { width: 92%; margin: 0 ",[0,30],"; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"item-box .",[1],"_div{ width: 30%; padding: ",[0,30]," 0; font-size: ",[0,24],"; }\n.",[1],"icon-style { color: #4fc5d3; font-size: ",[0,50],"; }\n.",[1],"out-bc { height: ",[0,250],"; }\n.",[1],"out-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; background-color: #fff; border-radius: ",[0,10],"; width: 100%; padding: ",[0,30],"; -webkit-box-sizing: border-box; box-sizing: border-box; margin-bottom: ",[0,30],"; }\n.",[1],"out-item .",[1],"_h1 { color: #666; font-size: ",[0,30],"; }\n.",[1],"out-item .",[1],"_p { color: #666; font-size: ",[0,26],"; }\n.",[1],"out-item .",[1],"_h2 { color: #999; font-size: ",[0,26],"; padding-top: ",[0,10],"; }\n.",[1],"out-item\x3e.",[1],"_div:not(.",[1],"out-first) { margin: 0 ",[0,10],"; }\n.",[1],"out-first { width: 66%; text-align: left; }\n.",[1],"icon-style { font-size: ",[0,40],"; }\n.",[1],"out-edit, .",[1],"out-edit\x3e.",[1],"_p { color: #d16e0e !important; }\n",],undefined,{path:"./pages/workReview/workReview.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/workReview/workReview.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      