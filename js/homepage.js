//������ҳ
function setHomePage()
{
	if(document.all)
	{
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage('http://www.baidu.com');
	}
	else if(window.sidebar)
	{
		var thePrefs = Components.classes['@mozilla.org/preferences-service;1']
			.getService(Components.interfaces.nsIPrefBranch);
		thePrefs.setCharPref('browser.startup.homepage','http://www.baidu.com');
	}
}

//�����ղؼ�
function addFav()
{
	if(window.external.AddFavorite)
	{
		window.external.AddFavorite('./�ղؼ�.html','���¿�');
	}
	else
	{
		window.sidebar.addPanel('���¿�','http://www.baidu.com',"");
	}
}


//ͼƬ����
function ScrollImgLeft()
{
	var speed=20;
	var scroll_begin = document.getElementById("scroll_begin");
	var scroll_end = document.getElementById("scroll_end");
	var scroll_div = document.getElementById("scroll_div");
	scroll_end.innerHTML=scroll_begin.innerHTML;
	function Marquee()
	{
		if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0)
		  scroll_div.scrollLeft-=scroll_begin.offsetWidth;
		else
		  scroll_div.scrollLeft++;
	}

	var MyMar=setInterval(Marquee,speed);
	scroll_div.onmouseover=function() 
	{
		clearInterval(MyMar);
	}
	scroll_div.onmouseout=function() 
	{
		MyMar=setInterval(Marquee,speed);
	}
}
