/*
 * @Author: wangguixing
 * @Date: 2023-06-30 21:33:35
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-06-30 21:41:39
 * @FilePath: \src\UserCard.ts
 */
class UserCard extends HTMLElement {
  constructor() {
    super();
    this.initElement();
  }
  initElement() {
    this.attachShadow({ mode: "open" });
    var image = document.createElement("img");
    image.src =
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
    image.classList.add("image");

    var container = document.createElement("div");
    container.classList.add("container");

    var name = document.createElement("p");
    name.classList.add("name");
    name.innerText = "User Name";

    var email = document.createElement("p");
    email.classList.add("email");
    email.innerText = "yourmail@some-email.com";

    var button = document.createElement("button");
    button.classList.add("button");
    button.innerText = "Follow";

    container.append(name, email, button);
    this.shadowRoot.append(image, container);
  }
}
customElements.define("user-card", UserCard);
