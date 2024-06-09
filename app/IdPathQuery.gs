class IdPathQuery {
  constructor(parameter) {
    this.checkValue(parameter);
    this.parameter = parameter;
  }

  checkValue(parameter) {
    if (typeof(parameter) == "undefined") {
      throw Error("URLの事業所idが設定されていません");
    }
    if (!parameter.officeid) {
      throw Error("URLの事業所idに値が設定されていません");
    }
  }

  getId() {
    return this.parameter.officeid;
  }
}
