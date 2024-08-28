// clear before unload
window.onbeforeunload = {} => {
  for(cost form of document.getElementsByTagName('form'))
  form.reset();
}