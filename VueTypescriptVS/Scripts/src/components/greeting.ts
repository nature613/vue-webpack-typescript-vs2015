import * as Vue from 'vue';
import Component from 'vue-class-component';

// The @Component decorator indicates the class is a Vue component
@Component({
	// All component options are allowed in here
	template: '<h1>Hello {{ name }}</h1>',

	props: ['name'],
})
export default class Greeting extends Vue {}