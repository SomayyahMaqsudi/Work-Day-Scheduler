var today = new Date();
var currentHour = today.getHours();
document.write(today.toDateString());




// function updateTimeBlockColors() {
//     const currentHour = new Date().getHours();
  
//     document.querySelectorAll('.time-block').forEach(timeBlock => {
//       const hour = parseInt(timeBlock.dataset.hour);
  
//       if (hour >= 9 && hour <= 11) {
//         timeBlock.classList.add('past');
//       } else if (hour > 11 && hour < ) {
//         timeBlock.classList.add('present');
//       } else {
//         timeBlock.classList.add('future');
//       }
//     });
//   }
  
//   updateTimeBlockColors();
  
//   // Update the colors every hour
//   setInterval(updateTimeBlockColors, 60 * 60 * 1000);
  





  
document.querySelectorAll('.saveBtn').forEach(button => {
    button.addEventListener('click', function() {

      const timeBlockId = this.parentElement.id;
  
      const description = this.previousElementSibling.value;
  
      localStorage.setItem(timeBlockId, description);
    });
  });
  

  document.querySelectorAll('.time-block').forEach(timeBlock => {
    const savedDescription = localStorage.getItem(timeBlock.id);
    if (savedDescription) {
      timeBlock.querySelector('.description').value = savedDescription;
    }

  });
  



