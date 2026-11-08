
"use server";

export type GreetingState = {
  success: boolean;
  message: string;
  error: string;
};

export async function greetUser(
  prevState: GreetingState,
  formData: FormData
): Promise<GreetingState> {

  // Get submitted values
  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();

  // Validate fields
  if (!firstName?.trim() || !lastName?.trim()) {
    return {
      success: false,
      message: "",
      error: "Both names are required."
    };
  }

  // Generate greeting
  return {
    success: true,
    message: `Hello, ${firstName.trim()} ${lastName.trim()}!`,
    error: ""
  };
}
