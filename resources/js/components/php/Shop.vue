<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h4>Input</h4>
				<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
					<h4>Mr. Oedyn Restaurant</h4>
					<div class="form-group">
						<label>Customer Name</label>
						<input class="form-control" type="text" v-model="name">
					</div>
					<div class="form-group">
						<label>Status</label>
						<div class="custom-control custom-radio">
							<input id="radio-here" class="custom-control-input" type="radio" v-model="status" value="eat here">
							<label class="custom-control-label" for="radio-here">Eat Here</label>
						</div>
						<div class="custom-control custom-radio">
							<input id="radio-home" class="custom-control-input" type="radio" v-model="status" value="bring to home">
							<label class="custom-control-label" for="radio-home">Bring to home</label>
						</div>
					</div>
					<div class="form-group">
						<label>Food</label>
						<div class="custom-control custom-checkbox">
							<input id="check-first" class="custom-control-input" type="checkbox" v-model="foods" value="25000">
							<label class="custom-control-label" for="check-first">Rice</label>
						</div>
						<div class="custom-control custom-checkbox">
							<input id="check-second" class="custom-control-input" type="checkbox" v-model="foods" value="13500">
							<label class="custom-control-label" for="check-second">Steak</label>
						</div>
						<div class="custom-control custom-checkbox">
							<input id="check-third" class="custom-control-input" type="checkbox" v-model="foods" value="8000">
							<label class="custom-control-label" for="check-third">Drink Water</label>
						</div>
					</div>
					<button class="btn btn-primary" @click="submit">Submit</button>
				</div>
			</div>
			<div class="col">
				<h4>Code</h4>
				<pre class=" language-php"><code class=" language-php"><span class="token variable">$total</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'foods'</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token variable">$food</span><span class="token punctuation">)</span> <span class="token variable">$total</span> <span class="token operator">+</span><span class="token operator">=</span> <span class="token variable">$food</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token double-quoted-string string">"
	&lt;p&gt;
		Customer <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span></span> with status \"<span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>status<span class="token punctuation">]</span></span>\"&lt;br&gt;
		Total : Rp "</span><span class="token punctuation">.</span><span class="token function">number_format</span><span class="token punctuation">(</span><span class="token variable">$total</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"
	&lt;/p&gt;
"</span><span class="token punctuation">;</span></code></pre>
			</div>
		</div>
		<div class="container mt-2">
			<h4>Result</h4>
			<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
				<p id="shop-result"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'shop',
		data: () => ({
			name: '',
			status: '',
			foods: []
		}),
		methods: {
			submit(){
				var total = 0
				
				for(var i=0; i < this.foods.length; i++) total += Number(this.foods[i])

				document.getElementById('shop-result').innerHTML = `
					Customer `+this.name+` with status "`+this.status+`"<br>
					Total : Rp `+total.toLocaleString('en-US')+`
				`
			}
		}
	}
</script>