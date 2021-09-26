# 크롬 익스텐션 개발 메모

- 현재 manifest 버전 최신은 v3

## 기능 메모?

### chrome.action.onClicked.addListener 
- 크롬 브라우저 우측 상단의 확장프로그램 버튼 클릭 시, 동작함.
- background.js에서 사용하려면 manifest.json에 action.default_popup이 없어야됨. 
```
// Called when the user clicks on the browser action.
chrome.action.onClicked.addListener(function(tab) {
  console.log(tab);
  // No tabs or host permissions needed!
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['scripts.js'],
  },);
});
```
위와 같이 작성하는 경우 확장프로그램 버튼 클릭 시, chrome.scripting.executeScript에 의해서 target에서 files가 실행된다.
addListener에서의 tab은 현재 activeTab이고 사용하려면 manifest.json의 permission에 "activeTab"을 등록해야한다.
즉, 여기서 target은 activeTab을 의미하고 files의 scripts.js에 있는 코드를 실행하게 된다.
scripts.js에 `console.log('test');` 라고 작성 했다면 확장프로그램 버튼을 누른 탭의 개발자 도구 콘솔에 'test'가 찍히게 된다.

## TODO
- 단축키 입력 시, 해당 익스텐션 클릭 트리거 
- 익스텐션 popup이 열렸을 때, 브라우저에서 copy 이벤트가 발생할때마다 popup.html에서 copy된 문구를 저장하기 (아마 크롬이 열릴 때, 해단 익스텐션이 실행된 상태여야 하나?)
