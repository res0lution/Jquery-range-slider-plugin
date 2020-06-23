import { SliderTemplate } from "./view/SliderTemplate";
import { Slider } from "./model/Slider";
import { SliderSettings } from "./model/SliderSettings";

describe("Model / Slider / Test initialization", () => {
  let slider = new Slider();
  let sliderSettings = new SliderSettings("single", 1, 10, 1, false);

  slider.setSettings(sliderSettings);

  it("Should to initializate slider object", () => {
    expect(slider.settings).toEqual(
      new SliderSettings("single", 1, 10, 1, false)
    );
  });
});
