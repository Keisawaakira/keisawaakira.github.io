$(document).pjax('a[target!=_blank]', '.wrap', { fragment: '.wrap', timeout: 8000 });
function js_reload(){
  var js1 = document.createElement('script');
  js1.src = 'https://cdn.jsdelivr.net/combine/npm/reveal.js@4.0.0/dist/reveal.min.js,npm/reveal.js@4.0.0/plugin/markdown/markdown.js';
  js1.async = 'async';
  $('.wrap')[0].insertAdjacentElement('afterbegin', js1);
  var js2 = document.createElement('script');
  js2.src = 'https://cdn.jsdelivr.net/combine/npm/katex/dist/katex.min.js,npm/katex/dist/contrib/mathtex-script-type.min.js,npm/katex/dist/contrib/auto-render.min.js';
  js2.async = 'async';
  $('.wrap')[0].insertAdjacentElement('afterbegin', js2);
  var js3 = document.createElement('script');
  js3.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
  js3.async = 'async';
  $('.wrap')[0].insertAdjacentElement('afterbegin', js3);
  var js4 = document.createElement('script');
  js4.src = 'https://cdn.jsdelivr.net/combine/npm/prismjs/components/prism-core.min.js,npm/prismjs/plugins/autoloader/prism-autoloader.min.js,npm/prismjs/plugins/line-numbers/prism-line-numbers.min.js,npm/prismjs/plugins/toolbar/prism-toolbar.min.js';
  js4.async = 'async';
  $('.wrap')[0].insertAdjacentElement('afterbegin', js4);
  var js5 = document.createElement('script');
  js5.src = 'https://cdn.jsdelivr.net/npm/valine/dist/Valine.min.js';
  js5.async = 'async';
  $('.wrap')[0].insertAdjacentElement('afterbegin', js5);
}
function ppt_reload(){
  document.getElementsByClassName('wrap')[0].id = 'blog';
  document.getElementsByClassName('wrap')[0].classList.add('reveal');
  Reveal.initialize({
    height: '100%',
    hash: true,
    mouseWheel: true,
    navigationMode: 'linear',
    parallaxBackgroundImage: 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAD8D+JaQAA3AA/uVqAAA=',
    plugins: [ RevealMarkdown ]
  });
}
function katex_reload(){
  renderMathInElement(document.body, { delimiters: [{ left: "$", right: "$", display: false }] });
}
function mermaid_reload(){
  mermaid.init();
}
function prism_reload(){
  Prism.plugins.autoloader.languages_path = "https:\/\/cdn.jsdelivr.net/npm/prismjs/components/";
  for(let x=document.getElementsByTagName("pre"), i=0;i<x.length;i++)
  {
    x[i].classList.add("line-numbers");
  }
  Prism.plugins.toolbar.registerButton("select-code", function (env) {
    let button = document.createElement("button");
    button.innerHTML = "select this " + env.language;
    button.addEventListener("click", function () {
      if (document.body.createTextRange) {
        let range = document.body.createTextRange();
        range.moveToElementText(env.element);
        range.select();
      } else if (window.getSelection) {
        let selection = window.getSelection();
        let range = document.createRange();
        range.selectNodeContents(env.element);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
    return button;
  });
  Prism.highlightAll();
}
function bacimg_reload(){
  var x = $('.wrap')[0];
  var imgarr = ["/assets/pixiv/16568006.jpg", "/assets/pixiv/24417680.jpg", "/assets/pixiv/26841120.jpg", "/assets/pixiv/30613342.jpg", "/assets/pixiv/33170099.jpg", "/assets/pixiv/39988634.jpg", "/assets/pixiv/44106365.jpg", "/assets/pixiv/47311990.jpg", "/assets/pixiv/47998647.jpg", "/assets/pixiv/49371152.jpg", "/assets/pixiv/50226623.jpg", "/assets/pixiv/53403181.png", "/assets/pixiv/53487865.png", "/assets/pixiv/56245464.jpg", "/assets/pixiv/56586185.jpg", "/assets/pixiv/57521562.png", "/assets/pixiv/58768877.jpg", "/assets/pixiv/59064165.jpg", "/assets/pixiv/62555893.jpg", "/assets/pixiv/63026901.png", "/assets/pixiv/63529031.jpg", "/assets/pixiv/63828715.jpg", "/assets/pixiv/66231473.png", "/assets/pixiv/66475764.png", "/assets/pixiv/68146079.png", "/assets/pixiv/70202184.jpg", "/assets/pixiv/70412499.jpg", "/assets/pixiv/70891152.jpg", "/assets/pixiv/71258073_0.png", "/assets/pixiv/71306760.png", "/assets/pixiv/71667338.jpg", "/assets/pixiv/73363882.png", "/assets/pixiv/74479165.png", "/assets/pixiv/74650454.png", "/assets/pixiv/74831743.jpg", "/assets/pixiv/74956778.jpg", "/assets/pixiv/75041706.jpg", "/assets/pixiv/75080608.jpg", "/assets/pixiv/75310036.jpg", "/assets/pixiv/75375027.jpg", "/assets/pixiv/75863694.png", "/assets/pixiv/76099273_0.png", "/assets/pixiv/76172945.png", "/assets/pixiv/77278947.png", "/assets/pixiv/77672247.jpg", "/assets/pixiv/77718310.jpg", "/assets/pixiv/78296283_0.jpg", "/assets/pixiv/78491682.jpg", "/assets/pixiv/78791796_1.jpg", "/assets/pixiv/79566741_0.jpg", "/assets/pixiv/79919479.jpg", "/assets/pixiv/80013092_0.jpg", "/assets/pixiv/80036479.png", "/assets/pixiv/80037193.jpg", "/assets/pixiv/80440526.jpg", "/assets/pixiv/80524437.jpg", "/assets/pixiv/80594425.jpg", "/assets/pixiv/80679028.jpg", "/assets/pixiv/80692018.jpg", "/assets/pixiv/80700794.jpg", "/assets/pixiv/80707626.jpg", "/assets/pixiv/80840476.jpg", "/assets/pixiv/80845930.jpg", "/assets/pixiv/80861419.jpg", "/assets/pixiv/80896430.jpg", "/assets/pixiv/80906088.jpg", "/assets/pixiv/80936030_0.png", "/assets/pixiv/80943778.png", "/assets/pixiv/81187174.jpg", "/assets/pixiv/81221574.jpg", "/assets/pixiv/81311647.jpg", "/assets/pixiv/81411198.jpg", "/assets/pixiv/81470269.jpg", "/assets/pixiv/81497784.jpg", "/assets/pixiv/81565477.jpg", "/assets/pixiv/81611290.jpg", "/assets/pixiv/81648714.jpg", "/assets/pixiv/1351005284-51b7656d63c00728.jpg", "/assets/pixiv/135100528435ee389d93ef4f00.jpg"];
  var index = Math.round(Math.random() * 78);
  var bacimgs = imgarr[index];
  x.style.backgroundImage = "url(" + bacimgs + ")";
}
function valine_reload(){
  new Valine({
            "el": document.getElementsByClassName("v")[0],
            "appId": "Qi8WqYmdQdJeyNfMmcEj1iTq-gzGzoHsz",
            "appKey": "GGsJLedI2Be45Equ4qAU7PpY",
            "placeholder": "在这里评论吧！评论无审核发言要谨慎哦",
            "requiredFields": ["nick","mail"],
            "visitor": true,
            "recordIP": true
          });
}
$(document).on('pjax:beforeSend', function(event){
  if(($.pjax.state.url == 'https://keisawaakira.github.io/') || ($.pjax.state.url.indexOf('https://keisawaakira.github.io/#/') != -1)) {history.replaceState($.pjax.state, $.pjax.state.title, $.pjax.state.url);}
});
$(window).on('popstate', function(event){
  if(document.URL.indexOf('https://keisawaakira.github.io/#/') != -1) {$('.sidebar-nav-item')[0].click();}
});
$(window).on('hashchange', function(event){
  if((document.URL.indexOf('https://keisawaakira.github.io/tags/') != -1) && ((document.URL.indexOf('#') != -1))) {history.replaceState($.pjax.state, $.pjax.state.title, $.pjax.state.url);}
  if((document.URL.indexOf('https://keisawaakira.github.io/archive/') != -1) && ((document.URL.indexOf('#') != -1))) {history.replaceState($.pjax.state, $.pjax.state.title, $.pjax.state.url);}
  if((document.URL.indexOf('https://keisawaakira.github.io/_posts/') != -1) && ((document.URL.indexOf('#') != -1))) {history.replaceState($.pjax.state, $.pjax.state.title, $.pjax.state.url);}
});
$(document).on('pjax:start', function(event){
  NProgress.start();
  js_reload();
});
$(document).on('pjax:end', function(event){
  var url = $.pjax.state.url;
  var a = $('.sidebar-nav-item');
  var i;
  if($.pjax.state.url.indexOf('https://keisawaakira.github.io/#/') != -1) {url = 'https://keisawaakira.github.io/';}
  if($.pjax.state.url.indexOf('https://keisawaakira.github.io/archive/#') != -1) {url = 'https://keisawaakira.github.io/archive/';}
  if($.pjax.state.url.indexOf('https://keisawaakira.github.io/tags/#') != -1) {url = 'https://keisawaakira.github.io/tags/';}
  for(i = 0; i < a.length; i++){
    if(a[i].href == url){
	  if($('.sidebar-nav-item.active').length > 0) {$('.sidebar-nav-item.active')[0].classList.remove('active');}
	  a[i].classList.add('active');
	}
  }
  if($('.ppt').length == 1) {ppt_reload();}
  else {bacimg_reload();}
  katex_reload();
  mermaid_reload();
  prism_reload();
  valine_reload();
  NProgress.done();
});
function change(flag){
  switch(flag){
	  case 0:var x = $('.card.first img');break;
          case 1:var x = $('.card.second img');break;
	  case 2:var x = $('.card.third img');break;
  }
  var i = 0;
  for(i;i < x.length;i++){
	x[i].style.opacity = 0.5;  
  }
}
function back(flag){
  switch(flag){
	  case 0:var x = $('.card.first img');break;
	  case 1:var x = $('.card.second img');break;
	  case 2:var x = $('.card.third img');break;
  }
  var i = 0;
  for(i;i < x.length;i++){
	x[i].style.opacity = 1;  
  }
}
