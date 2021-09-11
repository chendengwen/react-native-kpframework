/**
 * @class
 * @author xukj
 * @date 2018/8/10
 * @description 加载提示框 view样式，不会阻止后面组件的手势接收
 * 使用方式 <FSLPromptView show={true} text='加载中' />
 * 必须放在页面的root view节点下，否则位置会出现偏差
 */
import React from 'react';
import PropTypes from 'prop-types';
import FSLPromptLoadingView from './FSLPromptLoadingView';

export default class FSLPromptView extends React.PureComponent {

    static propTypes = {
        show: PropTypes.bool,
        text: PropTypes.string,
    };

    static defaultProps = {
        show: false,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { show, text } = this.props;
        return (
            <FSLPromptLoadingView show={show} text={text} />
        );
    }
}