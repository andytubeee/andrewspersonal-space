alert(
  "I have implemented 0 CSS on this page, things will look unpleasant. Viewer's discretion is advised"
);
if (!confirm('Enter the site?')) {
  document.body.innerHTML = '<h1>Understandable, have a great day!</h1>';
}
