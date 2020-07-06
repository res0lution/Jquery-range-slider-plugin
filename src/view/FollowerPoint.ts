export class FollowerPoint {
  public elemHTMLElement: any;

  constructor(thumbHTML: any, isVertical: boolean) {
    this.elemHTMLElement = document.createElement("div");

    if (isVertical) {
      this.elemHTMLElement.classList.add("j-slider__follower-point_vertical");
    } else {
      this.elemHTMLElement.classList.add("j-slider__follower-point");
    }

    thumbHTML.appendChild(this.elemHTMLElement);
  }

  destroy() {
    this.elemHTMLElement.remove();
  }

  setValue(value: number) {
    this.elemHTMLElement.innerHTML = value;
  }
}

export default FollowerPoint;
