/**
 * @author xukj
 * @date 2019/03/28
 * @description index
 */
import React from 'react';
import Portal from '../portal';
import FSLDrawerControl from './FSLDrawerControl';

function show(view, position = 'left', expand, onClose = () => {}, config) {
    const key = Portal.add(
        <FSLDrawerControl
            position={position}
            config={config}
            onClose={onClose}
            expand={expand}
            shouldClose={_key => _key == key}
            onAnimationEnd={() => Portal.remove(key)}
        >
            {view}
        </FSLDrawerControl>,
    );
    return key;
}

function hide(key) {
    FSLDrawerControl.hide(key);
}

export default {
    left(view, expand, config) {
        return show(view, 'left', expand, () => {}, config);
    },
    right(view, expand, config) {
        return show(view, 'right', expand, () => {}, config);
    },
    top(view, expand, config) {
        return show(view, 'top', expand, () => {}, config);
    },
    bottom(view, expand, config) {
        return show(view, 'bottom', expand, () => {}, config);
    },
    show,
    hide,
};
