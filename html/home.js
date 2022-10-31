const Title = document.getElementById('Title');

Title.addEventListener('mouseover', function handleMouseOver() {
  Title.style.color = 'red';
});
  
Title.addEventListener('mouseout', function handleMouseOut() {
  Title.style.color = 'black';
});
