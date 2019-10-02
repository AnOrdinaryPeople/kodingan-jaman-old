<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h4>Result</h4>
				<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
					<p>4 + 5 = 9<br>5 - 9 = -4<br><br>Im BATMAN</p>
				</div>
			</div>
			<div class="col">
				<h4>Code</h4>
				<pre class=" language-php"><code class=" language-php"><span class="token variable">$plus</span> <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token variable">$min</span> <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">-</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token variable">$first_name</span> <span class="token operator">=</span> <span class="token double-quoted-string string">"Im"</span><span class="token punctuation">;</span>
<span class="token variable">$last_name</span> <span class="token operator">=</span> <span class="token double-quoted-string string">"BATMAN"</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token double-quoted-string string">"4 + 5 = <span class="token interpolation"><span class="token variable">$plus</span></span>"</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"&lt;br&gt;5 - 9 = <span class="token interpolation"><span class="token variable">$min</span></span>"</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token double-quoted-string string">"&lt;br&gt;&lt;br&gt;<span class="token interpolation"><span class="token variable">$first_name</span></span> <span class="token interpolation"><span class="token variable">$last_name</span></span>"</span><span class="token punctuation">;</span></code></pre>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'variables'
	}
</script>