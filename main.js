const messageItems = document.querySelectorAll(".message-item");

messageItems.forEach((messageItem, index) => {
  if (index > 0) {
    if (
      messageItems[index - 1].getAttribute("data-message-type") !==
      messageItems[index].getAttribute("data-message-type")
    ) {
      messageItem.style.marginTop = "16px";
    }
  }
});
