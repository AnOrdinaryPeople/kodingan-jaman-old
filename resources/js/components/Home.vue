<template>
	<div class="container">
		<div class="row">
			<div class="col-8">
				<h1>Welcome to.. ehhh <i>this</i> website \ :v /</h1>
				<h4>This is not for beginner.. :'(</h4>
				<p>Because there's no description..<br>For the example "Why this code working at the website? when i try it, this not working >:C"<br>Or.... something like that >:D<br>By the way <i>this</i> website for whom have an experience:</p>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>jQuery</li>
					<li>PHP</li>
					<li>Bootstrap</li>
					<li>Basic Laravel knowledge (optional)</li>
					<li>Basic Vue knowledge (optional)</li>
				</ol>
			</div>
			<div class="col">
				<img :src="img" class="spin">
			</div>
		</div>
		<p>If you have no experience like the above you can check the <span class="badge badge-primary" title="Did you think this clickable? NO! YOU F**L >:)">sauce</span> at sidebar<br>Well..... that it....? Ah.. whatever if you want look <i>this</i> website without experience like the above, i dont care <strong>jUsT tAkE a LoOk</strong> :p</p>
		<hr>
		<h1>Just a dummy paragraph..</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum maximus volutpat. Nunc efficitur urna non sapien sagittis cursus. Praesent hendrerit, nulla vitae imperdiet fermentum, mauris elit tristique tortor, tincidunt suscipit nulla ante nec eros. Nulla auctor non erat sit amet tincidunt. Curabitur consequat, ex vel hendrerit tincidunt, arcu purus mollis ipsum, vulputate molestie magna lorem quis dolor. Maecenas gravida magna a sapien porta tristique. Etiam quis efficitur elit, quis egestas nisi. Nullam venenatis suscipit facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ac iaculis nisl. Nullam ullamcorper, magna sit amet mollis lobortis, nulla nibh porttitor arcu, vitae accumsan sapien mi ac leo. Maecenas nec pharetra eros. Duis eleifend lacinia augue id facilisis. Donec molestie tristique dictum. Mauris ante eros, convallis at gravida id, bibendum vel metus.</p>
		<p>Aliquam et libero vitae odio elementum dapibus vehicula id orci. Phasellus mi orci, pretium ut arcu eu, blandit aliquet elit. Aenean sed auctor magna. Vivamus interdum arcu nec imperdiet semper. Aliquam eget convallis metus. Praesent accumsan elit sed magna elementum congue. Etiam non tortor ultricies, gravida lectus id, pretium lorem.</p>
		<p>In tincidunt mauris vel fringilla tempus. Nullam porta mattis sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, magna vel mollis tempor, elit sem suscipit ante, vitae egestas turpis turpis sed nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta rhoncus metus ac convallis. Integer in dapibus velit, ac egestas lectus. Nullam at consectetur est. Nulla finibus auctor velit in dapibus. Vivamus sit amet ante luctus, rutrum elit non, euismod odio. Fusce fermentum eu magna quis auctor. Ut eu orci est.</p>
		<p>Aliquam ante lacus, luctus sed turpis a, imperdiet consequat nisi. In facilisis quam in gravida egestas. Proin pulvinar est ex, nec sagittis quam imperdiet ut. Nulla congue consectetur laoreet. Donec sed massa eu libero pulvinar tempor non sed lorem. Quisque facilisis elit ut viverra laoreet. Etiam bibendum convallis imperdiet. In hac habitasse platea dictumst. Nam nec volutpat nisi. Suspendisse orci justo, venenatis quis lectus at, imperdiet malesuada orci. Donec vel purus ipsum. Etiam condimentum, metus et aliquet finibus, leo lectus volutpat turpis, id pellentesque dui dolor ut justo.</p>
		<p>Quisque risus lorem, gravida ac dictum at, venenatis quis velit. Cras in vestibulum arcu. Curabitur laoreet euismod libero, sed accumsan turpis posuere ac. Morbi pretium venenatis aliquet. Ut vehicula nulla sed ex suscipit, eget interdum mauris interdum. Duis gravida leo sed eros faucibus interdum. Pellentesque a ex a neque tempus tempor ut eu neque. Aliquam lacinia tortor eget placerat hendrerit. Etiam in dolor lobortis, dapibus lectus vel, mollis mauris.</p>
		<br>
		<blockquote class="blockquote">
			<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
			<footer class="blockquote-footer">Someone famous in <cite>Gabud Human</cite></footer>
		</blockquote>
	</div>
</template>

<script>
	export default{
		name: 'home',
		data: () => ({img: window.location.protocol+'//'+window.location.hostname+':'+window.location.port+'/img/logo.ico'})
	}
</script>