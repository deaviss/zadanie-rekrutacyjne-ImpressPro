function hide(id) {
	var list = [
		document.querySelector('#faq1'),
		document.querySelector('#faq2'),
		document.querySelector('#faq3'),
		document.querySelector('#faq4'),
		document.querySelector('#faq5'),
		document.querySelector('#faq6'),
	]
	list.forEach(e => {
		if (e.classList.contains('rozwiniety')) {
			e.classList.remove('rozwiniety')
			e.classList.add('nierozwiniety')
			e.style['transition'] = 'all 0.3s'
			e.children[0].style['border-radius'] = '10px';
			e.children[1].style.display = 'none';
			e.children[0].children[0].innerText = '+'
		}
	});

	id.classList.add('rozwiniety');
	id.classList.remove('nierozwiniety');
	id.children[1].style.display = 'block';
	id.children[0].style['border-radius'] = '10px 10px 0px 0px';
	id.children[0].children[0].innerText = '-'
}