<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h4>Input</h4>
				<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
					<div class="form-group">
						<label>Name</label>
						<input class="form-control" :class="check ? 'is-invalid': ''" type="text" v-model="name">
					</div>
					<button class="btn btn-primary" @click="submit">Submit</button>
				</div>
			</div>
			<div class="col">
				<h4>Code</h4>
				<pre class=" language-php"><code class=" language-php"><span class="token comment">// process.php</span>
<span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'name'</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token single-quoted-string string">''</span> <span class="token operator">?</span> <span class="token function">header</span><span class="token punctuation">(</span><span class="token single-quoted-string string">'location:inputValidation.php?error=true'</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">echo</span> <span class="token double-quoted-string string">"Hello <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>!"</span><span class="token punctuation">;</span></code></pre> <pre class=" language-php"><code class=" language-php"><span class="token comment">&lt;!-- inputValidation.php --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control <span class="token php language-php"><span class="token delimiter important">&lt;?=</span> <span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'error'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token single-quoted-string string">'is-invalid'</span> <span class="token punctuation">:</span> <span class="token single-quoted-string string">''</span> <span class="token delimiter important">?&gt;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
			</div>
		</div>
		<div class="container mt-2">
			<h4>Result</h4>
			<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
				<p id="validation-result"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'validation',
		data: () => ({
			name: '',
			check: false
		}),
		methods: {
			submit(){
				var id = document.getElementById('validation-result')

				this.name ? this.check = false : this.check = true
				!this.check ? id.innerHTML = 'Hello '+this.name+'!' : id.innerHTML = ''
			}
		}
	}
</script>