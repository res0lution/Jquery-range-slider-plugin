import { ISliderSettings } from "../model/SliderSettings";

export class SliderPresenter {
  static init($: any) {
    $.fn.slider = function (node: HTMLElement, setting?: ISliderSettings): any {
      return node;
    };
  }
}

