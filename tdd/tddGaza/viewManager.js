class ViewManager {
    constructor(textManager, options) {
        if (textManager.constructor !== TextManager) {
            throw Error('textManager 인스턴스가 전달되지 않았습니다.');
        }

        if (!options.btnEl || !options.inpTxt || !options.viewerEl) {
            throw Error('전달받지 못한 요소가 있습니다.');
        }

        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;
        this.textManager = textManager;

        options.btnEl.addEventListener('click', () => {
            this.changeValue();
        })
    }

    changeValue() {
        this.textManager.setValue({ data: this.inpTxt.value });
        this.updateView();
    }

    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }

}