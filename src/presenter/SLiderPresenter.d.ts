import { Slider } from "../model/Slider";
import { ISliderSettings } from "../model/SliderSettings";
import { SliderPointer } from "../view/SliderPointer";

export declare class SliderPresenter {
  model: Slider;
  view: any;
  constructor(rootElement: any, options: ISliderSettings);
  initStartValue(): void;
  render(curThumb: SliderPointer, curPos: number): void;
  setFollowerPointValue(
    curThumb: SliderPointer,
    currPosInValWithStep: number
  ): void;
  calculateCurrPosFromPixelsToValue(curPosInPixels: number): number;
  getCurrPosFromValueToPercents(curPosInValue: number): number;
  calculateFromPercentsToPixels(curPosInPercents: number): number;
}
