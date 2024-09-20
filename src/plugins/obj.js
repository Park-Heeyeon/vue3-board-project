/**
 * 객체로 플러그인을 선언하는 경우 install() 메소드 내에 정의해줘야한다.
 */
const objPlugin = {
  install(app, options) {
    console.log('objPlugin app:', app, 'options: ', options);
    // app.component() 전역 컴포넌트 생성 가능
    // app.config.globalPreoperties 전역 애플리케이션 인스턴스에 속성 추가
    // app.directive 커스텀 디렉티브
    // app.provide() 리소스
  }
};
export default objPlugin;
