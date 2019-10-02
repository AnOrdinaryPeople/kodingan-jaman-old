<template>
	<div class="container">
		<div id="html-card-loop" class="pb-2"></div>
		<pre class=" language-html"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>html-card-loop<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'email-management'</span><span class="token punctuation">,</span> <span class="token string">'image-compare'</span><span class="token punctuation">,</span> <span class="token string">'invoice'</span><span class="token punctuation">,</span> <span class="token string">'kontakk'</span><span class="token punctuation">,</span> <span class="token string">'org-chart'</span><span class="token punctuation">,</span> <span class="token string">'text-to-image'</span><span class="token punctuation">,</span> <span class="token string">'url-to-image'</span><span class="token punctuation">,</span> <span class="token string">'video-call'</span><span class="token punctuation">,</span> <span class="token string">'wa-widget'</span><span class="token punctuation">]</span>

        loop<span class="token punctuation">:</span> <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#html-card-loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div id="card-deck-</span><span class="token template-punctuation string">`</span></span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">" class="card-deck pt-4"&gt;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#card-deck-'</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
                    &lt;div class="card"&gt;
                        &lt;img class="card-img-top" src="{{ "\{\{ asset('img') \}\}" }}</span><span class="token template-punctuation string">`</span></span><span class="token operator">+</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token operator">+</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">.jpg"&gt;&lt;/img&gt;
                        &lt;div class="card-footer"&gt;
                            &lt;h5 class="card-title"&gt;</span><span class="token template-punctuation string">`</span></span><span class="token operator">+</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;/h5&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
                <span class="token keyword">else</span> <span class="token keyword">break</span> loop
            <span class="token punctuation">}</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#html-card-loop'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;/div&gt;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre>
	</div>
</template>

<script>
	export default{
		name: 'card',
		mounted(){
			var data = ['email-management', 'image-compare', 'invoice', 'kontakk', 'org-chart', 'text-to-image', 'url-to-image', 'video-call', 'wa-widget']

            loop: for(var i = 0; i < data.length; i += 3){
                $('#html-card-loop').append(`<div id="card-deck-`+i+`" class="card-deck pt-4">`)
                for(var j = i; j < i + 3; j++){
                    if(data[j]) $('#card-deck-' + i).append(`
                        <div class="card">
                            <img class="card-img-top" src="`+window.location.protocol+`//`+window.location.hostname+`:`+window.location.port+`/img/`+data[j]+`.jpg"></img>
                            <div class="card-footer">
                                <h5 class="card-title">`+data[j].split('-').join(' ').toUpperCase()+`</h5>
                            </div>
                        </div>`)
                    else break loop
                }
                $('#html-card-loop').append(`</div>`)
            }
		}
	}
</script>