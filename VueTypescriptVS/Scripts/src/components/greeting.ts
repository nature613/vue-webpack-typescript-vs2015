import * as Vue from 'vue';
import Component from 'vue-class-component';

// The @Component decorator indicates the class is a Vue component
@Component({
	// All component options are allowed in here
	template: '<h1>{{ greeting }}</h1>'
})
export default class Greeting extends Vue {
	// Initial data can be declared as instance properties
	greeting: string = 'Hello!';
	// Component methods can be declared as instance methods
	onClick(): void {
		window.alert(this.greeting);
	}
}