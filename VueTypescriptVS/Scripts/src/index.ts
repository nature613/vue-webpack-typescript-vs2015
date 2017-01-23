import * as Vue from 'vue';
import Component from 'vue-class-component';
import Greeting from './components/greeting';

// The @Component decorator indicates the class is a Vue component
@Component({
	// All component options are allowed in here
	template: `
		<div>
			<greeting v-bind:name="userName" />
			<input v-model="userName">
			<button @click="reverse">reverse name</button>
		</div>
	`,

	components: { 'greeting' : Greeting }
})
class App extends Vue {
	// Initial data can be declared as instance properties
	userName: string = 'Hello!';
	// Component methods can be declared as instance methods
	reverse(): void {
		this.userName = this.userName.split('').reverse().join('');
	}
}

new App({ el: '#app' });