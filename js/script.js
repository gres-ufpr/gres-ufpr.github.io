var template;
var urls = {};
var url_database = "https://spreadsheets.google.com/feeds/list/12Cb1_WUF7f6O7NJUnYIMJ3PPKIMMknQ26k6P-T_zdYY/od6/public/values?alt=json"
var team = [];

var base_url = "";
var language = "pt";

function isEnglishSelected(){
	return window.location.pathname.startsWith("/index_en.html");
}

function isLocalhost(){
    return window.location.host == "localhost:8080";
}

function loadPage(hash, url){

	if(hash == '' || hash == '#'){
		url = isEnglishSelected() ? "pages/en/home.html" : "pages/pt/inicio.html";
	}

	url = base_url + url;

    $.get(url, function(data, textStatus, request) {
		$("#content").html(data);
	});

	$(".active").removeClass("active");

	$(".menu-item[href='" + hash + "']").each(function(){
		$(this).parent().addClass("active");

		if(hash == '#inicio' || hash == '#home'){
			document.title = "GrES UFPR";
		}else{
			document.title = $(this).text()+" |  GrES UFPR";
		}
	});
}

$(function(){

	$(".menu-item").each(function(){
		urls[$(this).attr("href")] = $(this).attr("data-page");
	});

	var hash = location.hash;

	if( ! hash || hash == "" || hash == "#"){
		loadPage("#home", isEnglishSelected() ? "pages/en/home.html" : "pages/pt/inicio.html");
	}else{
		if(urls[hash] == undefined){
			loadPage("#home", isEnglishSelected() ? "pages/en/home.html" : "pages/pt/inicio.html");
		}else{
			loadPage(hash, urls[hash]);
		}
	}

	$(".menu-item").click(function(){
		loadPage($(this).attr("href"), $(this).attr("data-page"));
	});

    $(".btn-language").click(function(){
		language = $(this).attr("data-lang");
	});
});
