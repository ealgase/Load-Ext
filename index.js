(function (ext) {
    ext._shutdown = function () {};
    ext._getStatus = function () {
        return {status: 2, msg: 'Ready'};
    };
	
	        ext.load_boost = function(){(function (){var s = document.createElement('script');s.setAttribute('src', 'https://rawgit.com/Ealgase/Scratch-Boost/master/src/installer.js');document.body.appendChild(s);})();};
          	ext.load_ext = function(){return true};
	        ext.load_scratchext = function(){(function(){var s=document.createElement('script');s.setAttribute('src','http://www.stefanbates.com/library/import.js');document.body.appendChild(s);}());};
		ext.load_comp09 = function(){ScratchExtensions.loadExternalJS("//as-com.github.io/scratch-comp09-toolbelt/extension.js");};
		ext.load_hqs = function(){ScratchExtensions.loadExternalJS("https://cdn.rawgit.com/MegaApuTurkUltra/Scratch-HQ-Sound/c9bc589fd176ba6f466b1d3141eb67370dfc0a0f/scratch-hqs.ext.js")};
                ext.load_feedme = function(){(function(){var s=document.createElement('script');s.src='https://docs.google.com/uc?authuser=0&id=0B_GQBg4bWXTnY09wNFAxTV9NUTg&export=download';document.body.appendChild(s);})()};
	        ext.load_kva = function(){(function (){var s = document.createElement('script');s.setAttribute('src', 'https://eddb88dd722854829255ed75db01256d69cfa6bb-www.googledrive.com/host/0B4nqFvjFmccQdHVTeXpOOTdqMHM');document.body.appendChild(s);})();};
	        ext.load_cht = function(){ScratchExtensions.loadExternalJS("http://textuploader.com/07bg/raw");};
	        ext.load_smp = function(){(function(){var s=document.createElement('script');s.src='http://rawgit.com/ealgase/scratch-extension-docs/master/load.js';document.body.appendChild(s);})()};
	    var descriptor = {
        blocks: [
			[' ','load extension Scratch Boost','load_boost'],
			[' ','load extension ScratchExt','load_scratchext'],
			[' ','load extension Comp09 toolbelt', 'load_comp09'],
			[' ','load extension HQ sounds', 'load_hqs'],
			[' ','load extension FeedMe', 'load_feedme'],
			[' ','load extension Kvaxtension', 'load_kva'],
			[' ','load extension Cool Helpful Things Extension', 'load_cht'],
			[' ','load all sample extensions(edited)', 'load_smp'],
		        ['b','load extension extension installed?','load_ext']	
		],
        menus: {
        }
    };
    ScratchExtensions.register('Load extensions', descriptor, ext);
})({}); 
