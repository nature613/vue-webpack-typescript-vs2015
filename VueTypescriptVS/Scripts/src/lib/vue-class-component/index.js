import { componentFactory, $internalHooks } from './component';
export { createDecorator } from './util';
function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push(...keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
export default Component;
//# sourceMappingURL=index.js.map