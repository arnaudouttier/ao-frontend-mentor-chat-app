const messageItems = document.querySelectorAll(".message-item");
let isRun = true;

const showHideMessages = () => {
  messageItems.forEach((messageItem, index) => {
    if (isRun) {
      const interval = setInterval(() => {
        messageItem.style.opacity = "1";
        clearInterval(interval);
      }, 1000 * index);
    }

    if (!isRun) {
      const interval = setInterval(() => {
        messageItem.style.opacity = "0";
        clearInterval(interval);
      }, 1000 * index);
    }
  });
  isRun = !isRun;
};

const verticalSpaceMessageType = () => {
  messageItems.forEach((messageItem, index) => {
    messageItem.style.opacity = "0";

    if (index > 0) {
      if (
        messageItems[index - 1].getAttribute("data-message-type") !==
        messageItems[index].getAttribute("data-message-type")
      ) {
        messageItem.style.marginTop = "16px";
      }
    }
  });
};

verticalSpaceMessageType();
showHideMessages();
setInterval(showHideMessages, 9000);
