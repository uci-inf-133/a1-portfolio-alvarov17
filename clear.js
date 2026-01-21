document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("sendBtn");
  
    sendBtn.addEventListener("click", () => {
      document.getElementById("exampleFormControlInput1").value = "";
      document.getElementById("exampleFormControlInput2").value = "";
      document.getElementById("exampleFormControlTextarea1").value = "";
  
      const modalEl = document.getElementById("exampleModal");
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) {
        modal.hide();
      }
    });
  });