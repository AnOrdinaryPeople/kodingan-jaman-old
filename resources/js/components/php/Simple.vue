<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h4>Result</h4>
				<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
					<p>Just a Text with PHP5<br>
					Reeeeeeeeeeeeeeeee</p>
				</div>
			</div>
			<div class="col">
				<h4>Code</h4>
				<pre class=" language-php"><code class=" language-php"><span class="token keyword">echo</span> <span class="token double-quoted-string string">"Just a Text with PHP"</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token double-quoted-string string">"&lt;br&gt;Reeeeeeeeeeeeeeeee"</span><span class="token punctuation">;</span></code></pre>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'simple'
	}
</script>