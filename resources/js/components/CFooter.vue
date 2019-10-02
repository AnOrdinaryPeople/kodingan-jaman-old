<template>
	<footer class="bg-dark py-2 text-light text-center">
		<p id="footer-desc">&copy;</p>
	</footer>
</template>

<script>
	export default{
		name: 'c-footer',
		mounted(){
			document.getElementById('footer-desc').innerHTML += ' '+new Date().getFullYear()+' Dapid. All Right Reserved'
		}
	}
</script>