const formatDate = (date: string) => {
  const dateUnformated = new Date(date);
  const dateFromated = `${dateUnformated.getDate()}/${dateUnformated.getMonth()}/${dateUnformated.getFullYear()}`;
  return dateFromated;
};

export default formatDate;
