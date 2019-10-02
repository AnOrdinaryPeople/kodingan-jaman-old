import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import HTML from './components/html/Html.vue'
import PHP from './components/php/Php.vue'
import Projects from './components/Projects.vue'
import Modal from './components/html/Modal.vue'
import Dropdown from './components/html/Dropdown.vue'
import Card from './components/html/Card.vue'
import Simple from './components/php/Simple.vue'
import Variables from './components/php/Variables.vue'
import Personal from './components/php/Personal.vue'
import KWH from './components/php/KWH.vue'
import Ifelse from './components/php/Ifelse.vue'
import Shop from './components/php/Shop.vue'
import Calculator from './components/php/Calculator.vue'
import Loop from './components/php/Loop.vue'
import Ticket from './components/php/Ticket.vue'
import Validation from './components/php/Validation.vue'
import Crud from './components/php/Crud.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.APP_HTTP,
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			alias: '/home'
		},{
			path: '/html',
			name: 'html',
			component: HTML
		},{
			path: '/php',
			name: 'php',
			component: PHP
		},{
			path: '/projects',
			name: 'projects',
			component: Projects
		},{
			path: '/html/modal',
			name: 'modal',
			component: Modal
		},{
			path: '/html/dropdown',
			name: 'dropdown',
			component: Dropdown
		},{
			path: '/html/card',
			name: 'card',
			component: Card
		},{
			path: '/php/simple',
			name: 'simple',
			component: Simple
		},{
			path: '/php/variables',
			name: 'variables',
			component: Variables
		},{
			path: '/php/personal-info',
			name: 'personal',
			component: Personal
		},{
			path: '/php/kwh',
			name: 'kwh',
			component: KWH
		},{
			path: '/php/if-else',
			name: 'if-else',
			component: Ifelse
		},{
			path: '/php/shop',
			name: 'shop',
			component: Shop
		},{
			path: '/php/calculator',
			name: 'calculator',
			component: Calculator
		},{
			path: '/php/loop',
			name: 'loop',
			component: Loop
		},{
			path: '/php/ticket-order',
			name: 'ticket',
			component: Ticket
		},{
			path: '/php/validation',
			name: 'validation',
			component: Validation
		},{
			path: '/php/crud',
			name: 'crud',
			component: Crud
		},{
            path: '*',
            redirect: { name: 'home' }
        }
	]
})