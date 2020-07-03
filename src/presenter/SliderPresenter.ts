import { SliderTemplate } from "../view/SliderTemplate";
import { Slider } from "../model/Slider";
import { ISliderSettings } from "../model/SliderSettings";
import { SliderPointer } from "../view/SliderPointer";

export class SliderPresenter {
  public static NAME: string = "slider";
  public model: Slider;
  public view: SliderTemplate;

  constructor(rootElement: any, options: ISliderSettings) {
    this.model = new Slider(options);

    if (this.model.settings.settings.orientation === "vertical") {
      this.view = new SliderTemplate(rootElement, true);
    } else {
      this.view = new SliderTemplate(rootElement, false);
    }

    let onChangePointer = (event: any) => {
      let curPosInPixels: number = event.detail;
      let curPosInVal: number = this.calculateCurrPosFromPixelsToValue(
        curPosInPixels
      );
      let curPosInValWithStep = this.model.setPointerPosition(curPosInVal);
      this.model.settings.settings.value = curPosInValWithStep;
      let curPosInPercentsWithStep = this.getCurrPosFromValueToPercents(
        curPosInValWithStep
      );

      this.render(curPosInPercentsWithStep);
    };

    this.view.slider.addEventListener("changePointer", onChangePointer);
    this.initStartValue();
  }

  render(curPos: number) {
    if (this.model.settings.settings.orientation === "vertical") {
      this.view.thumb.renderCurrentPosInPercentsVertical(curPos);
    } else {
      this.view.thumb.renderCurrentPosInPercents(curPos);
    }
  }

  calculateCurrPosFromPixelsToValue(curPosInPixels: number) {
    let minVal: number = this.model.settings.settings.minVal;
    let maxVal: number = this.model.settings.settings.maxVal;
    let rangeVal: number = maxVal - minVal;
    let rangePixels: string = "1";

    if (this.model.settings.settings.orientation === "vertical") {
      rangePixels =
        this.view.slider.getBoundingClientRect().height ||
        this.view.slider.style.height;
    } else {
      rangePixels =
        this.view.slider.getBoundingClientRect().width ||
        this.view.slider.style.width;
    }

    let curPosInPercents: number =
      (curPosInPixels * 100) / parseInt(rangePixels, 10);
    let curPosInVal: number = (rangeVal * curPosInPercents) / 100;

    return curPosInVal + minVal;
  }

  getCurrPosFromValueToPercents(curPosInValue: number) {
    let minVal: number = this.model.settings.settings.minVal;
    let maxVal: number = this.model.settings.settings.maxVal;
    let rangeVal: number = maxVal - minVal;

    let currPosInPercents: number = ((curPosInValue - minVal) * 100) / rangeVal;

    return currPosInPercents;
  }

  initStartValue() {
    let curPosInValue: number = this.model.settings.settings.value;
    let curPosInValWithStep = this.model.setPointerPosition(curPosInValue);
    this.model.settings.settings.value = curPosInValWithStep;
    let curPosInPercentsWithStep = this.getCurrPosFromValueToPercents(
      curPosInValWithStep
    );

    this.view.renderCurrentPosInPercents(curPosInPercentsWithStep);
  }
}
