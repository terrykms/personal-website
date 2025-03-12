"use server";

import clientPromise from "@/lib/database/mongodb";

export const sendMessage = async (prevState, formData) => {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const { name, email, message } = rawFormData;

  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  ) {
    return { success: 0, message: "Invalid input!" };
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection("messages").insertOne(rawFormData);
    rawFormData.id = result.insertedId;
  } catch (error) {
    return {
      success: 0,
      message: "Storing message failed.",
    };
  }
  return {
    success: 1,
    message: "Message successfully sent!",
  };
};
