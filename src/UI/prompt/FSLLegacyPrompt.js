/**
 * @author xukj
 * @date 2019/07/02
 * @description V1版本遗留的提示框组件
 * 不再维护 FSLPromptModal/FSLPromptView/FSLPromptLoadingView
 * 替换为全局调用方式的 FSLLoading.loading('文本')
 */
import FSLPromptModal from './FSLPromptModal';
import FSLPromptView from './FSLPromptView';
import FSLPromptLoadingView from './FSLPromptLoadingView';

export default {
    Modal: FSLPromptModal, // model形式的等待框
    View: FSLPromptView, // view形式的等待框
    LoadingView: FSLPromptLoadingView, // 等待框
};
