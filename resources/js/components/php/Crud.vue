<template>
	<div>
		<div class="container">
			<div class="container">
				<h4>Result</h4>
				<table class="table table-striped">
					<thead class="thead-dark">
						<tr>
							<th>Name</th>
							<th>Gender</th>
							<th colspan="2">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input class="form-control" :class="error[0] ? 'is-invalid' : ''" type="text" v-model="name"></td>
							<td><input class="form-control" :class="error[1] ? 'is-invalid' : ''" type="number" v-model="gender" min="0" max="1" placeholder="0 / 1"></td>
							<td colspan="2"><button class="btn btn-success btn-block" @click="submit">Add person</button></td>
						</tr>
						<tr v-for="(i, key) in items">
							<td>{{ i.name }}</td>
							<td>{{ i.gender > 0 ? 'male' : 'female' }}</td>
							<td><button class="btn btn-primary btn-block" @click="edit(key)">Edit</button></td>
							<td><button class="btn btn-danger btn-block" @click="destroy(key)">Delete</button></td>
						</tr>
					</tbody>
				</table>
			</div>
			<h4>Code</h4>
			<div class="row">
				<div class="col-6">
					<pre class=" language-php"><code class=" language-php"><span class="token comment">// DB.php</span>
<span class="token keyword">class</span> <span class="token class-name">DB</span><span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token variable">$connect</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		self<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token variable">$connect</span> <span class="token operator">=</span> <span class="token function">mysqli_connect</span><span class="token punctuation">(</span><span class="token double-quoted-string string">"hostname"</span><span class="token punctuation">,</span><span class="token double-quoted-string string">"username"</span><span class="token punctuation">,</span><span class="token double-quoted-string string">"password"</span><span class="token punctuation">,</span><span class="token double-quoted-string string">"my_database"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function">escape</span><span class="token punctuation">(</span><span class="token variable">$escape</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">mysqli_real_escape_string</span><span class="token punctuation">(</span>self<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token variable">$connect</span><span class="token punctuation">,</span><span class="token variable">$escape</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$row</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">mysqli_num_rows</span><span class="token punctuation">(</span><span class="token variable">$row</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">mysqli_query</span><span class="token punctuation">(</span>self<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token variable">$connect</span><span class="token punctuation">,</span><span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">mysqli_fetch_array</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token variable">$info</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token variable">$query</span> <span class="token operator">=</span> self<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token variable">$array</span> <span class="token operator">=</span> <span class="token function">mysqli_fetch_array</span><span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token variable">$info</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$array</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> <span class="token variable">$info</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">mysqli_close</span><span class="token punctuation">(</span>self<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token variable">$connect</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">DB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
				</div>
				<div class="col-6">
					<pre class=" language-php"><code class=" language-php"><span class="token comment">&lt;!-- HTML Code --&gt;</span>
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// index.php</span>
<span class="token keyword">include</span> <span class="token single-quoted-string string">'DB.php'</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token constant">DB</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token single-quoted-string string">'select * from persons'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token delimiter important">?&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?=</span> <span class="token variable">$key</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'name'</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?=</span> <span class="token variable">$key</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'gender'</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token single-quoted-string string">'male'</span> <span class="token punctuation">:</span> <span class="token single-quoted-string string">'female'</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">endforeach</span><span class="token punctuation">;</span><span class="token constant">DB</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
<span class="token comment">&lt;!-- HTML Code --&gt;</span></code></pre> <pre class=" language-php"><code class=" language-php"><span class="token comment">// add.php</span>
<span class="token keyword">include</span> <span class="token single-quoted-string string">'DB.php'</span><span class="token punctuation">;</span>

<span class="token constant">DB</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token double-quoted-string string">"insert into persons values(default, '<span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>', '<span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>gender<span class="token punctuation">]</span></span>')"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token single-quoted-string string">'location:index.php'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <pre class=" language-php"><code class=" language-php"><span class="token comment">&lt;!-- Modal Code --&gt;</span>
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// index.php</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token constant">DB</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token single-quoted-string string">'select * from persons where id=$_GET[id]'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token php language-php"><span class="token delimiter important">&lt;?=</span> <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'name'</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-group<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Gender<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token php language-php"><span class="token delimiter important">&lt;?=</span> <span class="token variable">$data</span><span class="token punctuation">[</span><span class="token single-quoted-string string">'gender'</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Modal Code --&gt;</span></code></pre> <pre class=" language-php"><code class=" language-php"><span class="token comment">// update.php</span>
<span class="token keyword">include</span> <span class="token single-quoted-string string">'DB.php'</span><span class="token punctuation">;</span>

<span class="token constant">DB</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token double-quoted-string string">"update persons set name='<span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span></span>', gender='<span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>gender<span class="token punctuation">]</span></span>' where id=<span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span></span>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token single-quoted-string string">'location:index.php'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <pre class=" language-php"><code class=" language-php"><span class="token comment">// delete.php</span>
<span class="token keyword">include</span> <span class="token single-quoted-string string">'DB.php'</span><span class="token punctuation">;</span>

<span class="token constant">DB</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token double-quoted-string string">"delete from persons where id=<span class="token interpolation"><span class="token variable">$_POST</span><span class="token punctuation">[</span>id<span class="token punctuation">]</span></span>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token single-quoted-string string">'location:index.php'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
				</div>
			</div>
		</div>
		<div id="edit-modal" class="modal fade" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Edit</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                <span aria-hidden="true">x</span>
			            </button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label>Name</label>
							<input class="form-control" :class="editE[0] ? 'is-invalid' : ''" type="text" v-model="editN">
						</div>
						<div class="form-group">
							<label>Gender</label>
							<input class="form-control" :class="editE[1] ? 'is-invalid' : ''" type="number" v-model="editG" min="0" max="1" placeholder="0 / 1">
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-secondary" data-dismiss="modal">Cancel</button>
		                <button class="btn btn-primary" @click="update(editK)">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'crud',
		data: () => ({
			name: '',
			gender: '',
			items: [{
				name: 'Mang Oejang',
				gender: 1
			},{
				name: 'Ningsyih',
				gender: 0
			}],
			editN: '', editG: 0, editK: 0, editE: '',
			error: ''
		}),
		methods: {
			submit(){
				this.error = [false, false]
				
				if(this.name == '') this.error[0] = true
				if(this.gender == '' || this.gender < 0 || this.gender > 1) this.error[1] = true
				
				if(!this.error[0] && !this.error[1]){
					this.items.push({
						name: this.name,
						gender: this.gender
					})
					this.name = ''
					this.gender = ''
				}
			},
			edit(key){
				this.editE = [false, false]
				this.editK = key
				this.editN = this.items[key].name
				this.editG = this.items[key].gender

				$('#edit-modal').modal()
			},
			update(key){
				this.editE = [false, false]
				
				if(this.editN == '') this.editE[0] = true
				if(this.editG == '' || this.editG < 0 || this.editG > 1) this.editE[1] = true
				
				if(!this.editE[0] && !this.editE[1]){
					this.items[key].name = this.editN
					this.items[key].gender = this.editG

					$('#edit-modal').modal('hide')
				}
			},
			destroy(key){
				Vue.delete(this.items, key)
			}
		}
	}
</script>