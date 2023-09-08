{
  /**
   * enum은 관련있는 상수를 하나로 모아 그룹화 하여 유지보수를 도와주는 도구입니다.
   * enum을 사용하게 되면, 각 상수는 이름과 그에 해당하는 값을 매핑되며 그 값의 의미를 명확하게 할수있다.
   * enum은 관련있는 상수를 정의하는 방법이다. 타입이 아니다.
   *
   *
   * enum의 문제인 이름에 해당하는 값을 이용하여 할당했더라도,
   * 이후에 다른값으로 재할당 할수있던 문제를 이제는 해결됨
   *
   * 하지만 String Literal type이 더 선호됨
   *
   * 이럴때는 enum이 유용
   * 이름과 값을 매핑할수있어 이름으로 접근하기가 더 편리할때
   */

  enum Days {
    Monday = '월요일',
    Tuesday = '화요일',
    Wednesday = '수요일',
    Thursday = '목요일',
    Friday = '금요일',
    Saturday = '토요일',
    Sunday = '일요일',
  }

  let eventDay = Days.Monday;
  console.log(eventDay);
  //
}
