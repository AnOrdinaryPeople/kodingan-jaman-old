<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h4>Input</h4>
				<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
					<h4>Check odd or even</h4>
					<div class="form-group">
						<label>Number</label>
						<input class="form-control" type="number" v-model="number">
					</div>
					<button class="btn btn-primary" @click="submit">Submit</button>
				</div>
			</div>
			<div class="col">
				<h4>Code</h4>
				<pre class=" language-php"><code class=" language-php"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'number'</span><span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token single-quoted-string string">'odd'</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token single-quoted-string string">'even'</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token double-quoted-string string">"&lt;p&gt;<span class="token interpolation"><span class="token variable">$result</span></span>&lt;/p&gt;"</span><span class="token punctuation">;</span></code></pre>
			</div>
		</div>
		<div class="container mt-2">
			<h4>Result</h4>
			<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
				<p id="if-else-result"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'if-else',
		data: () => ({
			number: 0
		}),
		methods: {
			submit(){
				document.getElementById('if-else-result').innerHTML = this.number % 2 ? 'odd' : 'even'
			}
		}
	}
</script>