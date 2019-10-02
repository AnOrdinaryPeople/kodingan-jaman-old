<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h4>Input</h4>
				<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
					<div class="row">
						<div class="col-6">
							<div class="form-group">
								<label>First number</label>
								<input class="form-control" type="number" v-model="first">
							</div>
						</div>
						<div class="col-6">
							<div class="form-group">
								<label>Second number</label>
								<input class="form-control" type="number" v-model="second">
							</div>
						</div>
					</div>
					<div class="form-group">
						<label>Operator</label>
						<select class="form-control" v-model="operator">
							<option value="+">+</option>
							<option value="-">-</option>
							<option value="*">*</option>
							<option value="/">/</option>
						</select>
					</div>
					<button class="btn btn-primary" @click="submit">Submit</button>
				</div>
			</div>
			<div class="col">
				<h4>Code</h4>
				<pre class=" language-php"><code class=" language-php"><span class="token variable">$result</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'operator'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token single-quoted-string string">'+'</span><span class="token punctuation">:</span>
		<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'first'</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'second'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> <span class="token single-quoted-string string">'-'</span><span class="token punctuation">:</span>
		<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'first'</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'second'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> <span class="token single-quoted-string string">'*'</span><span class="token punctuation">:</span>
		<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'first'</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'second'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> <span class="token single-quoted-string string">'/'</span><span class="token punctuation">:</span>
		<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'first'</span><span class="token punctuation">]</span> <span class="token operator">/</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'second'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">echo</span> <span class="token double-quoted-string string">"
	&lt;p&gt;
		<span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>first<span class="token punctuation">]</span></span> <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>operator<span class="token punctuation">]</span></span> <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>second<span class="token punctuation">]</span></span> = <span class="token interpolation"><span class="token variable">$result</span></span>
	&lt;/p&gt;
"</span><span class="token punctuation">;</span></code></pre>
			</div>
		</div>
		<div class="container mt-2">
			<h4>Result</h4>
			<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
				<p id="cal-result"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'calculator',
		data: () => ({
			first: 0,
			second: 0,
			operator: ''
		}),
		methods: {
			submit(){
				var result = 0,
					a = Number(this.first),
					b = Number(this.second)
				
				switch(this.operator){
					case '+':
						result = a + b
						break
					case '-':
						result = a - b
						break
					case '*':
						result = a * b
						break
					case '/':
						result = a / b
						break
					default:
						result = 0
						break
				}
				document.getElementById('cal-result').innerHTML = this.first+' '+this.operator+' '+this.second+' = '+result
			}
		}
	}
</script>