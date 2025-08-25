import { fetchWrapper } from "@/helpers/fetch-wrapper";
import { ContactFormInputs } from "@/types/contact";

const baseUrl = "https://formspree.io/f/xrblwavd";

const sendMessage = async (data: ContactFormInputs) => {
  return fetchWrapper.post(baseUrl, {
    body: fetchWrapper.convertBodyJsonStringify(data),
  });
};

export const contactService = {
  sendMessage,
};
