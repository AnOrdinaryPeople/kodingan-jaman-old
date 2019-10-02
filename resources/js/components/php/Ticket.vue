<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h4>Input</h4>
				<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
					<div class="form-group">
						<label>Full name</label>
						<input class="form-control" type="text" v-model="name">
					</div>
					<div class="form-group">
						<label>Address to pick up</label>
						<textarea class="form-control" v-model="address"></textarea>
					</div>
					<div class="form-group">
						<label>Phone number</label>
						<input class="form-control" type="text" v-model="phone">
					</div>
					<div class="form-group">
						<label>Date of departure</label>
						<input class="form-control" type="date" v-model="date">
					</div>
					<div id="destination" class="form-group">
						<label>Destination</label>
						<div class="custom-control custom-radio">
							<input id="radio-first" class="custom-control-input" type="radio" v-model="dest" value="Bandung - Jakarta">
							<label class="custom-control-label" for="radio-first">Bandung - Jakarta</label>
						</div>
						<div class="custom-control custom-radio">
							<input id="radio-second" class="custom-control-input" type="radio" v-model="dest" value="Bandung - Singapore">
							<label class="custom-control-label" for="radio-second">Bandung - Singapore</label>
						</div>
						<div class="custom-control custom-radio">
							<input id="radio-third" class="custom-control-input" type="radio" v-model="dest" value="Bandung - Italy">
							<label class="custom-control-label" for="radio-third">Bandung - Italy</label>
						</div>
						<div class="custom-control custom-radio">
							<input id="radio-fourth" class="custom-control-input" type="radio" v-model="dest" value="Bandung - Mars">
							<label class="custom-control-label" for="radio-fourth">Bandung - Mars</label>
						</div>
					</div>
					<div class="form-group">
						<label>Amount ticket</label>
						<select id="amount" class="form-control" v-model="amount"></select>
					</div>
					<button class="btn btn-primary" @click="submit">Submit</button>
				</div>
			</div>
			<div class="col">
				<h4>Code</h4>
				<pre class=" language-php"><code class=" language-php"><span class="token keyword">echo</span> <span class="token double-quoted-string string">"
Date payment : "</span><span class="token punctuation">.</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token single-quoted-string string">'m-d-Y h:i:s'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"&lt;br&gt;
Ticket code : "</span><span class="token punctuation">.</span><span class="token function">rand</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"&lt;br&gt;
Full Name : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>&lt;br&gt;
Address to pick up : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>address<span class="token punctuation">]</span></span>&lt;br&gt;
Phone Number : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>phone<span class="token punctuation">]</span></span>&lt;br&gt;
Date of departure : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>date<span class="token punctuation">]</span></span>&lt;br&gt;
Destination : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>dest<span class="token punctuation">]</span></span>&lt;br&gt;
Amount ticket : <span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>amount<span class="token punctuation">]</span></span>&lt;br&gt;
Total : Rp "</span><span class="token punctuation">.</span><span class="token function">number_format</span><span class="token punctuation">(</span><span class="token number">95000</span> <span class="token operator">*</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'amount'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
			</div>
		</div>
		<div class="container mt-2">
			<h4>Result</h4>
			<div class="w-100 bg-custom-dark text-light rounded px-4 py-3">
				<p id="ticket-result"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'ticket',
		data: () => ({
			name: '',
			address: '',
			phone: '',
			date: '',
			dest: '',
			amount: ''
		}),
		methods: {
			submit(){
				var date = new Date()
				document.getElementById('ticket-result').innerHTML = `
					Date payment : `+(date.getMonth()+1)+`-`+date.getDate()+`-`+date.getFullYear()+` `+date.getHours()+`:`+date.getMinutes()+`:`+date.getSeconds()+`<br>
					Ticket Code : `+(Math.floor(Math.random() * 10000) + 1000)+`<br>
					Full Name : `+this.name+`<br>
					Address to pick up : `+this.address+`<br>
					Phone Number : `+this.phone+`<br>
					Date of departure : `+this.date+`<br>
					Destination : `+this.dest+`<br>
					Amount ticket : `+this.amount+`<br>
					Total : Rp `+(95000 * this.amount).toLocaleString('en-US')
			}
		},
		mounted(){
			for(var i=1; i <= 4; i++) document.getElementById('amount').innerHTML += `<option value="`+i+`">`+i+`</option>`
		}
	}
</script>