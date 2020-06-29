import * as $ from "jquery";

import { SliderPresenter } from "./Presenter/SliderPresenter";
import { SliderTemplate } from "./view/SliderTemplate";
import { Slider } from "./model/Slider";
import { SliderSettings } from "./model/SliderSettings";

describe("Model / Slider / Test initialization", () => {
  let slider = new Slider();

  it("Should initializate slider object", () => {
    slider.setSettings({
      range: false,
      minVal: 1,
      maxVal: 10,
      stepVal: 1,
    });

    expect(slider.settings).toEqual(
      new SliderSettings({
        range: false,
        minVal: 1,
        maxVal: 10,
        stepVal: 1,
      })
    );
  });

  it("Should change slider settings", () => {
    slider.settings.setMaxVal(100);

    expect(slider.settings).toEqual(
      new SliderSettings({
        range: false,
        minVal: 1,
        maxVal: 100,
        stepVal: 1,
      })
    );
  });
});

describe("Model / Slider / Test moving", () => {
  let slider = new Slider({
    minVal: 20,
    maxVal: 100,
    stepVal: 2,
  });

  slider.settings.setStepVal(5);

  it("Should change pointer position", () => {
    slider.setPointerPosition(58);
    expect(slider.pointer).toEqual(60);
  });

  it("Should change pointer position", () => {
    slider.setPointerPosition(92);
    expect(slider.pointer).toEqual(90);
  });
});

describe("View / Slider template / Test of setting pointer positions", () => {
  let shadowSlider = document.createElement("div");
  shadowSlider.classList.add("slider");

  let slider = new SliderTemplate(shadowSlider);

  slider.$slider.style.cssText = "width: 300px";

  it("Curr position should be set", () => {
    slider.currPos = 150;
    expect(slider.currPos).toEqual(150);
  });

  it("Should update value of curr position on change", () => {
    slider.currPos = 100;
    expect(slider.thumb.style.left).toEqual("33%");

    slider.currPos = 236;
    expect(slider.thumb.style.left).toEqual("79%");
  });
});

describe("Presenter / SliderPresenter", () => {
  let shadowSlider = document.createElement("div");
  shadowSlider.classList.add("slider");

  const $ = require("jquery");
  SliderPresenter.init($);

  console.log($(".slider").slider({ range: true }));
}); 
