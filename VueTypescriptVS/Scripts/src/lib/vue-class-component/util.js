import { $decoratorQueue } from './component';
export const noop = () => { };
export function createDecorator(factory) {
    return (_, key, index) => {
        if (typeof index !== 'number') {
            index = undefined;
        }
        $decoratorQueue.push(options => factory(options, key, index));
    };
}
export function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}
//# sourceMappingURL=util.js.map