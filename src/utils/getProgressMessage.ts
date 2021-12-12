function getProgressMessage(progress = 0) {
  if(progress < 10) {
    return "Interessado";
  } else if(progress >= 10 && progress < 30) {
    return "Aprendendo";
  } else if(progress >= 30 && progress < 40) {
    return "Já trabalou com";
  } else if(progress >= 40 && progress < 70) {
    return "Capaz de realizar projetos";
  } else if(progress >= 70 && progress < 90) {
    return "Capaz de liderar projetos";
  } else {
    return "Especializado";
  }
};

export { getProgressMessage };