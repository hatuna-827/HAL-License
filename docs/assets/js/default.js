window.addEventListener('DOMContentLoaded', () => {
	document.body.innerHTML = document.body.innerHTML
		.replaceAll('✔', '<span style="color:#3a3;">✔</span>')
		.replaceAll('✖', '<span style="color:#e77;">✖</span>')
})
