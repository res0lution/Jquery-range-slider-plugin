import * as $ from "jquery";

import { ISliderSettings } from "./Model/SliderSettings";
import { SliderPresenter } from "./Presenter/SliderPresenter";
import "./View/styles.css";

(function ($: JQueryStatic) {
  $.fn[SliderPresenter.NAME] = function (settigs: ISliderSettings) {
    return this.each(function (i: number, val: object) {
      let htmlElem = val;
      new SliderPresenter(htmlElem, settigs);
    });
  };
})(jQuery);


