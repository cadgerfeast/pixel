import{P as t}from"./chunks/preview.wNs3gQAm.js";import{c as n,a2 as a,G as l,w as h,o as e,j as s}from"./chunks/framework._E5sAfiq.js";const r=JSON.parse('{"title":"Actions","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/actions.md","filePath":"guide/components/actions.md"}'),p={name:"guide/components/actions.md"},g=Object.assign(p,{setup(k){return(E,i)=>(e(),n("div",null,[i[1]||(i[1]=a('<h1 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-label="Permalink to &quot;Actions&quot;">​</a></h1><p>A <code>sl-actions</code> component is an element that helps with displaying quick actions and selections in a menu.</p><p>It is used with <code>sl-action</code>, <code>sl-action-group</code> and <code>sl-action-divider</code> children elements.</p>',3)),l(t,null,{default:h(()=>i[0]||(i[0]=[s("sl-actions",null,[s("sl-action",null,"Project Settings"),s("sl-action",null,"Collaborators"),s("sl-action-divider"),s("sl-action-group",{label:"Insight"},[s("sl-action",null,"What's new?"),s("sl-action",null,"Community"),s("sl-action",null,"Support")]),s("sl-action-divider"),s("sl-action",{danger:""},"Delete Project")],-1)])),_:1}),i[2]||(i[2]=a(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Project Settings&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Collaborators&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action-divider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action-group</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Insight&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;What&#39;s new?&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Community&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Support&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action-group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action-divider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> danger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Delete Project&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sl-actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,1))]))}});export{r as __pageData,g as default};