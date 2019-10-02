<template>
	<nav class="nav nav-pills flex-column">
		<br><span>Front End</span>
		<router-link v-for="(html, key) in html_items" class="nav-link" :key="key" :to="html.route">{{ html.title }}</router-link>
		<br><span>Back End</span>
		<router-link v-for="(php, key) in php_items" class="nav-link" :key="'php-'+key" :to="php.route">{{ php.title }}</router-link>
		<br><span>Projects</span>
		<a v-for="pr in project_items" class="nav-link" :href="pr.route" target="_blank">{{ pr.title }}</a>
		<br><span>Sauce</span>
		<a v-for="sc in sauces" class="nav-link" :href="sc.route" target="_blank">{{ sc.title }}</a>
		<br>
	</nav>
</template>
<script>
	export default{
		name: 'c-side-bar',
		data: () => ({
			key: 0,
			html_items: [
				{ title: 'Modal', route: '/html/modal' },
				{ title: 'Dropdown', route: '/html/dropdown' },
				{ title: 'Card', route: '/html/card' },
			],
			php_items: [
				{ title: 'Simple PHP', route: '/php/simple' },
				{ title: 'Variables', route: '/php/variables' },
				{ title: 'Personal Info', route: '/php/personal-info' },
				{ title: 'Kilowatt Hour', route: '/php/kwh' },
				{ title: 'If Else', route: '/php/if-else' },
				{ title: 'Shop', route: '/php/shop' },
				{ title: 'Calculator', route: '/php/calculator' },
				{ title: 'Loop', route: '/php/loop' },
				{ title: 'Ticket Order', route: '/php/ticket-order' },
				{ title: 'Validation', route: '/php/validation' },
				{ title: 'CRUD', route: '/php/crud' },
			],
			project_items: [
				{ title: 'Kontakk', route: 'http://pkl-bpi.smtapps.net/kontakk' },
				{ title: 'Text to Image', route: 'http://pkl-bpi.smtapps.net/text-to-image' },
				{ title: 'URL to Image', route: 'http://pkl-bpi.smtapps.net/url-to-image' },
				{ title: 'WA Widget', route: 'http://pkl-bpi.smtapps.net/wa-widget' },
				{ title: 'Invoice', route: 'http://pkl-bpi.smtapps.net/invoice' },
				{ title: 'Organization Chart', route: 'http://pkl-bpi.smtapps.net/org-chart' },
				{ title: 'Tracking Report', route: 'http://pkl-bpi.smtapps.net/email-management' },
				{ title: 'Image Compare', route: 'http://pkl-bpi.smtapps.net/image-compare' },
				{ title: 'Video Call', route: 'http://pkl-bpi.smtapps.net/video-call' },
				{ title: 'Report Generator', route: 'http://pkl-bpi.smtapps.net/report-generator' },
				{ title: 'Postage Calculator', route: 'http://pkl-bpi.smtapps.net/postage-calculator' },
			],
			sauces: [
				{ title: 'Bootstrap', route: 'https://getbootstrap.com/docs/4.3/getting-started/introduction/' },
				{ title: 'Color Picker', route: 'https://htmlcolorcodes.com/color-picker/' },
				{ title: 'Font Awesome', route: 'https://fontawesome.com/icons?d=gallery' },
				{ title: 'Jquery', route: 'https://api.jquery.com/' },
				{ title: 'Laravel', route: 'https://laravel.com/docs/master' },
				{ title: 'Material Design', route: 'https://material.io/design/' },
				{ title: 'React', route: 'https://reactjs.org/docs/getting-started.html' },
				{ title: 'Vue', route: 'https://vuejs.org/v2/guide/' },
				{ title: 'Vuetify', route: 'https://vuetifyjs.com/en/components/api-explorer' },
			]
		})
	}
</script>