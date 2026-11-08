
"use server";

export async function submitEmail(formData: FormData) {
  const email = formData.get("email")?.toString();

  console.log("Submitted Email:", email);
}
