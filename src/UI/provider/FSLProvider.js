/**
 * @author xukj
 * @date 2019/03/28
 * @description FSLProvider
 */
import * as React from 'react';
import Portal from '../portal';

export default class Provider extends React.Component {
    render() {
        return <Portal.Host>{this.props.children}</Portal.Host>;
    }
}
