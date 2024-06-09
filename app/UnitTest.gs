function test() {
  const unitTest = new UnitTest();
  unitTest.doGetTest();
  unitTest.doGetWithoutParamTest();
}

class UnitTest {
  doGetTest() {
    const officeId = 1;
    const param = {"parameter": { "officeid": officeId }};
    doGet(param);
  }

  doGetWithoutParamTest() {
    const param = {"parameter": {}};
    doGet(param);
  }
}
