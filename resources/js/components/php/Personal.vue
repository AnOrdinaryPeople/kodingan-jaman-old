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
						<label>Address</label>
						<input class="form-control" type="text" v-model="address">
					</div>
					<div class="form-group">
						<label>Email</label>
						<input class="form-control" type="email" v-model="email">
					</div>
					<button class="btn btn-primary" @click="submit">Submit</button>
				</div>
			</div>
			<div class="col">
				<h4>Code</h4>
				<pre class=" language-php"><code class=" language-php"><span class="token keyword">echo</span> <span class="token double-quoted-string string">"
	&lt;p&gt;Name : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span></span> &lt;/p&gt;
	&lt;p&gt;Address : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>address<span class="token punctuation">]</span></span> &lt;/p&gt;
	&lt;p&gt;Email : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>email<span class="token punctuation">]</span></span> &lt;/p&gt;
"</span><span class="token punctuation">;</span></code></pre>
			</div>
		</div>
		<div class="container mt-2">
			<h4>Result</h4>
			<div id="personal-result" class="w-100 bg-custom-dark text-light rounded px-4 py-3"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'personal',
		data: () => ({
			name: '',
			address: '',
			email: ''
		}),
		methods: {
			submit(){
				document.getElementById('personal-result').innerHTML = `
					<p>Name : `+this.name+`</p>
					<p>Address : `+this.address+`</p>
					<p>Email : `+this.email+`</p>
				`
			}
		}
	}
</script>