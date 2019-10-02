<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h4>Input</h4>
				<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
					<div class="form-group">
						<label>Full Name</label>
						<input class="form-control" type="text" v-model="name">
					</div>
					<div class="form-group">
						<label>Gender</label>
						<div class="custom-control custom-radio">
							<input id="radio-male" class="custom-control-input" type="radio" v-model="gender" value="male">
							<label class="custom-control-label" for="radio-male">Male</label>
						</div>
						<div class="custom-control custom-radio">
							<input id="radio-female" class="custom-control-input" type="radio" v-model="gender" value="female">
							<label class="custom-control-label" for="radio-female">Female</label>
						</div>
					</div>
					<div class="form-group">
						<label>KWH</label>
						<input class="form-control" type="number" v-model="kwh">
					</div>
					<button class="btn btn-primary" @click="submit">Submit</button>
				</div>
			</div>
			<div class="col">
				<h4>Code</h4>
				<pre class=" language-php"><code class=" language-php"><span class="token keyword">echo</span> <span class="token double-quoted-string string">"
	&lt;p&gt;
		Name : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span></span> &lt;br&gt;
		Gender : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>gender<span class="token punctuation">]</span></span> &lt;br&gt;
		Usage result : Rp "</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'email'</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"
	&lt;/p&gt;
"</span><span class="token punctuation">;</span></code></pre>
			</div>
		</div>
		<div class="container mt-2">
			<h4>Result</h4>
			<div id="kwh-result" class="w-100 bg-custom-dark text-light rounded px-4 py-3"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'kwh',
		data: () => ({
			name: '',
			gender: '',
			kwh: 0
		}),
		methods: {
			submit(){
				document.getElementById('kwh-result').innerHTML = `
					<p>
						Name : `+this.name+`<br>
						Gender : `+this.gender+`<br>
						Usage result : Rp `+(this.kwh*1000)+`
					</p>
				`
			}
		}
	}
</script>