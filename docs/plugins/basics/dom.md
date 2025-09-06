/**
 * @name discord_utils
 * @version 4.0.0
 * @description 각종 디스코드 기능
 * @author Zenth
 */

module.exports = class AutoHashTag {
  constructor() {
    this.patcher = BdApi.Patcher;
    this.storageKey = "AutoHashTag_Config";
    this.sendMessageFunc = null;
    this.defaultConfig = {
      mode: "option1",       
      customText3: "",       
      customSuffix4: ""      
    };
  }

  start() {
    this.sendMessageFunc = BdApi.findModuleByProps("sendMessage");
    if (!this.sendMessageFunc) {
      BdApi.showToast("sendMessage 모듈을 찾지 못했습니다!", { type: "error" });
      return;
    }

    this.patcher.before("AutoHashTag", this.sendMessageFunc, "sendMessage", (_, args) => {
      let msg = args[1];
      if (msg && typeof msg.content === "string") {
        const config = BdApi.getData("AutoHashTag", this.storageKey) || this.defaultConfig;

        switch (config.mode) {
          case "option1": {
            const prefix = "# ";
            if (!msg.content.startsWith(prefix)) msg.content = prefix + msg.content;
            break;
          }
          case "option2": {
            const prefix = "-# ";
            if (!msg.content.startsWith(prefix)) msg.content = prefix + msg.content;
            break;
          }
          case "option3": {
            const suffix = `\n-# ${config.customText3 || ""}`;
            if (!msg.content.endsWith(suffix)) msg.content += suffix;
            break;
          }
          case "option4": {
            const suffix = config.customSuffix4 || "";
            if (suffix && !msg.content.endsWith(suffix)) msg.content += suffix;
            break;
          }
        }
      }
    });

    BdApi.showToast("AutoHashTag 플러그인 활성화", { type: "success" });
  }

  stop() {
    this.patcher.unpatchAll("AutoHashTag");
    BdApi.showToast("AutoHashTag 플러그인 비활성화", { type: "info" });
  }

  getSettingsPanel() {
    const panel = document.createElement("div");
    panel.style.padding = "15px";
    panel.style.color = "#fff";

    const title = document.createElement("h3");
    title.textContent = "AutoHashTag 설정";
    title.style.marginBottom = "10px";
    panel.appendChild(title);

    const options = [
      { label: "기능 1: # 앞에 붙임", value: "option1" },
      { label: "기능 2: -# 앞에 붙임", value: "option2" },
      { label: "기능 3: 줄바꿈 + -# + 메시지 (뒤에 붙임)", value: "option3" },
      { label: "기능 4: 사용자 접미사 (뒤에 붙임)", value: "option4" }
    ];

    const config = BdApi.getData("AutoHashTag", this.storageKey) || this.defaultConfig;

    options.forEach(opt => {
      const container = document.createElement("div");
      container.style.margin = "5px 0";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "autohashtag_mode";
      radio.value = opt.value;
      radio.checked = config.mode === opt.value;
      radio.addEventListener("change", () => {
        config.mode = opt.value;
        BdApi.setData("AutoHashTag", this.storageKey, config);
        BdApi.showToast(`${opt.label} 선택됨`, { type: "success" });
        toggleInputs();
      });

      const label = document.createElement("label");
      label.textContent = opt.label;
      label.style.marginLeft = "8px";

      container.appendChild(radio);
      container.appendChild(label);
      panel.appendChild(container);
    });

    const inputContainer3 = document.createElement("div");
    inputContainer3.style.marginTop = "10px";

    const label3 = document.createElement("label");
    label3.textContent = "기능 3 메시지:";
    label3.style.display = "block";
    label3.style.marginBottom = "5px";
    inputContainer3.appendChild(label3);

    const input3 = document.createElement("input");
    input3.type = "text";
    input3.style.width = "100%";
    input3.value = config.customText3 || "";
    input3.addEventListener("input", () => {
      config.customText3 = input3.value;
      BdApi.setData("AutoHashTag", this.storageKey, config);
    });
    inputContainer3.appendChild(input3);
    panel.appendChild(inputContainer3);

    const inputContainer4 = document.createElement("div");
    inputContainer4.style.marginTop = "10px";

    const label4 = document.createElement("label");
    label4.textContent = "기능 4 접미사:";
    label4.style.display = "block";
    label4.style.marginBottom = "5px";
    inputContainer4.appendChild(label4);

    const input4 = document.createElement("input");
    input4.type = "text";
    input4.style.width = "100%";
    input4.value = config.customSuffix4 || "";
    input4.addEventListener("input", () => {
      config.customSuffix4 = input4.value;
      BdApi.setData("AutoHashTag", this.storageKey, config);
    });
    inputContainer4.appendChild(input4);
    panel.appendChild(inputContainer4);

    function toggleInputs() {
      inputContainer3.style.display = config.mode === "option3" ? "block" : "none";
      inputContainer4.style.display = config.mode === "option4" ? "block" : "none";
    }

    toggleInputs();

    return panel;
  }
};  
