describe('클릭이벤트 처리 및 뷰어를 담당합니다.', () => {
    it('전달인자로 textManager가 잘 전달됐는지 확인합니다.', () => {
        const textManager = null;
        const btnEl = document.createElement('button');
        const viewerEl = document.createElement('strong');
        const inpTxt = document.createElement('input');

        //  인자가 전달되는지 확인하는 함수
        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        expect(actual).toThrowError();

    });

    it('전달인자로 요소들이 잘 전달됐는지 확인합니다.', () => {
        const textManager = new TextManager();
        const btnEl = null;
        const viewerEl = null;
        const inpTxt = null;

        //  인자가 전달되는지 확인하는 함수
        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        expect(actual).toThrowError();

    });

    let viewManager, textManager, btnEl, inpTxt, viewerEl;

    beforeEach(() => {
        textManager = new TextManager();
        btnEl = document.createElement('button');
        inpTxt = document.createElement('input');
        viewerEl = document.createElement('strong');
        viewManager = new ViewManager(textManager, { btnEl, inpTxt, viewerEl });
    });

    it('click 이벤트가 발생했을 경우 changeValue 함수가 실행됩니다.', () => {
        // 특정 모듈의 함수를 감시합니다.
        spyOn(viewManager, 'changeValue');
        btnEl.click();

        expect(viewManager.changeValue).toHaveBeenCalled();
    })

    it('updateView 함수가 실행되는지 확인합니다.', () => {
        spyOn(viewManager, 'updateView');

        viewManager.changeValue();

        expect(viewManager.updateView).toHaveBeenCalled();
    })
})