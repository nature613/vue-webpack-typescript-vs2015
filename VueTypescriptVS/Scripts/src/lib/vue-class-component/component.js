import * as Vue from 'vue';
import { collectDataFromConstructor } from './data';
export const $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render'
];
// Property, method and parameter decorators created by `createDecorator` helper
// will enqueue functions that update component options for lazy processing.
// They will be executed just before creating component constructor.
export let $decoratorQueue = [];
export function componentFactory(Component, options = {}) {
    options.name = options.name || Component._componentTag;
    // prototype props.
    const proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        const descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            // methods
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data() {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    $decoratorQueue.forEach(fn => fn(options));
    // reset for other component decoration
    $decoratorQueue = [];
    // find super
    const superProto = Object.getPrototypeOf(Component.prototype);
    const Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    return Super.extend(options);
}
//# sourceMappingURL=component.js.map