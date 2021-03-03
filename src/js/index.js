const header = (root) => `
<header>
		<a href="${root}/index.html"><img class="header-img" src="${root}/assets/img/top.png" alt="カンナガラ"></a>
		<div class="header-menu">
				<a href="${root}/src/html/about.html" class="menu-about"><span>3F4s</span></a>
				<a href="${root}/src/html/note.html" class="menu-note"><span>XZg</span></a>
				<a href="${root}/src/html/text.html" class="menu-text"><span>wgrz</span></a>
				<a href="${root}/src/html/link.html" class="menu-link"><span>lyh</span></a>
				<a href="http://clap.webclap.com/clap.php?id=kannnagara" class="menu-clap"><span>fhd(</span></a>
  	</div>
</header>
`;

const footer = (root) => `
<footer>
		<a href="#menu">sZK</a>
</footer>
`;

const favicon = (root) => `<link rel="icon" href="${root}/assets/favicon.ico" type="image/x-icon">`;

const css = (root) => `
<link rel="stylesheet" type="text/css" href="${root}/src/css/main.css">
<link rel="stylesheet" type="text/css" href="${root}/src/css/format.css">
`;

function getRelativeRoot(path) {
  const depthCount = path.split('./').length - 1;
	if (depthCount === 0) return '.'
	return Array(depthCount).fill('..').join('/')
}

function writeHeader(root, element) {
	element.insertAdjacentHTML('beforebegin', header(root));
}

function writeFooter(root, element) {
	element.insertAdjacentHTML('beforeend', footer(root));
}

function loadExternalHead(root, element) {
	element.insertAdjacentHTML('beforeend', css(root));
	element.insertAdjacentHTML('beforeend', favicon(root));
}

function load() {

	const currentPath = document.querySelector('#script-main').getAttribute('src');
	console.log(currentPath);
	if (currentPath == null) return
	const root = getRelativeRoot(currentPath);

	const headElement = document.querySelector('head');
	if (headElement != null) {
		loadExternalHead(root, headElement);
	}

	const bodyElement = document.querySelector('body');
	if (bodyElement != null) {
		writeHeader(root, bodyElement);
		writeFooter(root, bodyElement);	
	}

}