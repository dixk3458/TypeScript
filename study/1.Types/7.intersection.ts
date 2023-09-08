{
  /**
   * Intersection:
   * - 다양한 타입을 섞을수있다.
   * - &와 같은 역할을한다.
   *
   */

  type Student = {
    name: string;
    studentId: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId);
  }

  internWork({
    name: '정재웅',
    studentId: 123,
    employeeId: 1,
    work: () => {},
  });
}
