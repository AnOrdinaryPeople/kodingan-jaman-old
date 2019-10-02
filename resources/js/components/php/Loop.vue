<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h4>Input</h4>
				<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
					<div class="form-group">
						<label>Number</label>
						<input class="form-control" type="number" v-model="number" min="0">
					</div>
					<button class="btn btn-primary" @click="submit">Submit</button>
				</div>
			</div>
			<div class="col">
				<h4>Code</h4>
				<pre class=" language-php"><code class=" language-php"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$i</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'number'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$j</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$j</span> <span class="token operator">&lt;</span> <span class="token variable">$i</span><span class="token punctuation">;</span> <span class="token variable">$j</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token keyword">echo</span> <span class="token single-quoted-string string">'*'</span><span class="token punctuation">;</span>
	
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$k</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$k</span> <span class="token operator">&lt;=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'number'</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token variable">$j</span><span class="token punctuation">;</span> <span class="token variable">$k</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token keyword">echo</span> <span class="token single-quoted-string string">'-'</span><span class="token punctuation">;</span>
	
	<span class="token keyword">echo</span> <span class="token single-quoted-string string">'&lt;br&gt;'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
			</div>
		</div>
		<div class="container mt-2">
			<h4>Result</h4>
			<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
				<p id="loop-result"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'loop',
		data: () => ({
			number: 0
		}),
		methods: {
			submit(){
				var doc = document.getElementById('loop-result')
				doc.innerHTML = ''

				for(var n=1; n <= this.number; n++){
					for(var o=0; o < n; o++) doc.innerHTML += '*'
					for(var p=0; p <= this.number - o; p++) doc.innerHTML += '-'
					doc.innerHTML += '<br>'
				}
			}
		}
	}
</script>