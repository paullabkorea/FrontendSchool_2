class ViewManager {
    constructor(textManager, options) {
        if (textManager.constructor !== TextManager) {
            //  사용자 정의 에러 만들기
            throw Error('textManager 객체가 전달되지 않았습니다.');
        }

        if (!options.btnEl || !options.viewerEl || !options.inpTxt) {
            //  사용자 정의 에러 만들기
            throw Error('전달받는 요소중 빈값이 존재합니다.');
        }

        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;
        this.textManager = textManager;

        options.btnEl.addEventListener('click', () => {
            this.changeValue();
        });
    }

    changeValue() {
        this.textManager.setValue({ data: this.inpTxt.value });
        this.updateView();
    }

    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }

}