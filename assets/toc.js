$(document).on('pjax:end', function(event){
	var toc = $('.toc')[0];
	var list = toc.childNodes;
	var i;
	for(i = 1;i < list.length;i++){
		toc.removeChild(list[i]);
	}
	if(($.pjax.state.url != 'https://keisawaakira.github.io/') && ($.pjax.state.url.indexOf('https://keisawaakira.github.io/#/') == -1)){
		htmlContents('#toc', {listType: 'o', filter: function(arr) {return !arr.matches('.masthead-title')}});
	}
});
$(window).load(function(){
	if((document.URL != 'https://keisawaakira.github.io/') && (document.URL.indexOf('https://keisawaakira.github.io/#/') == -1)){
		htmlContents('#toc', {listType: 'o', filter: function(arr) {return !arr.matches('.masthead-title')}});
	}
});