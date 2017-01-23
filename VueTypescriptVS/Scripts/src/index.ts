import * as Vue from 'vue';
import Component from 'vue-class-component';
import Greeting from './components/greeting';

// The @Component decorator indicates the class is a Vue component
@Component({
	// All component options are allowed in here
	template: `
		<div>
			<greeting />
			<button @click="onClick">Click! 2</button>
		</div>
	`,
	components: { 'greeting' : Greeting }
})
class App extends Vue {
	// Initial data can be declared as instance properties
	message: string = 'Hello!';
	// Component methods can be declared as instance methods
	onClick(): void {
		window.alert(this.message);
	}
}

new App({ el: '#app' });