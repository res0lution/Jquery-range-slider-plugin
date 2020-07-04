import * as $ from "jquery";

import { ISliderSettings } from "./model/SliderSettings";
import { SliderPresenter } from "./presenter/SliderPresenter";
import { SliderPresenterAPI } from "./presenter/SliderPresenterApi";
import "./view/styles.css";

(function ($: JQueryStatic) {
  let sliders: SliderPresenter[] = new Array();

  $.fn["slider"] = function () {
    if (typeof arguments[0] === "object" || arguments[0] === undefined) {
      let settings: ISliderSettings = arguments[0];
      return this.each(function (i: number, val: object) {
        let htmlElem = val;
        sliders.push(new SliderPresenter(htmlElem, settings));
      });
    }

    if (typeof arguments[0] === "string") {
      let option = arguments[0];
      let setting = arguments[1];
      let value = arguments[2];
      let valuesOnOfTwoVals = arguments[3];
      let retunValue: any;
      this.each(function (i: number, val: object) {
        let htmlElem = val;
        sliders.forEach((val, i) => {
          if (val.view.slider === htmlElem) {
            retunValue = SliderPresenterAPI.enterPoint(
              val,
              option,
              setting,
              value,
              valuesOnOfTwoVals
            );
          }
        });
      });
      return retunValue;
    }
  };
})(jQuery);
