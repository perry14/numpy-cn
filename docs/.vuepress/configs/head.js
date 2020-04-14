module.exports = [
  ['link', {
    rel: 'dns-prefetch',
    href: `//cdn.bootcss.com`
  }],
  ['link', {
    rel: 'dns-prefetch',
    href: `//cdn.mathjax.org`
  }],
  // 使主题能够支持数学公式
  ['script', {
    type: 'text/x-mathjax-config'
  }, `
  MathJax.Hub.Config({
    showProcessingMessages: false, //关闭js加载过程信息
    messageStyle: "none", //不显示信息
    tex2jax: {
      "inlineMath": [["$", "$"], ["\\\\(", "\\\\)"]], 
      "processEscapes": true, 
      "ignoreClass": "document",
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a', 'td'],
      "processClass": "math|output_area"
    },
    "HTML-CSS": {
      showMathMenu: false
    }
  })
  `],
  ['script', {
    src: '//cdn.bootcss.com/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML'
  }],
  // 监听路由重新渲染数学公式
  ['script', {}, `
    (function() {
      var url1 = window.location.href;
      var url2 = window.location.href;
      setInterval(function() {
        if (url1 === url2) {
          url2 = window.location.href;
        } else {
          url1 = url2;
          if (window.MathJax) window.MathJax.Hub.Typeset();
        }
      }, 200);
    })();
  `],
  ['link', {
    rel: 'icon',
    href: `/logo.png`
  }],
  ['link', {
    rel: 'manifest',
    href: '/manifest.json'
  }],
  ['meta', {
    name: 'theme-color',
    content: '#489dc1'
  }],
  ['meta', {
    name: 'apple-mobile-web-app-capable',
    content: 'yes'
  }],
  ['meta', {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black'
  }],
  ['link', {
    rel: 'apple-touch-icon',
    href: `/icons/apple-touch-icon-152x152.png`
  }],
  ['link', {
    rel: 'mask-icon',
    href: '/icons/safari-pinned-tab.svg',
    color: '#3eaf7c'
  }],
  ['meta', {
    name: 'msapplication-TileImage',
    content: '/icons/msapplication-icon-144x144.png'
  }],
  ['meta', {
    name: 'msapplication-TileColor',
    content: '#000000'
  }],
  // 百度统计
  ['script', {}, `
    (function() {
      var onDocumentComplete = function() { 
        if (document.readyState =='complete') {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?a809b6f7e6517af8c15c6076273e80fe";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        }
      }
      document.onreadystatechange = onDocumentComplete; //当页面加载状态改变的时候执行这个方法. 
    })();
  `],
];