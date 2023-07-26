import cardUrl from "../data/carddata.json";

export const getCardData = async () => {
  console.log("i got called");
  try {
    let response = JSON.parse(cardUrl);
    console.log(response);
  } catch (error) {
    throw new Error(error);
  }
};
