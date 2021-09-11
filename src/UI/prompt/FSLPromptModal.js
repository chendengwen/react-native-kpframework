/**
 * @class
 * @author xukj
 * @date 2018/8/10
 * @description 加载提示框 modal样式，会阻止后面的手势接收，必须关闭后才能继续操作
 * 使用方式 <FSLPromptModal show={true} text='加载中' />
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';
import FSLPromptLoadingView from './FSLPromptLoadingView';


export default class FSLPromptModal extends React.PureComponent {

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
            <Modal
                animationType='fade'
                transparent={true}
                visible={show}
                onRequestClose={() => {}}
            >
                <FSLPromptLoadingView show={true} text={text} />
            </Modal>
        );
    }
}